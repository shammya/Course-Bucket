package com.course.bucket.authentication;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetails;

import com.course.bucket.files.Files;
import com.course.bucket.person.Person;

public class JwtResponse {
	private String type = "Bearer";
	private String token;
	
	private String username;
	private String email;
	private String accountType;
	private Files photo;

	public JwtResponse(String token, String username) {
		this(token, new Person(username));
	}
	public JwtResponse(String token, Person person) {
		this.token = token;
		
		this.username = person.getUsername();
		this.email = person.getEmail();
		this.photo = person.getPhoto();
		this.accountType = person.getAccountType().toString();
	}

	public Files getPhoto() {
		return photo;
	}

	public void setPhoto(Files photo) {
		this.photo = photo;
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