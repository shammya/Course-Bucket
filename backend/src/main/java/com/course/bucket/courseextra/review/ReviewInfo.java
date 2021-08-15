package com.course.bucket.courseextra.review;

import java.util.Date;

public class ReviewInfo{
	
	private String studentName;
	private String studentImage;
	private Date reviewTime;
	private Integer ratingValue;
	private String review;
	
	public ReviewInfo() {
		
	}
	
	public ReviewInfo(String studentName, String studentImage, Date reviewTime, Integer ratingValue, String review) {
		super();
		this.studentName = studentName;
		this.studentImage = studentImage;
		this.reviewTime = reviewTime;
		this.ratingValue = ratingValue;
		this.review = review;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public String getStudentImage() {
		return studentImage;
	}

	public void setStudentImage(String studentImage) {
		this.studentImage = studentImage;
	}

	public Date getReviewTime() {
		return reviewTime;
	}

	public void setReviewTime(Date reviewTime) {
		this.reviewTime = reviewTime;
	}

	public Integer getRatingValue() {
		return ratingValue;
	}

	public void setRatingValue(Integer ratingValue) {
		this.ratingValue = ratingValue;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}
	
	
	
}