package com.course.bucket.person.others;

import java.util.ArrayList;
import java.util.Date;

public class StudentList {
	 private Integer courseId;
	 private String courseName;
	 private String courseImage;
	 private String courseSubtitle;
	 ArrayList<StudentInfo> studentInfoList;
	 
	 public StudentList() {
		 
	 }
	 
	public StudentList(Integer courseId, String courseName, String courseImage, String courseSubtitle,
			ArrayList<StudentInfo> studntInfolistList) {
		super();
		this.courseId = courseId;
		this.courseName = courseName;
		this.courseImage = courseImage;
		this.courseSubtitle = courseSubtitle;
		this.studentInfoList = studntInfolistList;
	}

	public Integer getCourseId() {
		return courseId;
	}

	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public String getCourseImage() {
		return courseImage;
	}

	public ArrayList<StudentInfo> getStudentInfoList() {
		return studentInfoList;
	}

	public void setStudentInfoList(ArrayList<StudentInfo> studentInfoList) {
		this.studentInfoList = studentInfoList;
	}

	public void setCourseImage(String courseImage) {
		this.courseImage = courseImage;
	}

	public String getCourseSubtitle() {
		return courseSubtitle;
	}

	public void setCourseSubtitle(String courseSubtitle) {
		this.courseSubtitle = courseSubtitle;
	} 

}
		
