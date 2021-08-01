package com.course.bucket.courseextra.purchasehistory;

import java.util.ArrayList;
import java.util.Date;

public class PurchaseHistoryList {

	private String coursetitle;
	private String coursesubtitle;
	private String courseImage;
	private ArrayList<PurchaseHistoryInfo> purchaseHistoryInfos = new ArrayList<>();
	
	
	public PurchaseHistoryList() {
		
	}


	public PurchaseHistoryList(String coursetitle, String coursesubtitle, String courseImage,
			ArrayList<PurchaseHistoryInfo> purchaseHistoryInfos) {
		super();
		this.coursetitle = coursetitle;
		this.coursesubtitle = coursesubtitle;
		this.courseImage = courseImage;
		this.purchaseHistoryInfos = purchaseHistoryInfos;
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
	
	private String studentName;
	private String studentImage;
	private Date purchaaseTime;
	private Double purchaseAmount;
	
	public  PurchaseHistoryInfo() {
		
	}

	public PurchaseHistoryInfo(String studentName, String studentImage, Date purchaaseTime, Double purchaseAmount) {
		super();
		this.studentName = studentName;
		this.studentImage = studentImage;
		this.purchaaseTime = purchaaseTime;
		this.purchaseAmount = purchaseAmount;
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

	public Date getPurchaaseTime() {
		return purchaaseTime;
	}

	public void setPurchaaseTime(Date purchaaseTime) {
		this.purchaaseTime = purchaaseTime;
	}

	public Double getPurchaseAmount() {
		return purchaseAmount;
	}

	public void setPurchaseAmount(Double purchaseAmount) {
		this.purchaseAmount = purchaseAmount;
	}
	
	
	
	
}
