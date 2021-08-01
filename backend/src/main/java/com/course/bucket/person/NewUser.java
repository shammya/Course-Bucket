package com.course.bucket.person;

import java.util.Date;

public class NewUser {

	private Date date;
	private Integer studentCount;
	private Integer TeacherCount;
	
	
	public NewUser(Date date, Integer studentCount, Integer teacherCount) {
		super();
		this.date = date;
		this.studentCount = studentCount;
		TeacherCount = teacherCount;
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
		return TeacherCount;
	}


	public void setTeacherCount(Integer teacherCount) {
		TeacherCount = teacherCount;
	}
	
	
	
}
