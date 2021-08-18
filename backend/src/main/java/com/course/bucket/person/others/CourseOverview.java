package com.course.bucket.person.others;

import java.util.ArrayList;

public class CourseOverview {
	
	private String courseTitle;
	private ArrayList<OverviewContent> overviewContents = new ArrayList<>();
	
	
	
	public CourseOverview(String courseTitle, ArrayList<OverviewContent> overviewContents) {
		super();
		this.courseTitle = courseTitle;
		this.overviewContents = overviewContents;
	}



	public String getCourseTitle() {
		return courseTitle;
	}



	public void setCourseTitle(String courseTitle) {
		this.courseTitle = courseTitle;
	}



	public ArrayList<OverviewContent> getOverviewContents() {
		return overviewContents;
	}



	public void setOverviewContents(ArrayList<OverviewContent> overviewContents) {
		this.overviewContents = overviewContents;
	}
	
	
	
}
