package com.course.bucket.person.others;

public class Slider {

	private Integer id;
	private Integer fileId;
	private String content;
	
	
	public Slider(Integer id, Integer fileId, String content) {
		super();
		this.id = id;
		this.fileId = fileId;
		this.content = content;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public Integer getFileId() {
		return fileId;
	}


	public void setFileId(Integer fileId) {
		this.fileId = fileId;
	}


	public String getContent() {
		return content;
	}


	public void setContent(String content) {
		this.content = content;
	}
	
	
}
