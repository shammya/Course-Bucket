package com.course.bucket.notification;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;

import com.course.bucket.course.Course;
import com.course.bucket.database.DB;
import com.course.bucket.person.Admin;
import com.course.bucket.tools.ToolKit;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class Notification {

	private String userId;
	private String fromId;
	private Date time;
	private String seen;
	private Integer courseId;
	private String type;

	public Notification(String userId, String fromId, Date time, String seen, Integer courseId, String type) {
		super();
		this.userId = userId;
		this.fromId = fromId;
		this.time = time;
		this.seen = seen;
		this.courseId = courseId;
		this.type = type;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getFromId() {
		return fromId;
	}

	public void setFromId(String fromId) {
		this.fromId = fromId;
	}

	public Date getTime() {
		return time;
	}

	public void setTime(Date time) {
		this.time = time;
	}

	public String getSeen() {
		return seen;
	}

	public void setSeen(String seen) {
		this.seen = seen;
	}

	public Integer getCourseId() {
		return courseId;
	}

	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

//	public static ArrayList<Notification> getNotification(String userName) {
//		ArrayList<Notification> notifications = new ArrayList<>();
//
//		String sql = "select * from notification where user_id = '#'";
//		ResultSet rs = DB.executeQuery(sql, userName);
//
//		try {
//			while (rs.next()) {
//				notifications.add(new Notification(rs.getString("user_id"), rs.getString("from_id"),
//						new Date(rs.getTimestamp("time").getTime()), rs.getString("seen"), rs.getInt("course_id"),
//						rs.getString("type")));
//			}
//			return notifications;
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		return null;
//	}

	public static void notificationSeen(Integer id) {
		DB.execute("update notification set seen = 'T' where id = #", id.toString());
	}

	public static ArrayList<ObjectNode> getNotifications(ObjectMapper mapper, String username) {

		String sql = "select id, seen, user_id, type, time, course_id, from_id " + "from notification ";
		if (DB.isAdmin(username)) {
			sql += "where user_id = 'admin'  ";
		} else {
			sql += "where user_id = '#'  ";
		}
		sql += "order by time desc";
		ResultSet rs = DB.executeQuery(sql, username);
		ArrayList<ObjectNode> nodes = new ArrayList();
		try {
			while (rs.next()) {
				System.out.println(rs.getFetchSize());
				ObjectNode personNode = mapper.createObjectNode();
				ObjectNode courseNode = mapper.createObjectNode();
				ObjectNode node = mapper.createObjectNode();

				Integer id = rs.getInt("id");
				String type = rs.getString("type");
				String userId = rs.getString("user_id");
				String fromId = rs.getString("from_id");
				Integer courseId = rs.getInt("course_id");

				node.put("id", id);
				node.put("type", type);
				node.put("seen", ToolKit.DBoolToJBool(rs.getString("seen")));
				node.put("time", rs.getTimestamp("time").toString());

				switch (type) {
				case "REGISTRATION":
					personNode.setAll(personInfo(mapper, fromId));
					break;

				case "COURSEUPLOAD":
				case "COURSEPURCHASE":
				case "REVIEW":
				case "FAQANSWER":
				case "FAQQUESTION":
					personNode.setAll(personInfo(mapper, fromId));
					courseNode.setAll(courseInfo(mapper, courseId));
					break;

				case "RATING":
					personNode.setAll(personInfo(mapper, fromId));
					courseNode.setAll(courseInfo(mapper, courseId));
					courseNode.put("rating", ratingInfo(courseId, fromId));
					break;

				case "COURSEAPPROVED":
				case "COURSEUNAPPROVED":
				case "COURSEUPDATE":
					courseNode.setAll(courseInfo(mapper, courseId));
					break;
				default: 
					System.out.println("Notification type is not found");
				}
				node.setAll(courseNode);
				node.setAll(personNode);
				nodes.add(node);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println("\t\tNode size: "+nodes.size());

		return nodes;
	}

	public static Integer ratingInfo(Integer courseId, String fromId) {
		ResultSet rs = DB.executeQuery(
				"" + "select value " + "from rating " + "where student_id = '#' " + "and course_id = #", fromId,
				courseId.toString());
		try {
			rs.next();
			return rs.getInt("value");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return 0;
	}

	public static ObjectNode personInfo(ObjectMapper mapper, String fromId) {
		ObjectNode objectNode = mapper.createObjectNode();
		String sql = "select \r\n" + "	p.id username,\r\n"
				+ "	concat(p.first_name,concat(' ',p.last_name)) full_name,\r\n" + "	(\r\n"
				+ "	select content from files f where f.id = p.photo_id\r\n" + "	) photo,\r\n" + "	(\r\n"
				+ "	select unique((case when (select id from student where id = '#') is not null then 'student' else 'teacher' end))  account_type from 		student\r\n"
				+ "	) account_type\r\n" + "from\r\n" + "	person p\r\n" + "where \r\n" + "	p.id = '#'";
		ResultSet personRSet = DB.executeQuery(sql, fromId, fromId);
		try {
			personRSet.next();
			objectNode.put("username", personRSet.getString("username"));
			objectNode.put("fullName", personRSet.getString("full_name"));
			objectNode.put("photo", personRSet.getString("photo"));
			objectNode.put("accountType", personRSet.getString("account_type"));
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return objectNode;
	}

	public static ObjectNode courseInfo(ObjectMapper mapper, Integer courseId) {
		ObjectNode objectNode = mapper.createObjectNode();
		String sql = "" + "select id, title, " + "(select content from files where id = c.cover_id) content "
				+ "from course c " + "where id = #";
		ResultSet courseRS = DB.executeQuery(sql, courseId.toString());
		try {
			courseRS.next();
			objectNode.put("courseId", courseRS.getString("id"));
			objectNode.put("title", courseRS.getString("title"));
			objectNode.put("cover", courseRS.getString("content"));
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return objectNode;
	}

	public static void generateNotification(String userId, String fromId, Integer courseId, String type,
			Integer eventId) {
		Integer id = DB.generateId("notification");
		String sql = "insert into notification values( #,'#','#',#,'F',#,'#',#)";
		DB.execute(sql, id.toString(), userId, fromId, ToolKit.JDateToDDate(new Date()), courseId.toString(), type,
				eventId.toString());

	}
	
	public static void seenAllNotification(String username) {
		boolean admin = Admin.isAdmin(username);
		DB.execute("UPDATE NOTIFICATION SET SEEN = 'T' WHERE USER_ID = '#'", admin?"admin":username);
	}

//	public static ObjectNode getRegisteredPersonNotification(ObjectMapper mapper, String fromId) {
//		ObjectNode objectNode = mapper.createObjectNode();
//		String sql = "select \r\n"
//				+ "	p.id username,\r\n"
//				+ "	concat(p.first_name,concat(' ',p.last_name)) full_name,\r\n"
//				+ "	(\r\n"
//				+ "	select content from files f where f.id = p.photo_id\r\n"
//				+ "	) photo,\r\n"
//				+ "	(\r\n"
//				+ "	select unique((case when (select id from student where id = '#') is not null then 'student' else 'teacher' end))  account_type from 		student\r\n"
//				+ "	) account_type\r\n"
//				+ "from\r\n"
//				+ "	person p\r\n"
//				+ "where \r\n"
//				+ "	p.id = '#'";
//		ResultSet personRSet  = DB.executeQuery(sql, fromId, fromId);
//		try {
//			personRSet.next();
//			objectNode.put("username", personRSet.getString("username"));
//			objectNode.put("full_name", personRSet.getString("full_name"));
//			objectNode.put("photo", personRSet.getString("photo"));
//			objectNode.put("account_type", personRSet.getString("account_type"));
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		return objectNode;
//	}
//	
//	public static ObjectNode getCourseUploadNotification(ObjectMapper mapper, String fromId, Integer courseId) {
//		ObjectNode objectNode = mapper.createObjectNode();
//		String sql = "select \r\n"
//					+ "	p.id username,\r\n"
//					+ "	concat(p.first_name,concat(' ',p.last_name)) full_name,\r\n"
//					+ "	(\r\n"
//					+ "	select content from files f where f.id = p.photo_id\r\n"
//					+ "	) photo\r\n"
//					+ "from\r\n"
//					+ "	person p\r\n"
//					+ "where \r\n"
//					+ "	p.id = '#'";
//		ResultSet personRSet  = DB.executeQuery(sql, fromId);
//		try {
//			if(personRSet.next()) {
//				objectNode.put("username", fromId);
//				objectNode.put("full_name", personRSet.getString("full_name"));
//				objectNode.put("photo", personRSet.getString("photo"));
//			}
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		return objectNode;
//	}
//	
//	public static ArrayList<ObjectNode> getCoursePurchaseNotification(ObjectMapper mapper) {
//		ArrayList<ObjectNode> objectNodes = new ArrayList<>();
//		
//		String sql = "select \r\n"
//				+ "	n.time,\r\n"
//				+ "	n.from_id ,\r\n"
//				+ "	(\r\n"
//				+ "	select title from course where id = n.course_id\r\n"
//				+ "	) title\r\n"
//				+ "from \r\n"
//				+ "	notification n\r\n"
//				+ "where \r\n"
//				+ "	n.type = 'COURSEPURCHASE' and\r\n"
//				+ "	n.seen = 'F'\r\n"
//				+ "order by \r\n"
//				+ "	n.time desc";
//		ResultSet notificationRSet = DB.executeQuery(sql);
//		
//		try {
//			while(notificationRSet.next()) {
//				String username = notificationRSet.getString("from_id");
//				sql = "select \r\n"
//						+ "	p.id username,\r\n"
//						+ "	concat(p.first_name,concat(' ',p.last_name)) full_name,\r\n"
//						+ "	(\r\n"
//						+ "	select content from files f where f.id = p.photo_id\r\n"
//						+ "	) photo\r\n"
//						+ "from\r\n"
//						+ "	person p\r\n"
//						+ "where \r\n"
//						+ "	p.id = '#'";
//				ResultSet personRSet  = DB.executeQuery(sql, username);
//				ObjectNode objectNode = mapper.createObjectNode();
//				while(personRSet.next()) {
//					
//					objectNode.put("username", username);
//					objectNode.put("full_name", personRSet.getString("full_name"));
//					objectNode.put("photo", personRSet.getString("photo"));
//					objectNode.put("title", notificationRSet.getString("title"));
//					objectNode.put("time", notificationRSet.getTimestamp("time").toString());
//				}
//				objectNodes.add(objectNode);
//			}
//			return objectNodes;
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		return null;
//		
//	}
//	
//	public static ArrayList<ObjectNode> getCourseRatingNotification(ObjectMapper mapper) {
//		ArrayList<ObjectNode> objectNodes = new ArrayList<>();
//		
//		String sql = "select \r\n"
//				+ "	n.time,\r\n"
//				+ "	n.from_id ,\r\n"
//				+ "	(\r\n"
//				+ "	select title from course where id = n.course_id\r\n"
//				+ "	) title,\r\n"
//				+ "	n.course_id\r\n"
//				+ "from \r\n"
//				+ "	notification n\r\n"
//				+ "where \r\n"
//				+ "	n.type = 'RATING' and\r\n"
//				+ "	n.seen = 'F'\r\n"
//				+ "order by \r\n"
//				+ "	n.time desc\r\n"
//				+ "";
//		ResultSet notificationRSet = DB.executeQuery(sql);
//		
//		try {
//			while(notificationRSet.next()) {
//				String username = notificationRSet.getString("from_id");
//				sql = "select \r\n"
//						+ "	p.id username,\r\n"
//						+ "	concat(p.first_name,concat(' ',p.last_name)) full_name,\r\n"
//						+ "	(\r\n"
//						+ "	select content from files f where f.id = p.photo_id\r\n"
//						+ "	) photo,\r\n"
//						+ "	(\r\n"
//						+ "	select value from rating where student_id = p.id and course_id = #\r\n"
//						+ "	) rating\r\n"
//						+ "from\r\n"
//						+ "	person p\r\n"
//						+ "where \r\n"
//						+ "	p.id = '#'";
//				ResultSet personRSet  = DB.executeQuery(sql,notificationRSet.getString("course_id").toString(), username);
//				ObjectNode objectNode = mapper.createObjectNode();
//				while(personRSet.next()) {
//					
//					objectNode.put("username", username);
//					objectNode.put("full_name", personRSet.getString("full_name"));
//					objectNode.put("photo", personRSet.getString("photo"));
//					objectNode.put("title", notificationRSet.getString("title"));
//					objectNode.put("rating", personRSet.getString("rating"));
//					objectNode.put("time", notificationRSet.getTimestamp("time").toString());
//				}
//				objectNodes.add(objectNode);
//			}
//			return objectNodes;
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		return null;
//		
//	}
//	
//	public static ArrayList<ObjectNode> getCourseReviewNotification(ObjectMapper mapper) {
//		ArrayList<ObjectNode> objectNodes = new ArrayList<>();
//		
//		String sql = "select \r\n"
//				+ "	n.time,\r\n"
//				+ "	n.from_id ,\r\n"
//				+ "	(\r\n"
//				+ "	select title from course where id = n.course_id\r\n"
//				+ "	) title,\r\n"
//				+ "	n.course_id\r\n"
//				+ "from \r\n"
//				+ "	notification n\r\n"
//				+ "where \r\n"
//				+ "	n.type = 'REVIEW' and\r\n" 
//				+ "	n.seen = 'F'\r\n"
//				+ "order by \r\n"
//				+ "	n.time desc\r\n"
//				+ "";
//		ResultSet notificationRSet = DB.executeQuery(sql);
//		
//		try {
//			while(notificationRSet.next()) {
//				String username = notificationRSet.getString("from_id");
//				sql = "select \r\n"
//						+ "	p.id username,\r\n"
//						+ "	concat(p.first_name,concat(' ',p.last_name)) full_name,\r\n"
//						+ "	(\r\n"
//						+ "	select content from files f where f.id = p.photo_id\r\n"
//						+ "	) photo,\r\n"
//						+ "	(\r\n"
//						+ "	select id from review where student_id = p.id and course_id = 1\r\n"
//						+ "	) review_id,\r\n"
//						+ "	(\r\n"
//						+ "	select text from review where student_id = p.id and course_id = 1\r\n"
//						+ "	) review\r\n"
//						+ "from\r\n"
//						+ "	person p\r\n"
//						+ "where \r\n"
//						+ "	p.id = 'kazi'";
//				ResultSet personRSet  = DB.executeQuery(sql,notificationRSet.getString("course_id").toString(), username);
//				ObjectNode objectNode = mapper.createObjectNode();
//				while(personRSet.next()) {
//					
//					objectNode.put("username", username);
//					objectNode.put("full_name", personRSet.getString("full_name"));
//					objectNode.put("photo", personRSet.getString("photo"));
//					objectNode.put("title", notificationRSet.getString("title"));
//					objectNode.put("review_id", personRSet.getString("review_id"));
//					objectNode.put("review", personRSet.getString("review"));
//					objectNode.put("time", notificationRSet.getTimestamp("time").toString());
//				}
//				objectNodes.add(objectNode);
//			}
//			return objectNodes;
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		return null;
//		
//	}
//	
//	public static ArrayList<ObjectNode> getFaqQuestionNotification(ObjectMapper mapper) {
//		ArrayList<ObjectNode> objectNodes = new ArrayList<>();
//		
//		String sql = "select \r\n"
//				+ "	n.time,\r\n"
//				+ "	n.from_id ,\r\n"
//				+ "	(\r\n"
//				+ "	select title from course where id = n.course_id\r\n"
//				+ "	) title,\r\n"
//				+ "	n.course_id,\r\n"
//				+ "	(\r\n"
//				+ "	select concat(p.first_name,concat(' ',p.last_name)) full_name from person p where p.id = n.from_id\r\n"
//				+ "	) full_name,\r\n"
//				+ "	(\r\n"
//				+ "	select content from files f , person p where f.id = p.photo_id and p.id = n.from_id\r\n"
//				+ "	) photo,\r\n"
//				+ "	(\r\n"
//				+ "	select id from faq where id = n.event_id and course_id = n.course_id\r\n"
//				+ "	) faq_id\r\n"
//				+ "from \r\n"
//				+ "	notification n\r\n"
//				+ "where \r\n"
//				+ "	n.type = 'FAQQUESTION' and\r\n" 
//				+ "	n.seen = 'F' and\r\n"
//				+ "	n.event_id is not null\r\n"
//				+ "order by \r\n"
//				+ "	n.time desc";
//		ResultSet notificationRSet = DB.executeQuery(sql);
//		
//		try {
//			while(notificationRSet.next()) {
//				
//				ObjectNode objectNode = mapper.createObjectNode();
//					
//					objectNode.put("username", notificationRSet.getString("from_id"));
//					objectNode.put("full_name", notificationRSet.getString("full_name"));
//					objectNode.put("photo", notificationRSet.getString("photo"));
//					objectNode.put("title", notificationRSet.getString("title"));
//					objectNode.put("faq_id", notificationRSet.getString("faq_id"));
//					objectNode.put("course_id", notificationRSet.getString("course_id"));
//					objectNode.put("time", notificationRSet.getTimestamp("time").toString());
//
//					objectNodes.add(objectNode);
//			}
//			return objectNodes;
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		return null;
//		
//	}
//	
//	public static ArrayList<ObjectNode> getCourseApproveNotification(ObjectMapper mapper) {
//		ArrayList<ObjectNode> objectNodes = new ArrayList<>();
//		
//		String sql = "select \r\n"
//				+ "	n.id ,\r\n"
//				+ "	n.course_id,\r\n"
//				+ "	(\r\n"
//				+ "	select title from course where id = n.course_id\r\n"
//				+ "	) title,\r\n"
//				+ "	(\r\n"
//				+ "	select f.content from files f,course c where c.cover_id = f.id and c.id = n.course_id\r\n"
//				+ "	) photo,\r\n"
//				+ "	n.time\r\n"
//				+ "	\r\n"
//				+ "from \r\n"
//				+ "	notification n\r\n"
//				+ "where \r\n"
//				+ "	n.type = 'COURSEAPPROVED' and\r\n" 
//				+ "	n.seen = 'F' \r\n"
//				+ "order by \r\n"
//				+ "	n.time desc";
//		ResultSet notificationRSet = DB.executeQuery(sql);
//		
//		try {
//			while(notificationRSet.next()) {
//				
//				ObjectNode objectNode = mapper.createObjectNode();
//					
//					objectNode.put("course_id", notificationRSet.getString("course_id"));
//					objectNode.put("title", notificationRSet.getString("title"));
//					objectNode.put("photo", notificationRSet.getString("photo"));
//					objectNode.put("title", notificationRSet.getString("title"));
//					objectNode.put("time", notificationRSet.getString("time"));
//
//					objectNodes.add(objectNode);
//			}
//			return objectNodes;
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		return null;
//		
//	}
//
//	public static ArrayList<ObjectNode> getCourseUnapproveNotification(ObjectMapper mapper) {
//		ArrayList<ObjectNode> objectNodes = new ArrayList<>();
//		
//		String sql = "select \r\n"
//				+ "	n.id ,\r\n"
//				+ "	n.course_id,\r\n"
//				+ "	(\r\n"
//				+ "	select title from course where id = n.course_id\r\n"
//				+ "	) title,\r\n"
//				+ "	(\r\n"
//				+ "	select f.content from files f,course c where c.cover_id = f.id and c.id = n.course_id\r\n"
//				+ "	) photo,\r\n"
//				+ "	n.time\r\n"
//				+ "	\r\n"
//				+ "from \r\n"
//				+ "	notification n\r\n"
//				+ "where \r\n"
//				+ "	n.type = 'COURSEUNAPPROVED' and\r\n" 
//				+ "	n.seen = 'F' \r\n"
//				+ "order by \r\n"
//				+ "	n.time desc";
//		ResultSet notificationRSet = DB.executeQuery(sql);
//		
//		try {
//			while(notificationRSet.next()) {
//				
//				ObjectNode objectNode = mapper.createObjectNode();
//					
//					objectNode.put("course_id", notificationRSet.getString("course_id"));
//					objectNode.put("title", notificationRSet.getString("title"));
//					objectNode.put("photo", notificationRSet.getString("photo"));
//					objectNode.put("title", notificationRSet.getString("title"));
//					objectNode.put("time", notificationRSet.getString("time"));
//
//					objectNodes.add(objectNode);
//			}
//			return objectNodes;
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		return null;
//		
//	}
//	
//	public static ArrayList<ObjectNode> getFaqAnswerNotification(ObjectMapper mapper) {
//		ArrayList<ObjectNode> objectNodes = new ArrayList<>();
//		
//		String sql = "select \r\n"
//				+ "	n.time,\r\n"
//				+ "	n.from_id ,\r\n"
//				+ "	(\r\n"
//				+ "	select title from course where id = n.course_id\r\n"
//				+ "	) title,\r\n"
//				+ "	n.course_id,\r\n"
//				+ "	(\r\n"
//				+ "	select concat(p.first_name,concat(' ',p.last_name)) full_name from person p where p.id = n.from_id\r\n"
//				+ "	) full_name,\r\n"
//				+ "	(\r\n"
//				+ "	select content from files f , person p where f.id = p.photo_id and p.id = n.from_id\r\n"
//				+ "	) photo,\r\n"
//				+ "	(\r\n"
//				+ "	select id from faq where id = n.event_id and course_id = n.course_id\r\n"
//				+ "	) faq_id\r\n"
//				+ "from \r\n"
//				+ "	notification n\r\n"
//				+ "where \r\n"
//				+ "	n.type = 'FAQQUESTION' and\r\n"
//				+ "	n.seen = 'F' and\r\n"
//				+ "	n.event_id is not null\r\n"
//				+ "order by \r\n"
//				+ "	n.time desc";
//		ResultSet notificationRSet = DB.executeQuery(sql);
//		
//		try {
//			while(notificationRSet.next()) {
//				
//				ObjectNode objectNode = mapper.createObjectNode();
//					
//					objectNode.put("username", notificationRSet.getString("from_id"));
//					objectNode.put("full_name", notificationRSet.getString("full_name"));
//					objectNode.put("photo", notificationRSet.getString("photo"));
//					objectNode.put("title", notificationRSet.getString("title"));
//					objectNode.put("faq_id", notificationRSet.getString("faq_id"));
//					objectNode.put("course_id", notificationRSet.getString("course_id"));
//					objectNode.put("time", notificationRSet.getTimestamp("time").toString());
//
//					objectNodes.add(objectNode);
//			}
//			return objectNodes;
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		return null;
//		
//	}

}
