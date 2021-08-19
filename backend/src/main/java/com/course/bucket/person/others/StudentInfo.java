package com.course.bucket.person.others;

import java.util.Date;

public class StudentInfo{
	
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
