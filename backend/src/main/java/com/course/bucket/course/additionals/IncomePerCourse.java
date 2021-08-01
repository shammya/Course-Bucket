package com.course.bucket.course.additionals;

public class IncomePerCourse {
	
	private String title;
	private Double income;
	
	public IncomePerCourse(String title, Double income) {
		super();
		this.title = title;
		this.income = income;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Double getIncome() {
		return income;
	}

	public void setIncome(Double income) {
		this.income = income;
	}
	
	
}
