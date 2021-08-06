package com.course.bucket.person;

import java.util.Date;

public class OverviewContent {

	private Date date;
	private Integer enrStdCount ;
	private Integer reviewCount;
	private Integer oneStar;
	private Integer twoStar;
	private Integer threeStar;
	private Integer fourStar;
	private Integer fiveStar;
	
	
	
	public OverviewContent(Date date, Integer enrStdCount, Integer reviewCount, Integer oneStar, Integer twoStar,
			Integer threeStar, Integer fourStar, Integer fiveStar) {
		super();
		this.date = date;
		this.enrStdCount = enrStdCount;
		this.reviewCount = reviewCount;
		this.oneStar = oneStar;
		this.twoStar = twoStar;
		this.threeStar = threeStar;
		this.fourStar = fourStar;
		this.fiveStar = fiveStar;
	}



	public Date getDate() {
		return date;
	}



	public void setDate(Date date) {
		this.date = date;
	}



	public Integer getEnrStdCount() {
		return enrStdCount;
	}



	public void setEnrStdCount(Integer enrStdCount) {
		this.enrStdCount = enrStdCount;
	}



	public Integer getReviewCount() {
		return reviewCount;
	}



	public void setReviewCount(Integer reviewCount) {
		this.reviewCount = reviewCount;
	}



	public Integer getOneStar() {
		return oneStar;
	}



	public void setOneStar(Integer oneStar) {
		this.oneStar = oneStar;
	}



	public Integer getTwoStar() {
		return twoStar;
	}



	public void setTwoStar(Integer twoStar) {
		this.twoStar = twoStar;
	}



	public Integer getThreeStar() {
		return threeStar;
	}



	public void setThreeStar(Integer threeStar) {
		this.threeStar = threeStar;
	}



	public Integer getFourStar() {
		return fourStar;
	}



	public void setFourStar(Integer fourStar) {
		this.fourStar = fourStar;
	}



	public Integer getFiveStar() {
		return fiveStar;
	}



	public void setFiveStar(Integer fiveStar) {
		this.fiveStar = fiveStar;
	}
	
	
	
	
	
	
}
