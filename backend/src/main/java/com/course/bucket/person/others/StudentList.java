package com.course.bucket.person;

import java.util.ArrayList;
import java.util.Date;

public class StudentList {
	 private Integer courseId;
	 private String courseName;
	 private String courseImage;
	 private String courseSubtitle;
	 ArrayList<StudentInfo> studentInfoList;
	 
	 public StudentList() {
		 
	 }
	 
	public StudentList(Integer courseId, String courseName, String courseImage, String courseSubtitle,
			ArrayList<StudentInfo> studntInfolistList) {
		super();
		this.courseId = courseId;
		this.courseName = courseName;
		this.courseImage = courseImage;
		this.courseSubtitle = courseSubtitle;
		this.studentInfoList = studntInfolistList;
	}

	public Integer getCourseId() {
		return courseId;
	}

	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public String getCourseImage() {
		return courseImage;
	}

	public ArrayList<StudentInfo> getStudentInfoList() {
		return studentInfoList;
	}

	public void setStudentInfoList(ArrayList<StudentInfo> studentInfoList) {
		this.studentInfoList = studentInfoList;
	}

	public void setCourseImage(String courseImage) {
		this.courseImage = courseImage;
	}

	public String getCourseSubtitle() {
		return courseSubtitle;
	}

	public void setCourseSubtitle(String courseSubtitle) {
		this.courseSubtitle = courseSubtitle;
	}
	 
	 

}

class StudentInfo{
	
	private String studentUsername;
	private String studentImage;
	private String studentName;
	private Date enrolledDate;
	
	public StudentInfo() {
		
	}
	
	public StudentInfo(String studentUsername, String studentImage, String studentName, Date enrolledDate) {
		super();
		this.studentUsername = studentUsername;
		this.studentImage = studentImage;
		this.studentName = studentName;
		this.enrolledDate = enrolledDate;
	}

	public String getStudentUsername() {
		return studentUsername;
	}

	public void setStudentUsername(String studentUsername) {
		this.studentUsername = studentUsername;
	}

	public String getStudentImage() {
		return studentImage;
	}

	public void setStudentImage(String studentImage) {
		this.studentImage = studentImage;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public Date getEnrolledDate() {
		return enrolledDate;
	}

	public void setEnrolledDate(Date enrolledDate) {
		this.enrolledDate = enrolledDate;
	}
	
	
	
}
