package com.course.bucket.person;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Vector;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.course.bucket.Global;
import com.course.bucket.authentication.MessageResponse;



@RestController

public class PersonController {

	@Autowired
	PasswordEncoder encoder;
	
	@PostMapping("/add-person")
	public void addPerson(@RequestBody Person person) {
		Person.createNewPerson(person);
	}
	@PostMapping("/approve-course/{courseId}")
	public void approveCourse(@PathVariable Integer courseId) {
		Person.approveCourse(courseId);
	}

	@GetMapping("/get-person-by-id/{id}")
	public Person findPerson(@PathVariable String id){
		Person person = new Person(id);
		person.setPassword("");
		return person;
	}
//	@PreAuthorize("hasRole('Teacher') or hasRole('TEACHER') or hasRole('ROLE_Teacher')")
	@GetMapping("/get-person-self")
	public ResponseEntity<?> getPersonSelf(){
		UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		Person person = new Person(userDetails.getUsername());
//		Person person = new Person("newTeacher");
		person.setPassword("");
		return ResponseEntity.ok(person);
	}
	@PutMapping("/change-password")
	public ResponseEntity<?> changePassword(@RequestParam("oldPassword") String oldPassword, @RequestParam("newPassword") String newPassword){
		UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String passFromDB = Person.getPasswordByUsername(userDetails.getUsername());
		if(!encoder.matches(oldPassword, passFromDB)) {
			return ResponseEntity.ok(new MessageResponse("Old password is incorrect"));
		}
		Person.updatePassword(userDetails.getUsername(), encoder.encode(newPassword));
		return ResponseEntity.ok("");
	}
	@GetMapping("/get-new-user-admin")
	public HashMap<Date, NewUser> getNewUserAdmin(){
		return Person.getNewUserAdmin();
	}
	@GetMapping("/get-show-card-admin")
	public ShowCard showCardAdmin(){
		return Person.showCardAdmin();
	}
	@GetMapping("/get-cumulative-rating-teacher/{teacherUsername}")
	public Vector<CumulativeRating> getCumulativeRatingTeacher(@PathVariable String teacherUsername){
		return Person.getCumulativeRatingTeacher(teacherUsername);
	}
	@GetMapping("/get-course-overview/{id}")
	public CourseOverview getCourseOvervie(@PathVariable Integer id){
		return Person.getCourseOverview(id);
	}
	@GetMapping("/get-teacher-info")
	public ArrayList<TeacherInfoAdmin> getCourseOverviewAdmin(){
		return Person.getTeacherInfoAdmin();
	}
	@GetMapping("/get-student-info")
	public ArrayList<StudentInfoAdmin> getStudentInfoAdmin(){
		return Person.getStudentInfoAdmin();
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
	@DeleteMapping("/delete-person/{name}")
	public void deletePerson(@PathVariable String name) {
		Person.deletePerson(name);
	}
}
