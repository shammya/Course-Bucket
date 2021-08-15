package com.course.bucket.courseextra;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;

import com.course.bucket.course.Course;
import com.course.bucket.courseextra.review.ReviewInfo;
import com.course.bucket.database.DB;
import com.course.bucket.person.Student;
import com.course.bucket.person.Teacher;
import com.course.bucket.tools.ToolKit;

public class CourseRating {

    Integer id;
    Student student;
    Double value;
    Date time;

    
    public CourseRating(Integer id){
        this.id = id;
        ResultSet rs = DB.executeQuery("SELECT * FROM RATING WHERE ID = #", id.toString());
        try {
            rs.next();
            student = new Student(rs.getString("STUDENT_ID"));
            value = rs.getDouble("VALUE");
            time = rs.getTimestamp("TIME");
            rs.close();
        } catch (SQLException ex) {
            System.err.println("Error inside CourseRating");
        }
    }
    
    public CourseRating(Integer courseId, Student student) {
        this.student = student;
        ResultSet rs = DB.executeQuery("SELECT * FROM RATING WHERE COURSE_ID = # AND STUDENT_ID = '#'", courseId.toString(), student.getUsername());
        try {
            if(rs.next()){
                id = rs.getInt("ID");
                value = rs.getDouble("VALUE");
                time = rs.getTimestamp("TIME");
            }
            rs.close();
        } catch (SQLException ex) {
        	System.err.println("Error inside CourseRating");
        }
    }
    
    public CourseRating(Course course, Student student, Double value){
        this.id = DB.generateId("RATING");
        this.student = student;
        this.value = value;
        DB.execute("INSERT INTO RATING(ID, COURSE_ID, STUDENT_ID, VALUE, TIME) VALUES(#, #, '#', #, #)", id.toString(), course.getId().toString(), student.getUsername(), value.toString(), ToolKit.getCurTimeDB());
    }
    
    public static Double getValue(Course course){
        ResultSet rs = DB.executeQuery("SELECT AVG(VALUE) AVG FROM RATING WHERE COURSE_ID = #", course.getId().toString());
        try {
            if(!rs.next()) return 0.0;
            Double value = rs.getDouble("AVG");
            rs.close();
            return value;
        } catch (SQLException ex) {
        	System.err.println("Error inside CourseRating");        }
        return 0.0;
    }
    
    public static Double getValue(Teacher teacher){
        ResultSet rs = DB.executeQuery("SELECT AVG(VALUE) AVG FROM RATING WHERE COURSE_ID = ANY(SELECT ID FROM COURSE WHERE TEACHER_ID = '#')", teacher.getUsername());
        try {
            rs.next();
            Double value = rs.getDouble("AVG");
            rs.close();
            return value;
        } catch (SQLException ex) {
        	System.err.println("Error inside CourseRating");        }
        return 0.0;
    }
    
    public static Integer getCount(Course course, Integer value) {
        ResultSet rs = DB.executeQuery("SELECT COUNT(*) FROM RATING WHERE COURSE_ID = # AND VALUE = #", course.getId().toString(), value.toString());
        Integer result = 0;
        try {
            if(rs.next()){
                result = rs.getInt("COUNT(*)");
            }
            rs.close();
        } catch (SQLException ex) {
        	System.err.println("Error inside CourseRating");        }
        return result;
    }
    
    public static Integer getValue(Course course, Student student) {
        return getRatingByStudent(course.getId(), student.getUsername());
    }
    
    public static void delete(Course course) {
        DB.execute("DELETE FROM RATING WHERE COURSE_ID = #", course.getId().toString());
    }
    
    public static Integer getRatingByStudent(Integer courseId, String username) {
    	ResultSet rs = DB.executeQuery("SELECT VALUE FROM RATING WHERE COURSE_ID = # AND STUDENT_ID = '#'", courseId.toString(), username);
    	Integer result = 0;
        try {
            if(rs.next()){
                result = rs.getInt("VALUE");
            }
            rs.close();
        } catch (SQLException ex) {
        	System.err.println("Error inside CourseRating");        }
        return result;
    }
    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }
}
