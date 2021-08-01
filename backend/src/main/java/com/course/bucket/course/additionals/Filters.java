package com.course.bucket.course.additionals;

import java.util.ArrayList;
import java.util.Vector;

import com.course.bucket.tools.Pair;



public class Filters {
	
	private String searchKey = null;
	private ArrayList<Integer> categories = new ArrayList<>();
	private ArrayList<Integer> languages = new ArrayList<>();
	private ArrayList<String> teachers = new ArrayList<>();
	private Vector<Double> price = new Vector<>(2);
	private Vector<Double> rating =  new Vector<>(2);
	private String sorting;


	public Filters(String searchKey, ArrayList<Integer> categories, ArrayList<Integer> languages,
			ArrayList<String> teachers, Vector<Double> price, Vector<Double> rating, String sorting) {
		super();
		this.searchKey = searchKey;
		this.categories = categories;
		this.languages = languages;
		this.teachers = teachers;
		this.price = price;
		this.rating = rating;
		this.sorting = sorting;
	}


	public ArrayList<Integer> getCategories() {
		return categories;
	}


	public void setCategories(ArrayList<Integer> categories) {
		this.categories = categories;
	}


	public ArrayList<Integer> getLanguages() {
		return languages;
	}


	public void setLanguages(ArrayList<Integer> languages) {
		this.languages = languages;
	}


	public ArrayList<String> getTeachers() {
		return teachers;
	}


	public void setTeachers(ArrayList<String> teachers) {
		this.teachers = teachers;
	}


	public Vector<Double> getPrice() {
		return price;
	}


	public void setPrice(Vector<Double> price) {
		this.price = price;
	}


	public Vector<Double> getRating() {
		return rating;
	}


	public void setRating(Vector<Double> rating) {
		this.rating = rating;
	}


	public String getSorting() {
		return sorting;
	}


	public void setSorting(String sorting) {
		this.sorting = sorting;
	}


	public String getSearchKey() {
		return searchKey;
	}


	public void setSearchKey(String searchKey) {
		this.searchKey = searchKey;
	}
	
	
	
	

	
	
	
	
	
}
