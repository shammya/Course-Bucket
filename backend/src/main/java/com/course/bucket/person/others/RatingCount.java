package com.course.bucket.person.others;

public class RatingCount {
	
	private Double rating;
	private Integer count;
	
	
	public RatingCount(Double rating, Integer count) {
		super();
		this.rating = rating;
		this.count = count;
	}


	public Double getRating() {
		return rating;
	}


	public void setRating(Double rating) {
		this.rating = rating;
	}


	public Integer getCount() {
		return count;
	}


	public void setCount(Integer count) {
		this.count = count;
	}
	
	
	
}
