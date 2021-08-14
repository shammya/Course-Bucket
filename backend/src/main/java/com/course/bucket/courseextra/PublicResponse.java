package com.course.bucket.courseextra;

import java.util.ArrayList;

import com.course.bucket.courseextra.faq.FaqList;
import com.course.bucket.courseextra.review.ReviewList;

public class PublicResponse {

	private Integer enrolledStudentCount;
	private ArrayList<Integer> ratingByNumber;
	private Double ratingValue;
	private Integer ratingCount;
	private ArrayList<ReviewList> reviews;
	private ArrayList<FaqList> faqs;
	
	
	public PublicResponse(Integer enrolledStudentCount, ArrayList<Integer> ratingByNumber, Double ratingValue,
			Integer ratingCount, ArrayList<ReviewList> reviews, ArrayList<FaqList> faqs) {
		super();
		this.enrolledStudentCount = enrolledStudentCount;
		this.ratingByNumber = ratingByNumber;
		this.ratingValue = ratingValue;
		this.ratingCount = ratingCount;
		this.reviews = reviews;
		this.faqs = faqs;
	}


	public Integer getEnrolledStudentCount() {
		return enrolledStudentCount;
	}


	public void setEnrolledStudentCount(Integer enrolledStudentCount) {
		this.enrolledStudentCount = enrolledStudentCount;
	}


	public ArrayList<Integer> getRatingByNumber() {
		return ratingByNumber;
	}


	public void setRatingByNumber(ArrayList<Integer> ratingByNumber) {
		this.ratingByNumber = ratingByNumber;
	}


	public Double getRatingValue() {
		return ratingValue;
	}


	public void setRatingValue(Double ratingValue) {
		this.ratingValue = ratingValue;
	}


	public Integer getRatingCount() {
		return ratingCount;
	}


	public void setRatingCount(Integer ratingCount) {
		this.ratingCount = ratingCount;
	}


	public ArrayList<ReviewList> getReviews() {
		return reviews;
	}


	public void setReviews(ArrayList<ReviewList> reviews) {
		this.reviews = reviews;
	}


	public ArrayList<FaqList> getFaqs() {
		return faqs;
	}


	public void setFaqs(ArrayList<FaqList> faqs) {
		this.faqs = faqs;
	}
	
	
	
	
	
	
	
}
