package com.course.bucket.courseextra.purchasehistory;

import java.util.ArrayList;
import java.util.Date;

public class PurchaseHistoryList {

	private Integer courseId;
	private String coursetitle;
	private String coursesubtitle;
	private String courseImage;
	private ArrayList<PurchaseHistoryInfo> purchaseHistoryInfos = new ArrayList<>();
	
	
	public PurchaseHistoryList() {
		
	}


	public PurchaseHistoryList(Integer courseId, String coursetitle, String coursesubtitle, String courseImage,
			ArrayList<PurchaseHistoryInfo> purchaseHistoryInfos) {
		super();
		this.courseId = courseId;
		this.coursetitle = coursetitle;
		this.coursesubtitle = coursesubtitle;
		this.courseImage = courseImage;
		this.purchaseHistoryInfos = purchaseHistoryInfos;
	}


	public Integer getCourseId() {
		return courseId;
	}


	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}


	public String getCoursetitle() {
		return coursetitle;
	}


	public void setCoursetitle(String coursetitle) {
		this.coursetitle = coursetitle;
	}


	public String getCoursesubtitle() {
		return coursesubtitle;
	}


	public void setCoursesubtitle(String coursesubtitle) {
		this.coursesubtitle = coursesubtitle;
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
	private String studentName;
	private String studentImage;
	private Date purchaseTime;
	private Double purchaseAmount;
	
	public  PurchaseHistoryInfo() {
		
	}

	public PurchaseHistoryInfo(Integer id, String studentName, String studentImage, Date purchaseTime,
			Double purchaseAmount) {
		super();
		this.id = id;
		this.studentName = studentName;
		this.studentImage = studentImage;
		this.purchaseTime = purchaseTime;
		this.purchaseAmount = purchaseAmount;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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
		this.studentImage = studentImage;
		this.studentImage = studentImage;
	}

	public Date getPurchaseTime() {
		return purchaseTime;
	}

	public void setPurchaaseTime(Date purchaaseTime) {
		this.purchaseTime = purchaaseTime;
	}

	public Double getPurchaseAmount() {
		return purchaseAmount;
	}

	public void setPurchaseAmount(Double purchaseAmount) {
		this.purchaseAmount = purchaseAmount;
	}

	
	
	
	
	
}
