package com.course.bucket.person;

import java.util.ArrayList;
import java.util.Date;

public class StudentList {
	
	 private String courseName;
	 private String courseImage;
	 private String courseSubtitle;
	 ArrayList<StudentInfo> studntInfolistList;
	 
	 public StudentList() {
		 
	 }
	 
	public StudentList(String courseName, String courseImage, String courseSubtitle,
			ArrayList<StudentInfo> studntInfolistList) {
		super();
		this.courseName = courseName;
		this.courseImage = courseImage;
		this.courseSubtitle = courseSubtitle;
		this.studntInfolistList = studntInfolistList;
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

	public void setCourseImage(String courseImage) {
		this.courseImage = courseImage;
	}

	public String getCourseSubtitle() {
		return courseSubtitle;
	}

	public void setCourseSubtitle(String courseSubtitle) {
		this.courseSubtitle = courseSubtitle;
	}

	public ArrayList<StudentInfo> getStudntInfolistList() {
		return studntInfolistList;
	}

	public void setStudntInfolistList(ArrayList<StudentInfo> studntInfolistList) {
		this.studntInfolistList = studntInfolistList;
	}
	 
	 

}

class StudentInfo{
	
	private String studentImage;
	private String studentName;
	private Date enrolledDate;
	
	public StudentInfo() {
		
	}
	
	public StudentInfo(String studentImage, String studentName, Date enrolledDate) {
		super();
		this.studentImage = studentImage;
		this.studentName = studentName;
		this.enrolledDate = enrolledDate;
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