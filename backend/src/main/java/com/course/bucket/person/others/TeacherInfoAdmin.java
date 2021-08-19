package com.course.bucket.person.others;

public class TeacherInfoAdmin {

	private String username;
	private Integer courseCreated;
	private Integer coursePurchased;
	private Double totalIncome;
	private String content;
	
	
	public TeacherInfoAdmin(String username, Integer courseCreated, Integer coursePurchased, Double totalIncome,
			String content) {
		super();
		this.username = username;
		this.courseCreated = courseCreated;
		this.coursePurchased = coursePurchased;
		this.totalIncome = totalIncome;
		this.content = content;
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


	public String getContent() {
		return content;
	}


	public void setContent(String content) {
		this.content = content;
	}
	
	
	
	
	
	
	
}
