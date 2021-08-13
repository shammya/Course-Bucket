package com.course.bucket.course.additionals;

import com.course.bucket.database.DB;

public class MiniCourse {
	private Integer id;
	private String title;
	private String teacherName;
	private Double rating;
	private Integer ratingCount;
	private Double price;
	private Double offeredPrice;

	public MiniCourse() {}
	
	public MiniCourse (Integer id) {
		
	}
	
	public MiniCourse(Integer id, String title, String teacherName, Double rating, Integer ratingCount, Double price,
			Double offeredPrice) {
		super();
		this.id = id;
		this.title = title;
		this.teacherName = teacherName;
		this.rating = rating;
		this.ratingCount = ratingCount;
		this.price = price;
		this.offeredPrice = offeredPrice;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getTeacherName() {
		return teacherName;
	}


	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName;
	}


	public Double getRating() {
		return rating;
	}


	public void setRating(Double rating) {
		this.rating = rating;
	}


	public Double getPrice() {
		return price;
	}


	public void setPrice(Double price) {
		this.price = price;
	}


	public Double getOfferedPrice() {
		return offeredPrice;
	}


	public void setOfferedPrice(Double offeredPrice) {
		this.offeredPrice = offeredPrice;
	}

	public Integer getRatingCount() {
		return ratingCount;
	}

	public void setRatingCount(Integer ratingCount) {
		this.ratingCount = ratingCount;
	}
	
	
	
}
