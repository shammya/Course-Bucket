package com.course.bucket.course;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.course.bucket.Global;
import com.course.bucket.course.additionals.CarouselCourse;
import com.course.bucket.course.additionals.CourseApproval;
import com.course.bucket.course.additionals.CoursePopularity;
import com.course.bucket.course.additionals.Filters;
import com.course.bucket.course.additionals.IncomePerCourse;
import com.course.bucket.course.additionals.MiniCourse;
import com.course.bucket.course.additionals.PopularCategory;
import com.course.bucket.courseextra.PublicResponse;
import com.course.bucket.database.DB;
import com.course.bucket.person.Admin;
import com.course.bucket.tools.ToolKit;

@RestController
@CrossOrigin(origins = Global.HOST)
public class CourseController {
	
	@PreAuthorize("hasRole('Teacher')")
	@PostMapping("/add-course")
	public Integer addCourse(@RequestBody Course course) {
		//System.out.println("\t course : "+course.getName()+" "+course.getParentName()+" "+course.getAdminId());
		return Course.createNewCourse(ToolKit.getCurrentUserName(), course);
	}

	@PreAuthorize("hasRole('Teacher')")
	@PutMapping("/update-course")
	public ResponseEntity<?> updateCourse(@RequestBody Course course) {
		String username = DB.getString("course", "id", course.getId().toString(), "teacher_id");
		if(!ToolKit.getCurrentUserName().equals(username)) {
			return ResponseEntity.badRequest().body("Requested user is not match with the course creator");
		}
		Course.update(course);
		return ResponseEntity.ok("");
	}
	
//	@GetMapping("/get-categories")
//	public List<Course> findCategories(){
//		return Course.getAllCategories();
//	}

	@PreAuthorize("hasRole('Teacher')")
	@GetMapping("/get-course-for-update/{id}")
	public ResponseEntity<?> getCourseForUpdate(@PathVariable Integer id) {
		Course course = new Course(id);
		if(!ToolKit.getCurrentUserName().equals(course.getTeacherUserame())) {
			return ResponseEntity.badRequest().body("Requested user is not match with the course creator");
		}
		return ResponseEntity.ok(course);
	}
	
	@GetMapping("/public/get-course-by-category/{id}")
	public ArrayList<MiniCourse> getCourseByCategory(@PathVariable Integer id) {
		return Course.getCourseByCategory(id);
	}
	
	@GetMapping("/public/get-course-to-show/{id}")
	public Course getCourseToShow(@PathVariable Integer id) {
		return Course.getCourseAfterAuthentication(ToolKit.getCurrentUserName(),id);
	}
	@GetMapping("/public/get-course-public-response/{courseId}")
	public PublicResponse getCoursePublicResponse(@PathVariable Integer courseId) {
		return Course.getPublicResponse(courseId);
	}
	
	@PostMapping("/public/get-filtered-courses")
	public ArrayList<MiniCourse> getFilteredCourses(@RequestBody Filters filters) {
		return Course.getFilteredCourses(filters);
	}
	
	
	@GetMapping("/public/get-carousel-courses")
	public CarouselCourse getFilteredCourses() {
		return Course.getCarouselCourse();
	}
	
	@PreAuthorize("hasRole('Teacher')")
	@DeleteMapping("/delete-course/{id}")
	public ResponseEntity<?> deleteCourse(@PathVariable Integer id) {
		Course course = new Course(id);
		if(!ToolKit.getCurrentUserName().equals(course.getTeacherUserame())) {
			return ResponseEntity.badRequest().body("Requested user is not match with the course creator");
		}
		course.delete();
		return ResponseEntity.ok("");
	}
}
