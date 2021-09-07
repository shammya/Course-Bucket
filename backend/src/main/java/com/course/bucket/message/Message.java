package com.course.bucket.message;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.course.bucket.database.DB;
import com.course.bucket.files.Files;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.JsonNodeCreator;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class Message {
	Integer id;
	Files file;
	String senderId;
	String receiverId;
	

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Files getFile() {
		return file;
	}

	public void setFile(Files file) {
		this.file = file;
	}

	public String getSenderId() {
		return senderId;
	}

	public void setSenderId(String senderId) {
		this.senderId = senderId;
	}

	public String getReceiverId() {
		return receiverId;
	}

	public void setReceiverId(String receiverId) {
		this.receiverId = receiverId;
	}

	public Message() {}

	public Message(Integer id) {
		ResultSet rs = DB.executeQuery(""
				+ "SELECT * "
				+ "FROM MESSAGE "
				+ "WHERE ID = #", id.toString());
		try {
			if(rs.next()) {
				this.id = id;
				this.senderId = rs.getString("sender_id");
				this.receiverId = rs.getString("receiver_id");
				this.file = new Files(rs.getInt("file_id"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static void insertNewMessage(Message message) {
		Integer fileId = Files.createNewFile(message.getFile());
		Integer id = DB.generateId("MESSAGE");
		DB.execute(""
				+ "INSERT INTO MESSAGE "
				+ "(ID, SENDER_ID, RECEIVER_ID, FILE_ID) "
				+ "VALUES(#, '#', '#', #)",
				id.toString(), 
				message.getSenderId(),
				message.getReceiverId(),
				fileId.toString());
	}
	
	public static ObjectNode messageList(ObjectMapper mapper, String sender, String receiver) {
		ObjectNode node = mapper.createObjectNode();
		ArrayList<Message> list = new ArrayList();
		ResultSet messageRS = DB.executeQuery(""
				+ "SELECT M.ID "
				+ "FROM MESSAGE M, FILES F "
				+ "WHERE "
				+ "((M.SENDER_ID = '#' AND M.RECEIVER_ID = '#' ) "
				+ "OR (M.SENDER_ID = '#' AND M.RECEIVER_ID = '#')) "
				+ "AND F.ID = M.FILE_ID "
				+ "ORDER BY F.UPLOAD_TIME ASC", 
				sender, receiver, receiver, sender);

		try {
			while(messageRS.next()) {
				System.out.println("printing");
				list.add(new Message(messageRS.getInt("ID")));
			}
			ResultSet personRS = DB.executeQuery(""
					+ "SELECT P.ID, CONCAT(CONCAT(P.FIRST_NAME, ' '), P.LAST_NAME) FULL_NAME, F.CONTENT photo "
					+ "FROM PERSON P, FILES F "
					+ "WHERE P.PHOTO_ID = F.ID "
					+ "AND P.ID = '#'"
					, receiver);
			if(personRS.next()) {
				node.put("username", personRS.getString("id"));
				node.put("fullName", personRS.getString("full_name"));
				node.put("photo", personRS.getString("photo"));
				node.put("messages", mapper.readTree(mapper.writeValueAsString(list)));
			}
		} catch (SQLException | JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return node;
	}
	
	public static ArrayList<ObjectNode> getConversationList(ObjectMapper mapper, String username){
		ArrayList<ObjectNode> list = new ArrayList();
		ResultSet idRS = DB.executeQuery(""
				+ "SELECT MAX(MESSAGE_ID) ID, USERNAME\r\n"
				+ "FROM (\r\n"
				+ "SELECT MAX(M.ID) MESSAGE_ID, M.RECEIVER_ID USERNAME\r\n"
				+ "FROM MESSAGE M, FILES F\r\n"
				+ "WHERE M.FILE_ID = F.ID \r\n"
				+ "GROUP BY M.SENDER_ID, M.RECEIVER_ID\r\n"
				+ "HAVING M.SENDER_ID = '#'\r\n"
				+ "union\r\n"
				+ "SELECT  MAX(M.ID) MESSAGE_ID, M.SENDER_ID USERNAME\r\n"
				+ "FROM MESSAGE M, FILES F\r\n"
				+ "WHERE M.FILE_ID = F.ID \r\n"
				+ "GROUP BY M.SENDER_ID, M.RECEIVER_ID\r\n"
				+ "HAVING M.RECEIVER_ID = '#'\r\n"
				+ ")\r\n"
				+ "GROUP BY USERNAME\r\n"
				+ "ORDER BY MAX(MESSAGE_ID) DESC\r\n"
				+ ""
				, username, username);
		try {
			while(idRS.next()) {
				System.out.println("conversation found");
				ResultSet rs = DB.executeQuery(""
						+ "SELECT M.ID MESSAGE_ID, P.ID USERNAME, PF.CONTENT PHOTO, \r\n"
						+ "CONCAT(CONCAT(P.FIRST_NAME, ' '), P.LAST_NAME) FULL_NAME, \r\n"
						+ "P.FIRST_NAME FIRST_NAME, \n"
						+ "MF.CONTENT MESSAGE, MF.UPLOAD_TIME TIME, FP.TYPE TYPE\r\n"
						+ "FROM MESSAGE M, FILES MF, PERSON P, FILES PF, FILE_TYPE FP\r\n"
						+ "WHERE M.FILE_ID = MF.ID\r\n"
						+ "AND MF.TYPE = FP.id\r\n"
						+ "AND P.PHOTO_ID = PF.ID\r\n"
						+ "AND (CASE WHEN M.SENDER_ID='#' THEN M.RECEIVER_ID ELSE M.SENDER_ID END) = P.ID\r\n"
						+ "AND M.ID = #\r\n"
						, username, String.valueOf(idRS.getInt("ID")));
				rs.next();
				ObjectNode node = mapper.createObjectNode();
				Message m = new Message(idRS.getInt("ID"));
				node.put("message", mapper.readTree(mapper.writeValueAsString(m)));
				node.put("photo", rs.getString("photo"));
				node.put("fullName", rs.getString("full_name"));
				node.put("firstName", rs.getString("first_name"));
				list.add(node);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	
}
