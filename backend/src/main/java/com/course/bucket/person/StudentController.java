package com.course.bucket.person;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
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
import com.course.bucket.course.Course;
import com.course.bucket.course.additionals.MiniCourse;
import com.course.bucket.courseextra.purchasehistory.PurchaseHistory;
import com.course.bucket.designation.Designation;
import com.course.bucket.edustatus.EduStatus;
import com.course.bucket.person.others.StudentList;
import com.course.bucket.person.others.TeacherMiniInfo;
import com.course.bucket.tools.ToolKit;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;


@RestController
@CrossOrigin(origins = Global.HOST)
public class StudentController {
	
	@Autowired
	ObjectMapper mapper;
	
	@PostMapping("/add-student/{edu_id}")
	public void addStudent(@RequestBody Person person,@PathVariable Integer edu_id) {
		Student.createNewStudent(person,edu_id);
	}
	
//	@GetMapping("/get-student")
//	public Student findStudent(@PathVariable String id){
//			return new Student(ToolKit.getCurrentUserName());
//	}

	@PreAuthorize("hasRole('Student')")
	@GetMapping("/get-student-self")
	public ResponseEntity<?> getStudentSelf(){
		UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		Student person = new Student(userDetails.getUsername());
		person.setPassword("");
		return ResponseEntity.ok(person);
	}
	
	@PreAuthorize("hasRole('Teacher')")
	@GetMapping("/get-student-list-teacher")
	public ArrayList<StudentList> getStudntListTeacher(){
		return Student.getStudntListTeacher(ToolKit.getCurrentUserName());
	}
	
	@GetMapping("/public/get-student-edustatus/{username}")
	public EduStatus getTeacherDesignation(@PathVariable String username){
		return EduStatus.getByUsername(username);
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

	@PreAuthorize("hasRole('Student')")
	@GetMapping("/get-purchased-courses-self")
	public ArrayList<MiniCourse> getPurchasedCoursesSelf(){
		String username = ((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
		return Student.getPurchasedCourses(username);
	}
	
	@GetMapping("/public/get-purchased-courses/{username}")
	public ArrayList<MiniCourse> getPurchasedCoursesSelf(@PathVariable String username){
		return Student.getPurchasedCourses(username);
	}
	
	@PreAuthorize("hasRole('Admin')")
	@DeleteMapping("/delete-student/{id}")
	public void deleteStudent(@PathVariable String id) {
		Person.deletePerson(id);
	}
	
//	Mehedi
	

	@GetMapping("/public/get-student-mini/{username}")
	public ObjectNode getStudentMiniByUsername(@PathVariable String username){
		return Student.getMiniDetails(mapper, username);
	}
	
	@PreAuthorize("hasRole('Student')")
	@PutMapping("/update-student/{eduStatusId}") 
	public ResponseEntity<?> updateStudent(@PathVariable Integer eduStatusId, @RequestBody Person person) {
		if(!ToolKit.getCurrentUserName().equals(person.getUsername())) {
			return ResponseEntity.badRequest().body("Requested user can not perform the task");
		}
		Student.update(person, eduStatusId);
		return ResponseEntity.ok("");
	}
}
