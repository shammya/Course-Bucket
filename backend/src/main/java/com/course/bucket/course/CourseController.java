package com.course.bucket.course;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.course.bucket.Global;
import com.course.bucket.course.additionals.CoursePopularity;
import com.course.bucket.course.additionals.Filters;
import com.course.bucket.course.additionals.IncomePerCourse;
import com.course.bucket.course.additionals.MiniCourse;
import com.course.bucket.course.additionals.PopularCourse;


@RestController
@CrossOrigin(origins = Global.HOST)
public class CourseController {
	
	@PostMapping("/add-course")
	public void addCourse(@RequestBody Course course) {
		//System.out.println("\t course : "+course.getName()+" "+course.getParentName()+" "+course.getAdminId());
		Course.createNewCourse(course);
	}
	
//	@GetMapping("/get-categories")
//	public List<Course> findCategories(){
//		return Course.getAllCategories();
//	}
	
	@GetMapping("/get-course-by-id/{id}")
	public Course findById(@PathVariable Integer id) {
		return new Course(id);
	}
	
	@GetMapping("/get-course-popularity-teacher/{teacherUsername}")
	public ArrayList<CoursePopularity> getCoursePopularityTeacher(@PathVariable String teacherUsername) {
		return Course.getCoursePopularityTeacher(teacherUsername);
	}
	@GetMapping("/get-course-popularity-admin")
	public ArrayList<CoursePopularity> getCoursePopularityAdmin() {
		return Course.getCoursePopularityAdmin();
	}
	@GetMapping("/get-popular-courses-admin")
	public ArrayList<PopularCourse> getPopularCourseAdmin() {
		return Course.getPopularCourseAdmin();
	}
	@GetMapping("/get-income-per-course-admin")
	public ArrayList<IncomePerCourse> getIncomePerCourse() {
		return Course.getIncomePerCourse();
	}
	@PostMapping("/get-filtered-courses")
	public ArrayList<MiniCourse> getFilteredCourses(@RequestBody Filters filters) {
		return Course.getFilteredCourses(filters);
	}
		
	
//	@PutMapping("/update-course")
//	public void updateCourse(@RequestBody Course course) {
//		Course.updateCourse(course);
//	}
//	
//	@DeleteMapping("/delete-course/{id}")
//	public void deleteCourse(@PathVariable Integer id) {
//		Course.deleteCourse(id);
//	}
}
