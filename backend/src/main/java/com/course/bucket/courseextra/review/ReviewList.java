package com.course.bucket.courseextra.review;

import java.util.ArrayList;
import java.util.Date;

public class ReviewList {
	private Integer courseId;
	private String courseImage;
	private String courseTitle;
	private String courseSubtitle;
	private ArrayList<ReviewInfo> reviewInfos = new ArrayList<>();
	
	
	public ReviewList() {
		
	}
	
	public ReviewList(Integer courseId, String courseImage, String courseTitle, String courseSubtitle,
			ArrayList<ReviewInfo> reviewInfos) {
		super();
		this.courseId = courseId;
		this.courseImage = courseImage;
		this.courseTitle = courseTitle;
		this.courseSubtitle = courseSubtitle;
		this.reviewInfos = reviewInfos;
	}

	public Integer getCourseId() {
		return courseId;
	}

	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
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

