package com.course.bucket.courseextra.purchasehistory;

import java.lang.System.Logger.Level;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.logging.Logger;

import com.course.bucket.course.Course;
import com.course.bucket.database.DB;
import com.course.bucket.person.Student;
import com.course.bucket.tools.ToolKit;

public class PurchaseHistory {
	Integer id;
	Integer courseId;
	String studentId;
	Date time;
	Double cost;

	public PurchaseHistory() {
	}

	public PurchaseHistory(Integer id) {
		try {
			ResultSet rs = DB.executeQuery("SELECT * FROM PURCHASE_HISTORY WHERE ID = #", id.toString());
			rs.next();
			this.id = id;
			courseId = rs.getInt("COURSE_ID");
			studentId = rs.getString("STUDENT_ID");
			time = rs.getTimestamp("TIME");
			cost = rs.getDouble("COST");
			rs.close();
		} catch (SQLException ex) {
			System.err.println("Error in PurchaseHistory");
		}
	}

	public PurchaseHistory(Integer courseId, String studentId) {
		this.courseId = courseId;
		this.studentId = studentId;
		try {
			ResultSet rs = DB.executeQuery(
					"SELECT * FROM PURCHASE_HISTORY WHERE COURSE_ID = # AND STUDENT_ID = '#' ORDER BY TIME DESC",
					courseId.toString(), studentId);
			if (rs.next()) {
				this.id = rs.getInt("ID");
				this.cost = rs.getDouble("COST");
				this.time = rs.getTimestamp("TIME");
			}
		} catch (SQLException ex) {
			System.err.println("Error in PurchaseHistory");
		}
	}

//	public PurchaseHistory(Course course, Student student, Double cost) {
//		this.id = DB.generateId("PURCHASE_HISTORY");
//		this.course = course;
//		this.student = student;
//		this.time = ToolKit.getCurTime();
//		this.cost = cost;
//		DB.execute("INSERT INTO PURCHASE_HISTORY(ID, COURSE_ID, STUDENT_ID, TIME, COST) VALUES(#, #, '#', #, #)",
//				id.toString(), course.getId().toString(), student.getUsername(), ToolKit.JDateToDDate(time),
//				cost.toString());
//	}
	
	

	public static ArrayList<PurchaseHistory> getPurchasedStudentInfo(String teacherName) {
		ArrayList<PurchaseHistory> list = new ArrayList<PurchaseHistory>();
		try {
			ResultSet rs = DB.executeQuery(
					"SELECT * FROM PURCHASE_HISTORY WHERE COURSE_ID = ANY(SELECT ID FROM COURSE WHERE TEACHER_ID = '#') ORDER BY TIME DESC",
					teacherName);
			while (rs.next()) {
				PurchaseHistory ph = new PurchaseHistory();
				ph.id = rs.getInt("ID");
				ph.courseId = rs.getInt("COURSE_ID");
				ph.studentId = rs.getString("STUDENT_ID");
				ph.cost = rs.getDouble("COST");
				ph.time = rs.getTimestamp("TIME");
				list.add(ph);
			}
		} catch (SQLException ex) {
			System.err.println("Error in getPurchasedStudentInfo");
		}
		return list;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	

	public Integer getCourseId() {
		return courseId;
	}

	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}

	public String getStudentId() {
		return studentId;
	}

	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}

	public Date getTime() {
		return time;
	}

	public void setTime(Date time) {
		this.time = time;
	}

	public Double getCost() {
		return cost;
	}

	public void setCost(Double cost) {
		this.cost = cost;
	}

	public static HashMap<Integer, ArrayList<PurchaseHistory>> getEnrolledStudentList(String teacherName) {
		try {
			HashMap<Integer, ArrayList<PurchaseHistory>> lists = new HashMap<Integer, ArrayList<PurchaseHistory>>();
			ResultSet rsCourse = DB.executeQuery(
					"SELECT COURSE_ID FROM PURCHASE_HISTORY WHERE COURSE_ID = ANY( SELECT ID FROM COURSE WHERE TEACHER_ID = '#' ) GROUP BY COURSE_ID ORDER BY MAX(TIME) DESC",
					teacherName);
			Integer courseId = rsCourse.getInt("COURSE_ID");
			while (rsCourse.next()) {
				ArrayList<PurchaseHistory> list = new ArrayList();
				Course course = new Course(rsCourse.getInt("COURSE_ID"));
				ResultSet rsPH = DB.executeQuery(
						"SELECT * FROM PURCHASE_HISTORY WHERE COURSE_ID = # ORDER BY TIME DESC",
						course.getId().toString());
				while (rsPH.next()) {
					PurchaseHistory ph = new PurchaseHistory();
					ph.setId(rsPH.getInt("ID"));
					ph.setStudentId(rsPH.getString("STUDENT_ID"));
					ph.setCourseId(courseId);
					ph.setTime(rsPH.getTimestamp("TIME"));
					ph.setCost(rsPH.getDouble("COST"));
					list.add(ph);
				}
				lists.put(courseId, list);
		
			}
			return lists;
		} catch (SQLException ex) {
			System.err.println("Error in getEnrolledStudentList");
		}
		return null;
	}

	public static void delete(Course course) {
		DB.execute("DELETE FROM PURCHASE_HISTORY WHERE COURSE_ID = #", course.getId().toString());
	}

}
