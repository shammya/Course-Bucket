package com.course.bucket.courseextra.purchasehistory;

import java.util.Date;

public class PurchaseHistoryDb {

	private Integer courseId;
	private String studentId;
	private Date time;
	private Double cost;
	
	
	public PurchaseHistoryDb(Integer courseId, String studentId, Date time, Double cost) {
		super();
		this.courseId = courseId;
		this.studentId = studentId;
		this.time = time;
		this.cost = cost;
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
	
	
	
	
}
