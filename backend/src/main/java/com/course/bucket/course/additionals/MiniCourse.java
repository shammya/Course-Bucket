package com.course.bucket.course.additionals;

import com.course.bucket.course.Course;
import com.course.bucket.database.DB;

public class MiniCourse {
	private Integer id;
	private String title;
	private String teacherName;
	private String coverContent;
	private Double rating;
	private Integer ratingCount;
	private Double price;
	private Double off;

	public MiniCourse() {}
	
	public MiniCourse (Integer id) {
		Course course = new Course(id);
		this.id = id;
		this.title = course.getTitle();
		this.teacherName = course.getTeacherName();
		this.coverContent = course.getCover().getContent();
		this.rating = course.getRating();
		this.ratingCount = course.getNumOfRating();
		this.price = course.getMainPrice();
		this.off = course.getOff();
	}
	
	public MiniCourse(Integer id, String title, String teacherName, String content, Double rating, Integer ratingCount, Double price,
			Double offeredPrice) {
		super();
		this.id = id;
		this.title = title;
		this.teacherName = teacherName;
		this.coverContent = content;
		this.rating = rating;
		this.ratingCount = ratingCount;
		this.price = price;
		this.off = offeredPrice;
	}

	public String getCoverContent() {
		return coverContent;
	}

	public void setCoverContent(String coverContent) {
		this.coverContent = coverContent;
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


	public Double getOff() {
		return off;
	}


	public void setOff(Double offeredPrice) {
		this.off = offeredPrice;
	}

	public Integer getRatingCount() {
		return ratingCount;
	}

	public void setRatingCount(Integer ratingCount) {
		this.ratingCount = ratingCount;
	}
	
	
	
}
