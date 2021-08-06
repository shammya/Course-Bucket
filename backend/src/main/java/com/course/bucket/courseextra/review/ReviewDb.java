package com.course.bucket.courseextra.review;

import java.util.Date;

public class ReviewDb {

	private Integer courseId;
	private String  studentId;
	private Date time;
	private String text;
	
	
	
	public ReviewDb(Integer courseId, String studentId, Date time, String text) {
		super();
		this.courseId = courseId;
		this.studentId = studentId;
		this.time = time;
		this.text = text;
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



	public String getText() {
		return text;
	}



	public void setText(String text) {
		this.text = text;
	}
	
	
	
	
}

