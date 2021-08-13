package com.course.bucket.person;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.course.bucket.authentication.JwtUtils;
import com.course.bucket.designation.Designation;
import com.course.bucket.tools.ToolKit;


@RestController
public class TeacherController {
	
	@PostMapping("/add-teacher/{desig_id}")
	public void addTeacher(@RequestBody Person person,@PathVariable Integer desig_id) {
		Teacher.createNewTeacher(person,desig_id);
	}
	
	@GetMapping("/get-teacher")
	public Teacher findTeacher(@PathVariable String id){
		return new Teacher(ToolKit.getCurrentUserName());
	}
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
	@DeleteMapping("/delete-teacher/{id}")
	public void deleteTeacher(@PathVariable String id) {
		Person.deletePerson(id);
	}
	

//	Mehedi
	@PreAuthorize("hasRole('Teacher')")
	@PutMapping("/update-teacher/{designationId}")
	public void updateTeacher(@PathVariable Integer designationId, @RequestBody Person person) {
		Teacher.update(person, designationId);
	}
}
