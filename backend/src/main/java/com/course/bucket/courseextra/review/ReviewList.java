package com.course.bucket.courseextra.review;

import java.util.ArrayList;
import java.util.Date;

public class ReviewList {

	private String courseImage;
	private String courseTitle;
	private String courseSubtitle;
	private ArrayList<ReviewInfo> reviewInfos = new ArrayList<>();
	
	
	public ReviewList() {
		
	}
	
	public ReviewList(String courseImage, String courseTitle, String courseSubtitle,
			ArrayList<ReviewInfo> reviewInfos) {
		super();
		this.courseImage = courseImage;
		this.courseTitle = courseTitle;
		this.courseSubtitle = courseSubtitle;
		this.reviewInfos = reviewInfos;
	}

	public String getCourseImage() {
		return courseImage;
	}

	public void setCourseImage(String courseImage) {
		this.courseImage = courseImage;
	}

	public String getCourseTitle() {
		return courseTitle;
	}

	public void setCourseTitle(String courseTitle) {
		this.courseTitle = courseTitle;
	}

	public String getCourseSubtitle() {
		return courseSubtitle;
	}

	public void setCourseSubtitle(String courseSubtitle) {
		this.courseSubtitle = courseSubtitle;
	}

	public ArrayList<ReviewInfo> getReviewInfos() {
		return reviewInfos;
	}

	public void setReviewInfos(ArrayList<ReviewInfo> reviewInfos) {
		this.reviewInfos = reviewInfos;
	}
	
	
	
	
	
}

class ReviewInfo{
	
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