package com.course.bucket.person;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.course.bucket.Global;
import com.course.bucket.course.Course;
import com.course.bucket.course.additionals.CourseApproval;
import com.course.bucket.course.additionals.CoursePopularity;
import com.course.bucket.course.additionals.IncomePerCourse;
import com.course.bucket.course.additionals.PopularCategory;

@RestController
@CrossOrigin(origins = Global.HOST)
public class AdminController {

	@GetMapping("/get-new-user-admin")
	public HashMap<Date, NewUser> getNewUserAdmin(){
		return Admin.getNewUserAdmin();
	}
	
//	@PreAuthorize("hasRole('Admin')")
	@GetMapping("/get-show-card-admin")
	public ShowCard showCardAdmin(){
		return Admin.showCardAdmin();
	}
	
//	@PreAuthorize("hasRole('Admin')")
	@GetMapping("/get-course-overview/{id}")
	public CourseOverview getCourseOverview(@PathVariable Integer id){
		return Admin.getCourseOverview(id);
	}
	
//	@PreAuthorize("hasRole('Admin')")
	@GetMapping("/get-teacher-info")
	public ArrayList<TeacherInfoAdmin> getTeacherInfoAdmin(){
		return Admin.getTeacherInfoAdmin();
	}
	
//	@PreAuthorize("hasRole('Admin')")
	@GetMapping("/get-student-info")
	public ArrayList<StudentInfoAdmin> getStudentInfoAdmin(){
		return Admin.getStudentInfoAdmin();
	}
	
//	@PreAuthorize("hasRole('Admin')")
	@GetMapping("/get-course-popularity-admin")
	public ArrayList<CoursePopularity> getCoursePopularityAdmin() {
		return Admin.getCoursePopularityAdmin();
	}
	
//	@PreAuthorize("hasRole('Admin')")
	@GetMapping("/get-popular-category-admin")
	public ArrayList<PopularCategory> getPopularCourseAdmin() {
		return Admin.getPopularCourseAdmin();
	}
	
//	@PreAuthorize("hasRole('Admin')")
	@GetMapping("/get-income-per-course-admin")
	public ArrayList<IncomePerCourse> getIncomePerCourse() {
		return Admin.getIncomePerCourseAdmin();
	}
	
	//@PreAuthorize("hasRole('Admin')")
	@GetMapping("/get-approved-courses")
	public ArrayList<CourseApproval> getApprovedCoursesAdmin() {
		return Admin.getApprovedCoursesAdmin();
	}
	
	
	//@PreAuthorize("hasRole('Admin')")
	@GetMapping("/get-unapproved-courses")
	public ArrayList<CourseApproval> getunApprovedCoursesAdmin() {
		return Admin.getUnapprovedCoursesAdmin();
	}
}
