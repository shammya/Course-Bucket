package com.course.bucket.course;

import java.lang.System.Logger.Level;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;

import com.course.bucket.database.DB;
import com.course.bucket.files.Files;
import com.course.bucket.tools.ToolKit;

public class Lecture {
    Integer id;
    Integer lectureNo;
    String title;
    Date lastUpdate;
    Files file;
    boolean preview;
    
    public Lecture() {}
    
    public Lecture(Integer id){
        this.id = id;
        ResultSet rs = DB.executeQuery("SELECT * FROM LECTURE WHERE ID = #", id.toString());
        try {
            while(rs.next()){
                lectureNo = rs.getInt("LECTURE_NO");
                title = rs.getString("TITLE");
                lastUpdate = rs.getTimestamp("LAST_UPDATE");
                preview = ToolKit.DBoolToJBool(rs.getString("IS_PREVIEW"));
                file = new Files(rs.getInt("FILE_ID"));  
            }
            rs.close();
        } catch (SQLException ex) {
        	System.out.println("error in lecture");
        }
    }

    public Files getFile() {
        return file;
    }

    public void setFile(Files file) {
        this.file = file;
    }
    
    public Lecture(Integer lectureNo, String title, Files file, boolean isPreview, Week week){
        this.id = DB.generateId("LECTURE");
        this.lectureNo = lectureNo;
        this.title = title;
        this.file = file;
        this.preview = isPreview;
        this.lastUpdate = ToolKit.getCurTime();
        DB.execute(
              "INSERT INTO LECTURE(ID, LECTURE_NO, TITLE, LAST_UPDATE, IS_PREVIEW, WEEK_ID, FILE_ID) VALUES(#, #, '#', #, '#', #, #)", 
              id.toString(), lectureNo.toString(), title, ToolKit.JDateToDDate(lastUpdate), ToolKit.JBoolToDBool(isPreview), week.getId().toString(), file.getId().toString()
        );
    }
    
    public static ArrayList<Lecture> getLectures(Week week){
        ArrayList<Lecture> lectures = new ArrayList<>();
        ResultSet rs = DB.executeQuery("SELECT ID FROM LECTURE WHERE WEEK_ID = #", week.getId().toString());
        try {
            while(rs.next()){
                lectures.add(new Lecture(rs.getInt("ID")));
            }
            rs.close();
        } catch (SQLException ex) {
           System.out.println("error in getlectures");
        }
        
        return lectures;
    }

    public Integer getId() {
        return id;
    }


	public boolean isPreview() {
		return preview;
	}

	public void setPreview(boolean preview) {
		this.preview = preview;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public void setLastUpdate(Date lastUpdate) {
		this.lastUpdate = lastUpdate;
	}

	public Integer getLectureNo() {
        return lectureNo;
    }

    public void setLectureNo(Integer lectureNo) {
        this.lectureNo = lectureNo;
//        DB.execute("UPDATE LECTURE SET LECTURE_NO = # WHERE ID = #", lectureNo.toString(), id.toString());
//        updateTime();
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
//        DB.execute("UPDATE LECTURE SET TITLE = '#' WHERE ID = #", title, id.toString());
//        updateTime();
    }

    public Date getLastUpdate() {
        return lastUpdate;
    }

    private void updateTime() {
        this.lastUpdate = ToolKit.getCurTime();
        DB.execute("UPDATE LECTURE SET LAST_UPDATE = # WHERE ID = #", ToolKit.JDateToDDate(lastUpdate), id.toString());
    }

    public boolean isIsPreview() {
        return preview;
    }

    public void setIsPreview(boolean isPreview) {
        this.preview = isPreview;
//        DB.execute("UPDATE LECTURE SET IS_PREVIEW = '#' WHERE ID = #", ToolKit.JBoolToDBool(isPreview), id.toString());
//        updateTime();
    }
    
    public void delete(){
        DB.execute("DELETE LECTURE WHERE ID = #", id.toString());
        file.delete();
    }
    
    public void upload(Integer weekId) {
    	System.out.println("Preview: "+preview);
    	Files.createNewFile(file);
    	id = DB.generateId("lecture");
		String lectureSql = "insert into lecture(id,lecture_no,title,last_update,is_preview,week_id,file_id) values(#,#,'#',#,'#',#,#)";
		DB.execute(lectureSql, id.toString(), lectureNo.toString(), title,
				ToolKit.getCurTimeDB(), ToolKit.JBoolToDBool(preview),
				weekId.toString(), file.getId().toString());
    }
    public void update() {
    	file.update();
    	DB.execute(""
    			+ "UPDATE LECTURE SET "
    			+ "LECTURE_NO = #, "
    			+ "TITLE = '#', "
    			+ "LAST_UPDATE = #, "
    			+ "IS_PREVIEW = '#' "
    			+ "WHERE ID = #",
    			lectureNo.toString(),
    			title,
    			ToolKit.getCurTimeDB(),
    			ToolKit.JBoolToDBool(preview),
    			id.toString());
    }
    
}
