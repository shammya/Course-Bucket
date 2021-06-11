package com.course.bucket.course;



import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.course.bucket.database.DB;
import com.course.bucket.tools.ToolKit;


public class Week {
    Integer id;
    Integer weekNo;
    String title;
    Date lastUpdate;
    ArrayList<Lecture> lectures;

    public Week(Integer id){
        this.id = id;
        ResultSet rs = DB.executeQuery("SELECT * FROM WEEK WHERE ID = #", id.toString());
        try {
            while(rs.next()){
                weekNo = rs.getInt("WEEK_NO");
                title = rs.getString("TITLE");
                lastUpdate = rs.getTimestamp("LAST_UPDATE");
                lectures = Lecture.getLectures(this);
            }
            rs.close();
        } catch (SQLException ex) {
            Logger.getLogger(Week.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public Week(Integer weekNo, String title, Course course){
        this.id = DB.generateId("WEEK");
        this.weekNo = weekNo;
        this.title = title;
        this.lastUpdate = ToolKit.getCurTime();
        
        DB.execute(
              "INSERT INTO WEEK(ID, WEEK_NO, TITLE, LAST_UPDATE, COURSE_ID) VALUES(#, #, '#', #, #)", 
              id.toString(), weekNo.toString(), title, ToolKit.JDateToDDate(lastUpdate), course.getId().toString()
        );
    }
    
    public static ArrayList<Week> getWeeks(Course course){
        ArrayList<Week> weeks = new ArrayList<Week>();
        ResultSet rsWeek = DB.executeQuery("SELECT ID FROM WEEK WHERE COURSE_ID = # ORDER BY WEEK_NO ASC", course.getId().toString());
        try {
            while(rsWeek.next()){
                weeks.add(new Week(rsWeek.getInt("ID")));
            }
            rsWeek.close();
        } catch (SQLException ex) {
            Logger.getLogger(Week.class.getName()).log(Level.SEVERE, null, ex);
        }
        return weeks;
    }

    public Integer getId() {
        return id;
    }

    public Integer getWeekNo() {
        return weekNo;
    }

    public void setWeekNo(Integer weekNo) {
        this.weekNo = weekNo;
        DB.execute("UPDATE WEEK SET WEEK_NO = # WHERE ID = #", weekNo.toString(), id.toString());
        updateTime();
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
        DB.execute("UPDATE WEEK SET TITLE = '#' WHERE ID = #", title, id.toString());
        updateTime();
    }

    public Date getLastUpdate() {
        return lastUpdate;
    }

    private void updateTime() {
        this.lastUpdate = ToolKit.getCurTime();
        DB.execute("UPDATE WEEK SET LAST_UPDATE = # WHERE ID = #", ToolKit.JDateToDDate(lastUpdate), id.toString());
    }
    
    public ArrayList<Lecture> getLectures() {
        return lectures;
    }

    public void setLectures(ArrayList<Lecture> lectures) {
        this.lectures = lectures;
    }
    
    public void delete(){
        for(Lecture lecture : lectures){
            lecture.delete();
        }
        DB.execute("DELETE WEEK WHERE ID = #", id.toString());
    }
    
    public void addLecture(Lecture lecture){
        this.lectures.add(lecture);
    }
}
