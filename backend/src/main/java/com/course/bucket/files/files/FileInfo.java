package com.course.bucket.files.files;

import java.util.Date;

public class FileInfo {

	private String type;
	private String title;
	private String content;
	private Date uploadTime;
	private Date lastUpdate;
	
	
	public FileInfo(String type, String title, String content, Date uploadTime, Date lastUpdate) {
		super();
		this.type = type;
		this.title = title;
		this.content = content;
		this.uploadTime = uploadTime;
		this.lastUpdate = lastUpdate;
	}


	public String getType() {
		return type;
	}


	public void setType(String type) {
		this.type = type;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getContent() {
		return content;
	}


	public void setContent(String content) {
		this.content = content;
	}


	public Date getUploadTime() {
		return uploadTime;
	}


	public void setUploadTime(Date uploadTime) {
		this.uploadTime = uploadTime;
	}


	public Date getLastUpdate() {
		return lastUpdate;
	}


	public void setLastUpdate(Date lastUpdate) {
		this.lastUpdate = lastUpdate;
	}

	
}