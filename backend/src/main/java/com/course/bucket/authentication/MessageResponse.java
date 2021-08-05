package com.course.bucket.authentication;

public class MessageResponse {
	private String stringValue;
	private Boolean boolValue;

	public MessageResponse(String message) {
	    this.stringValue = message;
	}
	public MessageResponse(Boolean message) {
	    this.boolValue = message;
	}
	public String getStringValue() {
		return stringValue;
	}
	public void setStringValue(String stringValue) {
		this.stringValue = stringValue;
	}
	public Boolean getBoolValue() {
		return boolValue;
	}
	public void setBoolValue(Boolean boolValue) {
		this.boolValue = boolValue;
	}
}

