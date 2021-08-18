package com.course.bucket.course;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
	public void updateCourse(@RequestBody Course course) {
		Course.update(course);
	}
	
//	@GetMapping("/get-categories")
//	public List<Course> findCategories(){
//		return Course.getAllCategories();
//	}

	@PreAuthorize("hasRole('Teacher')")
	@GetMapping("/get-course-for-update/{id}")
	public Course getCourseForUpdate(@PathVariable Integer id) {
		return new Course(id);
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
	public void deleteCourse(@PathVariable Integer id) {
		new Course(id).delete();
	}
}
