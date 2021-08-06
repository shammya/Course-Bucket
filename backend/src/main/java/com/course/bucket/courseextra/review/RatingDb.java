package com.course.bucket.courseextra.review;

import java.util.Date;

public class RatingDb {

	private Integer courseId;
	private String studentId;
	private Double value;
	private Date time;
	
	
	public RatingDb(Integer courseId, String studentId, Double value, Date time) {
		super();
		this.courseId = courseId;
		this.studentId = studentId;
		this.value = value;
		this.time = time;
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
