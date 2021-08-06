package com.course.bucket.person;

public class TeacherInfoAdmin {

	private String username;
	private Integer courseCreated;
	private Integer coursePurchased;
	private Double totalIncome;
	
	
	public TeacherInfoAdmin(String username, Integer courseCreated, Integer coursePurchased, Double totalIncome) {
		super();
		this.username = username;
		this.courseCreated = courseCreated;
		this.coursePurchased = coursePurchased;
		this.totalIncome = totalIncome;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public Integer getCourseCreated() {
		return courseCreated;
	}


	public void setCourseCreated(Integer courseCreated) {
		this.courseCreated = courseCreated;
	}


	public Integer getCoursePurchased() {
		return coursePurchased;
	}


	public void setCoursePurchased(Integer coursePurchased) {
		this.coursePurchased = coursePurchased;
	}


	public Double getTotalIncome() {
		return totalIncome;
	}


	public void setTotalIncome(Double totalIncome) {
		this.totalIncome = totalIncome;
	}
	
	
	
}
