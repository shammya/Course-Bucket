package com.course.bucket.course.additionals;

public class PopularCourse {

	private String categoryName;
	private Integer enrolledStdCount;
	private Integer reviewCount;
	private Double rating;
	private Integer ratingCount;
	
	public PopularCourse() {
		
	}

	public PopularCourse(String categoryName, Integer enrolledStdCount, Integer reviewCount, Double rating,
			Integer ratingCount) {
		super();
		this.categoryName = categoryName;
		this.enrolledStdCount = enrolledStdCount;
		this.reviewCount = reviewCount;
		this.rating = rating;
		this.ratingCount = ratingCount;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public Integer getEnrolledStdCount() {
		return enrolledStdCount;
	}

	public void setEnrolledStdCount(Integer enrolledStdCount) {
		this.enrolledStdCount = enrolledStdCount;
	}

	public Integer getReviewCount() {
		return reviewCount;
	}

	public void setReviewCount(Integer reviewCount) {
		this.reviewCount = reviewCount;
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
	
	
	
}
