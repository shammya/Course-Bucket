package com.course.bucket.files;

public class FileResponse {

	private String filename;
	private String uri;
	private String fileType;
	private long size;
	public FileResponse(String filename, String uri, String fileType, long size) {
		super();
		this.filename = filename;
		this.uri = uri;
		this.fileType = fileType;
		this.size = size;
	}
	public String getFilename() {
		return filename;
	}
	public void setFilename(String filename) {
		this.filename = filename;
	}
	public String getUri() {
		return uri;
	}
	public void setUri(String uri) {
		this.uri = uri;
	}
	public String getFileType() {
		return fileType;
	}
	public void setFileType(String fileType) {
		this.fileType = fileType;
	}
	public long getSize() {
		return size;
	}
	public void setSize(long size) {
		this.size = size;
	}
	
	
	
}
