package com.course.bucket.course.additionals;

import java.util.ArrayList;

public class CarouselCourse {

	private ArrayList<MiniCourse> newReleased;
	private ArrayList<MiniCourse> bestSeller;
	private ArrayList<MiniCourse> MostReviewed;
	private ArrayList<MiniCourse> MostRated;
	private ArrayList<MiniCourse> free;
	
	
	public CarouselCourse(ArrayList<MiniCourse> newReleased, ArrayList<MiniCourse> bestSeller,
			ArrayList<MiniCourse> mostReviewed, ArrayList<MiniCourse> mostRated, ArrayList<MiniCourse> free) {
		super();
		this.newReleased = newReleased;
		this.bestSeller = bestSeller;
		MostReviewed = mostReviewed;
		MostRated = mostRated;
		this.free = free;
	}


	public ArrayList<MiniCourse> getNewReleased() {
		return newReleased;
	}


	public void setNewReleased(ArrayList<MiniCourse> newReleased) {
		this.newReleased = newReleased;
	}


	public ArrayList<MiniCourse> getBestSeller() {
		return bestSeller;
	}


	public void setBestSeller(ArrayList<MiniCourse> bestSeller) {
		this.bestSeller = bestSeller;
	}


	public ArrayList<MiniCourse> getMostReviewed() {
		return MostReviewed;
	}


	public void setMostReviewed(ArrayList<MiniCourse> mostReviewed) {
		MostReviewed = mostReviewed;
	}


	public ArrayList<MiniCourse> getMostRated() {
		return MostRated;
	}


	public void setMostRated(ArrayList<MiniCourse> mostRated) {
		MostRated = mostRated;
	}


	public ArrayList<MiniCourse> getFree() {
		return free;
	}


	public void setFree(ArrayList<MiniCourse> free) {
		this.free = free;
	}
	
	
	
}
