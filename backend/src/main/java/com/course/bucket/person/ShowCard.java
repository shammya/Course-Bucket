package com.course.bucket.person;

public class ShowCard {

	private Integer totalVisitor;
	private Integer newCourse;
	private Integer totalCourse;
	private Integer newUser;
	private Integer totalUser;
	private Double todayIncome;
	private Double totalIncome;
	
	
	public ShowCard() {
		
	}
	
	
	


	public ShowCard(Integer totalVisitor, Integer newCourse, Integer totalCourse, Integer newUser, Integer totalUser,
			Double todayIncome, Double totalIncome) {
		super();
		this.totalVisitor = totalVisitor;
		this.newCourse = newCourse;
		this.totalCourse = totalCourse;
		this.newUser = newUser;
		this.totalUser = totalUser;
		this.todayIncome = todayIncome;
		this.totalIncome = totalIncome;
	}





	public Integer getTotalVisitor() {
		return totalVisitor;
	}


	public void setTotalVisitor(Integer totalVisitor) {
		this.totalVisitor = totalVisitor;
	}


	public Integer getNewCourse() {
		return newCourse;
	}


	public void setNewCourse(Integer newCourse) {
		this.newCourse = newCourse;
	}


	public Integer getNewUser() {
		return newUser;
	}


	public void setNewUser(Integer newUser) {
		this.newUser = newUser;
	}


	public Integer getTotalUser() {
		return totalUser;
	}


	public void setTotalUser(Integer totalUser) {
		this.totalUser = totalUser;
	}


	public Double getTodayIncome() {
		return todayIncome;
	}


	public void setTodayIncome(Double todayIncome) {
		this.todayIncome = todayIncome;
	}


	public Double getTotalIncome() {
		return totalIncome;
	}


	public void setTotalIncome(Double totalIncome) {
		this.totalIncome = totalIncome;
	}


	public Integer getTotalCourse() {
		return totalCourse;
	}


	public void setTotalCourse(Integer totalCourse) {
		this.totalCourse = totalCourse;
	}
	
	
	
	
}
