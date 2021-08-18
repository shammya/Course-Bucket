package com.course.bucket.courseextra.purchasehistory;

import java.util.ArrayList;
import java.util.Date;

public class PurchaseHistoryList {

	private Integer courseId;
	private String courseTitle;
	private String courseSubtitle;
	private String courseImage;
	private ArrayList<PurchaseHistoryInfo> purchaseHistoryInfos = new ArrayList<>();
	
	
	public PurchaseHistoryList() {
		
	}


	public PurchaseHistoryList(Integer courseId, String coursetitle, String coursesubtitle, String courseImage,
			ArrayList<PurchaseHistoryInfo> purchaseHistoryInfos) {
		super();
		this.courseId = courseId; 
		this.courseTitle = coursetitle;
		this.courseSubtitle = coursesubtitle;
		this.courseImage = courseImage;
		this.purchaseHistoryInfos = purchaseHistoryInfos;
	}


	public Integer getCourseId() {
		return courseId;
	}


	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}


	public String getCourseTitle() {
		return courseTitle;
	}


	public void setCourseTitle(String courseTitle) {
		this.courseTitle = courseTitle;
	}


	public String getCourseSubtitle() {
		return courseSubtitle;
	}


	public void setCourseSubtitle(String courseSubtitle) {
		this.courseSubtitle = courseSubtitle;
	}


	public String getCourseImage() {
		return courseImage;
	}


	public void setCourseImage(String courseImage) {
		this.courseImage = courseImage;
	}


	public ArrayList<PurchaseHistoryInfo> getPurchaseHistoryInfos() {
		return purchaseHistoryInfos;
	}


	public void setPurchaseHistoryInfos(ArrayList<PurchaseHistoryInfo> purchaseHistoryInfos) {
		this.purchaseHistoryInfos = purchaseHistoryInfos;
	}	
}


class PurchaseHistoryInfo{
	
	private Integer id;
	private String studentUsername;
	private String studentName;
	private String studentImage;
	private String teacherUsername;
	private String teacherName;
	private String teacherImage;
	private Date purchaseTime;
	private Double purchaseAmount;
	
	public PurchaseHistoryInfo() {}
	public PurchaseHistoryInfo(Integer id, String studentUsername, String studentName, String studentImage,
			String teacherUsername, String teacherName, String teacherImage, Date purchaseTime, Double purchaseAmount) {
		super();
		this.id = id;
		this.studentUsername = studentUsername;
		this.studentName = studentName;
		this.studentImage = studentImage;
		this.teacherUsername = teacherUsername;
		this.teacherName = teacherName;
		this.teacherImage = teacherImage;
		this.purchaseTime = purchaseTime;
		this.purchaseAmount = purchaseAmount;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getStudentUsername() {
		return studentUsername;
	}
	public void setStudentUsername(String studentUsername) {
		this.studentUsername = studentUsername;
	}
	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	public String getStudentImage() {
		return studentImage;
	}
	public void setStudentImage(String studentImage) {
		this.studentImage = studentImage;
	}
	public String getTeacherUsername() {
		return teacherUsername;
	}
	public void setTeacherUsername(String teacherUsername) {
		this.teacherUsername = teacherUsername;
	}
	public String getTeacherName() {
		return teacherName;
	}
	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName;
	}
	public String getTeacherImage() {
		return teacherImage;
	}
	public void setTeacherImage(String teacherImage) {
		this.teacherImage = teacherImage;
	}
	public Date getPurchaseTime() {
		return purchaseTime;
	}
	public void setPurchaseTime(Date purchaseTime) {
		this.purchaseTime = purchaseTime;
	}
	public Double getPurchaseAmount() {
		return purchaseAmount;
	}
	public void setPurchaseAmount(Double purchaseAmount) {
		this.purchaseAmount = purchaseAmount;
	}
	
	
	
}
