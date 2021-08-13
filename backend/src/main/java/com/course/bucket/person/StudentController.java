package com.course.bucket.person;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.course.bucket.Global;
import com.course.bucket.authentication.JwtUtils;
import com.course.bucket.designation.Designation;
import com.course.bucket.edustatus.EduStatus;
import com.course.bucket.tools.ToolKit;


@RestController
@CrossOrigin(origins = Global.HOST)
public class StudentController {
	
	
	@PostMapping("/add-student/{edu_id}")
	public void addStudent(@RequestBody Person person,@PathVariable Integer edu_id) {
		Student.createNewStudent(person,edu_id);
	}
	
	@GetMapping("/get-student")
	public Student findStudent(@PathVariable String id){
			return new Student(ToolKit.getCurrentUserName());
	}
	
	@PreAuthorize("hasRole('Teacher')")
	@GetMapping("/get-student-list-teacher")
	public ArrayList<StudentList> getStudntListTeacher(){
		return Student.getStudntListTeacher(ToolKit.getCurrentUserName());
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
	@DeleteMapping("/delete-student/{id}")
	public void deleteStudent(@PathVariable String id) {
		Person.deletePerson(id);
	}
	
//	Mehedi
	
	@PreAuthorize("hasRole('Student')")
	@PutMapping("/update-student/{eduStatusId}")
	public void updateStudent(@PathVariable Integer eduStatusId, @RequestBody Person person) {
		Student.update(person, eduStatusId);
	}
}
