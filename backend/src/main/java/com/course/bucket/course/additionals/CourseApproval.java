package com.course.bucket.course.additionals;

import java.util.Date;

public class CourseApproval {

	private Integer id ;
	private String title;
	private String teacherId;
	private Date publishDate;
	
	
	public CourseApproval(Integer id, String title, String teacherId, Date publishDate) {
		super();
		this.id = id;
		this.title = title;
		this.teacherId = teacherId;
		this.publishDate = publishDate;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getTeacherId() {
		return teacherId;
	}


	public void setTeacherId(String teacherId) {
		this.teacherId = teacherId;
	}


	public Date getPublishDate() {
		return publishDate;
	}


	public void setPublishDate(Date publishDate) {
		this.publishDate = publishDate;
	}
	
	
	
}
