package com.course.bucket.course.additionals;

public class CoursePopularity {
	
	private String courseName;
	private Double rating;
	private Integer ratingCount;
	private Integer enrolledStudentCount;
	private Integer reviewCount;
	
	
	public CoursePopularity() {
		
	}


	public CoursePopularity(String courseName, Double rating, Integer ratingCount, Integer enrolledStudentCount,
			Integer reviewCount) {
		super();
		this.courseName = courseName;
		this.rating = rating;
		this.ratingCount = ratingCount;
		this.enrolledStudentCount = enrolledStudentCount;
		this.reviewCount = reviewCount;
	}


	public String getCourseName() {
		return courseName;
	}


	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}


	public Double getRating() {
		return rating;
	}


	public void setRating(Double rating) {
		this.rating = rating;
	}


	public Integer getRatingCount() {
		return ratingCount;
	}


	public void setRatingCount(Integer ratingCount) {
		this.ratingCount = ratingCount;
	}


	public Integer getEnrolledStudentCount() {
		return enrolledStudentCount;
	}


	public void setEnrolledStudentCount(Integer enrolledStudentCount) {
		this.enrolledStudentCount = enrolledStudentCount;
	}


	public Integer getReviewCount() {
		return reviewCount;
	}


	public void setReviewCount(Integer reviewCount) {
		this.reviewCount = reviewCount;
	}
	
	
	
	
}
