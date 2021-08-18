package com.course.bucket.person;

import java.util.Date;

public class CumulativeRating {

	private Date date;
	private Double rating;
	
	public CumulativeRating(Date date, Double rating) {
		super();
		this.date = date;
		this.rating = rating;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Double getRating() {
		return rating;
	}

	public void setRating(Double rating) {
		this.rating = rating;
	}
	
	
}
