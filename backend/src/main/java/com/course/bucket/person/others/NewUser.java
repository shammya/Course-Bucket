package com.course.bucket.person.others;

import java.util.Date;

public class NewUser {

	private Date date;
	private Integer studentCount;
	private Integer teacherCount;
	
	
	public NewUser(Date date, Integer studentCount, Integer teacherCount) {
		super();
		this.date = date;
		this.studentCount = studentCount;
		this.teacherCount = teacherCount;
	}


	public Date getDate() {
		return date;
	}


	public void setDate(Date date) {
		this.date = date;
	}


	public Integer getStudentCount() {
		return studentCount;
	}


	public void setStudentCount(Integer studentCount) {
		this.studentCount = studentCount;
	}


	public Integer getTeacherCount() {
		return teacherCount;
	}


	public void setTeacherCount(Integer teacherCount) {
		this.teacherCount = teacherCount;
	}
	
	
	
}
