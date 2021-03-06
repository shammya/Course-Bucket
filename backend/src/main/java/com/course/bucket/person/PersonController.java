package com.course.bucket.person;


import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Vector;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.course.bucket.authentication.MessageResponse;
import com.course.bucket.creditcard.CreditCard;
import com.course.bucket.files.Files;
import com.course.bucket.person.Person.AccountType;
import com.course.bucket.tools.ToolKit;



@RestController

public class PersonController {

	@Autowired
	PasswordEncoder encoder;
	
	@PreAuthorize("hasRole('Admin') or hasRole('Teacher') or hasRole('Student')")
	@PostMapping("/add-person")
	public void addPerson(@RequestBody Person person) {
		Person.createNewPerson(person);
	}
	
//	@PreAuthorize("hasRole('Admin')")
//	@PostMapping("/approve-course/{courseId}")
//	public void approveCourse(@PathVariable Integer courseId) {
//		Person.approveCourse(courseId);
//	}

	@GetMapping("/public/get-person-by-username/{username}")
	public Person findPerson(@PathVariable String username){
		String role = Person.getRole(username);
		Person person = null;
		if(role.toLowerCase().equals("student")) {
			person = new Student(username);
		}
		else if(role.toLowerCase().equals("teacher")) {
			person = new Teacher(username);
		}
		return person;
	}
	
	@PreAuthorize("hasRole('Teacher') or hasRole('Student') or hasRole('Admin')")
	@GetMapping("/get-person-self")
	public ResponseEntity<?> getPersonSelf(){
		Person person = new Person(ToolKit.getCurrentUserName());
		person.setPassword("");
		return ResponseEntity.ok(person);
	}

	
	@PutMapping("/change-password")
	public ResponseEntity<?> changePassword(@RequestParam("oldPassword") String oldPassword, @RequestParam("newPassword") String newPassword){
		UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String passFromDB = Person.getPasswordByUsername(ToolKit.getCurrentUserName());
		if(!encoder.matches(oldPassword, passFromDB)) {
			return ResponseEntity.ok(new MessageResponse("Old password is incorrect"));
		}
		Person.updatePassword(userDetails.getUsername(), encoder.encode(newPassword));
		return ResponseEntity.ok("");
	}

	
	
	
	
	
//	@PreAuthorize("hasRole('Admin')")
//	@GetMapping("/get-student-info")
//	public ArrayList<StudentInfoAdmin> getStudentInfoAdmin(){
//		return Person.getStudentInfoAdmin();
//	}
	
	@PreAuthorize("hasRole('Student')")
	@GetMapping("/get-credit-card")
	public CreditCard getCreditCardDetails(){
		String username = ToolKit.getCurrentUserName();
		return new CreditCard(username);
	}
	
	
	@GetMapping("/get-profile-photo")
	public Files getProfilePhoto() {
		UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return Person.getPhoto(userDetails.getUsername());
	}
//	@GetMapping("/get-profile-photo")
//	public Files getProfilePhoto() {
//		UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//		return Person.getPhoto(userDetails.getUsername());
//	}
//	
//	@GetMapping("/get-person-by-name/{name}")
//	public Person findById(@PathVariable String name) {
//		Person person = new Person(name);
//		return person;
//	}
//		
//	
//	@PutMapping("/update-person/{oldName}/{newName}")
//	public void updatePerson(@PathVariable String oldName, @PathVariable String newName) {
//		Person.changePersonName(oldName, newName);
//	}
//	
	
	@PreAuthorize("hasRole('Admin')")
	@DeleteMapping("/delete-person/{name}")
	public void deletePerson(@PathVariable String name) {
		Person.deletePerson(name);
	}
}