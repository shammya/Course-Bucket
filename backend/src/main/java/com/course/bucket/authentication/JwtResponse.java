package com.course.bucket.authentication;

import java.util.List;

public class JwtResponse {
	private String token;
	private String type = "Bearer";
	private String username;
	private String email;
	private String accountType;

	public JwtResponse(String accessToken, String username, String email, String roles) {
		this.token = accessToken;
		this.username = username;
		this.email = email;
		this.accountType = roles;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}

}