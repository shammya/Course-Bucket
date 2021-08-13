package com.course.bucket.files;

import java.io.File;
import java.io.IOException;
import java.io.Serializable;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.apache.commons.io.FilenameUtils;
import org.springframework.web.multipart.MultipartFile;

import com.course.bucket.database.DB;
import com.course.bucket.tools.ToolKit;

import ch.qos.logback.core.subst.Token.Type;

/**
 * 
 * 1. For post api string will be sent through content field and file will be
 * sent through file field
 *  
 * 2. For get api both string and path of file will be
 * sent through content field and
 *
 */

public class Files{

	Integer id;
	FileType type;
	String title;
	String content;
	Date uploadTime;
	Date lastUpdateTime;

	public Files() {}
	public Files(Integer id) {
		this.id = id;
		ResultSet rs = DB.executeQuery("SELECT * FROM FILES WHERE ID = #", id.toString());
		try {
			if (!rs.next()) {
				rs.close();
				return;
			}
			type = FileType.createFromId(rs.getInt("TYPE"));
			title = rs.getString("TITLE");
			content = rs.getString("CONTENT");
			uploadTime = rs.getTimestamp("UPLOAD_TIME");
			lastUpdateTime = rs.getTimestamp("LAST_UPDATE");
			rs.close();
		} catch (SQLException ex) {
			Logger.getLogger(Files.class.getName()).log(Level.SEVERE, null, ex);
		}
	}

//    public Files(File file, FileType type){
//        this(file, type, "No Title");
//    }

//    public Files(File file, FileType type, String title){
//        this(type, title, ToolKit.copyFile(file, type, DB.generateId("FILES")));
//    }

//    public void setFile(File file){
//        String contentLocation = ToolKit.makeAbsoluteLocation(content).replace("/", "\\");
//        if(file.getAbsolutePath().equals(contentLocation)) return;
//        deleteFile();
//        setContent(ToolKit.copyFile(file, type, id));
//    }

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public FileType getType() {
		return type;
	}

	public void setType(FileType type) {
		this.type = type;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getUploadTime() {
		return uploadTime;
	}

	public void setUploadTime(Date uploadTime) {
		this.uploadTime = uploadTime;
	}

	public Date getLastUpdateTime() {
		return lastUpdateTime;
	}

	public void setLastUpdateTime(Date lastUpdateTime) {
		this.lastUpdateTime = lastUpdateTime;
	}
//	private void updateTime(){
//        DB.execute("UPDATE FILES SET LAST_UPDATE = # WHERE ID = #", ToolKit.getCurTimeDB(), id.toString());
//    }

	public String deleteFile(Integer id) {
		String path = null;
		try {
			ResultSet rs = DB.executeQuery("SELECT CONTENT FROM FILES WHERE ID = # ", id.toString());
			if (rs.next()) {
				path = rs.getString("CONTENT");
				DB.execute("DELETE FROM FILES WHERE ID = # ", id.toString());
			}
			rs.close();

		} catch (Exception e) {
			// TODO: handle exception
		}
		return path;
	}

	public static Integer createNewFile(Files files) {
		Integer id = DB.generateId("FILES");
		files.setId(id);
		String currentDate = ToolKit.getCurTimeDB();
		String sql = "INSERT INTO FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) VALUES (#,#,'#','#',#,#)";
		DB.executeQuery(sql, id.toString(), files.getType().getId().toString(), files.getTitle(), files.getContent(),
				currentDate, currentDate);
		return id;
	}

	public static void updateFile(Files files) {
		String currentDate = ToolKit.getCurTimeDB();
		DB.execute("UPDATE FILES SET TYPE = #,TITLE = '#' ,CONTENT = '#',LAST_UPDATE_TIME = # WHERE ID = #",
				files.getType().getId().toString(), files.getTitle(), files.getContent(),
				currentDate, files.getId().toString());
	}
	
	public String toString() {
		return title + ", " + content + ", "+ type.toString();
	}
	public void deleteContent(FileType type, String content) {
		switch(type) {
			case VIDEO:
			case PDF:
			case PICTURE: FileStorageService.deleteFile(content);
		}		
	}
	public void deleteContent() {
		ResultSet rs = DB.executeQuery("SELECT CONTENT, TYPE FROM FILES WHERE ID = #", id.toString());
		try {
			if(rs.next()) {
				String content = rs.getString("CONTENT");
				FileType type = FileType.createFromId(rs.getInt("TYPE"));
				deleteContent(type, content);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void update() {
		this.deleteContent();
		DB.execute("UPDATE FILES SET TYPE = #,TITLE = '#' ,CONTENT = '#',LAST_UPDATE = # WHERE ID = #",
				this.getType().getId().toString(), this.getTitle(), this.getContent(),
				ToolKit.getCurTimeDB(), this.id.toString());
	}
	
	public void delete() {
		this.deleteContent(type, content);
		DB.execute("DELETE FILES WHERE ID = #", id.toString());
//		deleteFile(this.getId());
	}

	public static void createPhoto(Files files, String email) {
		Integer id = createNewFile(files);
		DB.execute("UPDATE PERSON SET PHOTO_ID = # WHERE EMAIL = '#' ", id.toString(), email);
	}

//	
////	SLIDER => FILES_ID, ADMIN,
////	COURSE_CATEGORY => COURSE_ID, CATEGORY_ID
//
//	public static String getPhoto(String id) {
//		ResultSet rs = DB.executeQuery("SELECT CONTENT FROM FILES f  \n" + " WHERE\n"
//				+ " f.ID = (SELECT PHOTO_ID from PERSON p WHERE p.ID = '#')", id);
//		try {
//			if (rs.next()) {
//				return rs.getString("CONTENT");
//			}
//			return null;
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		return null;
//	}
//
//	public static void changePhoto(Files files) {
//		DB.execute("UPDATE FILES SET CONTENT = '#', LAST_UPDATE = # WHERE ID = #", files.getContent(),
//				ToolKit.JDateToDDate(files.getLastUpdateTime()), files.getId().toString());
//	}
//
//	public static void deletePhoto(Integer personId, Integer photoId) {
//		DB.execute("UPDATE  PERSON SET PHOTO_ID =NULL WHERE ID = # ", personId.toString());
//		DB.execute("DELETE FROM FILES WHERE ID = ", photoId.toString());
//
//	}
//

	public void delete() {
		DB.execute("DELETE FILES WHERE ID = #", id.toString());
		deleteFile(this.getId());
	}
//
//	public static String createNewMultipartfile(Integer id, FileType type, MultipartFile file) {
//		if (!file.isEmpty()) {
//			byte[] bytes;
//			try {
//				bytes = file.getBytes();
//				String url = "/resources/" + type.getName().toLowerCase() + "/" + id.toString() + "."
//						+ FilenameUtils.getExtension(file.getOriginalFilename());
//				Path path = Paths.get(url);
//				java.nio.file.Files.write(path, bytes);
//				return url;
//			} catch (IOException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//				System.err.println("\terror in createNewMultipartfile");
//			}
//
//		}
//		return "";
//	}
}
