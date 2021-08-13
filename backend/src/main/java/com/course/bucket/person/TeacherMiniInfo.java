package com.course.bucket.person;

public class TeacherMiniInfo {
	String username;
	String about;
	String photoContent;
	String teacherName;
	Double rating;
	Integer ratingCount;
	Integer reviewCount;
	Integer studentCount;
	Integer courseCount;
	
	public TeacherMiniInfo(String username) {
		Teacher teacher = new Teacher(username);
		
		this.username = username;
		this.about = teacher.getAbout();
		if(teacher.getPhoto() != null) this.photoContent = teacher.getPhoto().getContent();
		this.teacherName = teacher.getFirstName() + " " + teacher.getLastName();
//		this.rating = teacher.rat
		this.ratingCount = teacher.getNumOfRating();
		this.reviewCount = teacher.getNumOfReview();
		this.studentCount = teacher.getNumOfStudent();
		this.courseCount = teacher.getNumOfCourse();
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public String getPhotoContent() {
		return photoContent;
	}

	public void setPhotoContent(String photoContent) {
		this.photoContent = photoContent;
	}

	public String getTeacherName() {
		return teacherName;
	}

	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName;
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

	public Integer getReviewCount() {
		return reviewCount;
	}

	public void setReviewCount(Integer reviewCount) {
		this.reviewCount = reviewCount;
	}

	public Integer getStudentCount() {
		return studentCount;
	}

	public void setStudentCount(Integer studentCount) {
		this.studentCount = studentCount;
	}

	public Integer getCourseCount() {
		return courseCount;
	}

	public void setCourseCount(Integer courseCount) {
		this.courseCount = courseCount;
	}
	
}
