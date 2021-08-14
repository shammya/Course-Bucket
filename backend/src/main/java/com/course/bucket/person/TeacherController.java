package com.course.bucket.person;

import java.util.ArrayList;
import java.util.List;
import java.util.Vector;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.course.bucket.authentication.JwtUtils;
import com.course.bucket.designation.Designation;
import com.course.bucket.course.Course;
import com.course.bucket.course.additionals.CoursePopularity;
import com.course.bucket.course.additionals.IncomePerCourse;
import com.course.bucket.course.additionals.MiniCourse;
import com.course.bucket.database.DB;
import com.course.bucket.tools.ToolKit;


@RestController
public class TeacherController {
	
	@PostMapping(value="/add-teacher/{desig_id}")
	public void addTeacher(@ModelAttribute Person person,@PathVariable Integer desig_id) {
		Teacher.createNewTeacher(person,desig_id);
	}

	@GetMapping("/get-teacher")
	public Teacher findTeacher(@PathVariable String id){
		return new Teacher(ToolKit.getCurrentUserName());
	}
	@GetMapping("/get-teacher-mini/{username}")
	public TeacherMiniInfo getTeacherMiniByUsername(@PathVariable String username){
		return new TeacherMiniInfo(username);
	}

	@GetMapping("/get-teacher-self")
	public ResponseEntity<?> getTeacherSelf(){
		UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		Teacher person = new Teacher(userDetails.getUsername());
		person.setPassword("");
		return ResponseEntity.ok(person);
	}

	@GetMapping("/get-created-courses")
	public ArrayList<MiniCourse> getCreatedCourses(){
		String username = ((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
		return getCreatedCoursesByUsername(username);
	}
	@GetMapping("/get-created-courses/{username}")
	public ArrayList<MiniCourse> getCreatedCoursesByUsername(@PathVariable String username){
		return Teacher.getCreatedCourses(username);
	}
	
	@PreAuthorize("hasRole('Admin')")
	@GetMapping("/get-cumulative-rating-teacher/{teacherUsername}")
	public Vector<CumulativeRating> getCumulativeRatingTeacher(@PathVariable String teacherUsername){
		return Teacher.getCumulativeRatingTeacher(teacherUsername);
	}
	
	@PreAuthorize("hasRole('Teacher')")
	@GetMapping("/get-course-popularity-teacher")
	public ArrayList<CoursePopularity> getCoursePopularityTeacher() {
		
		return Teacher.getCoursePopularityTeacher(ToolKit.getCurrentUserName());
	}
	
	@PreAuthorize("hasRole('Teacher')")
	@GetMapping("/get-income-per-course-teacher")
	public ArrayList<IncomePerCourse> getIncomePerCourseTeacher() {
		return Teacher.getIncomePerCourseTeacher(ToolKit.getCurrentUserName());
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
