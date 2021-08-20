package com.course.bucket.person;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.course.bucket.Global;
import com.course.bucket.course.Course;
import com.course.bucket.course.additionals.CourseApproval;
import com.course.bucket.course.additionals.CoursePopularity;
import com.course.bucket.course.additionals.IncomePerCourse;
import com.course.bucket.course.additionals.PopularCategory;
import com.course.bucket.person.others.CourseOverview;
import com.course.bucket.person.others.NewUser;
import com.course.bucket.person.others.ShowCard;
import com.course.bucket.person.others.Slider;
import com.course.bucket.person.others.StudentInfoAdmin;
import com.course.bucket.person.others.TeacherInfoAdmin;
import com.course.bucket.tools.ToolKit;

@RestController
@CrossOrigin(origins = Global.HOST)
public class AdminController {


	@PreAuthorize("hasRole('Admin')")
	@PostMapping("/approve-course/{courseId}")
	public void approveCourse(@PathVariable Integer courseId) {
		 Admin.approveCourse(courseId,ToolKit.getCurrentUserName());
	}

	@PreAuthorize("hasRole('Admin')")
	@PostMapping("/unapprove-course/{courseId}")
	public void unapproveCourse(@PathVariable Integer courseId) {
		 Admin.unapproveCourse(courseId,ToolKit.getCurrentUserName());
	}

	@PreAuthorize("hasRole('Admin')")
	@GetMapping("/get-new-user-admin")
	public HashMap<Date, NewUser> getNewUserAdmin() {
		return Admin.getNewUserAdmin();
	}
	
	@PreAuthorize("hasRole('Admin')")
	@GetMapping("/get-new-user-count")	// Mehedi
	public ArrayList<NewUser> getNewUserCount(){
		return Admin.getNewUserCount();
	}
		
	@PreAuthorize("hasRole('Admin')")
	@GetMapping("/get-show-card-admin")
	public ShowCard showCardAdmin() {
		return Admin.showCardAdmin();
	}

	@PreAuthorize("hasRole('Admin')")
	@GetMapping("/get-course-overview/{id}")
	public CourseOverview getCourseOverview(@PathVariable Integer id) {
		return Admin.getCourseOverview(id);
	}

	@PreAuthorize("hasRole('Admin')")
	@GetMapping("/get-teacher-info")
	public ArrayList<TeacherInfoAdmin> getTeacherInfoAdmin() {
		return Admin.getTeacherInfoAdmin();
	}

	@PreAuthorize("hasRole('Admin')")
	@GetMapping("/get-student-info")
	public ArrayList<StudentInfoAdmin> getStudentInfoAdmin() {
		return Admin.getStudentInfoAdmin();
	}

	@PreAuthorize("hasRole('Admin')")
	@GetMapping("/get-course-popularity-admin")
	public ArrayList<CoursePopularity> getCoursePopularityAdmin() {
		return Admin.getCoursePopularityAdmin();
	}

	@PreAuthorize("hasRole('Admin')")
	@GetMapping("/get-popular-category-admin")
	public ArrayList<PopularCategory> getPopularCourseAdmin() {
		return Admin.getPopularCourseAdmin();
	}

	@PreAuthorize("hasRole('Admin')")
	@GetMapping("/get-income-per-course-admin")
	public ArrayList<IncomePerCourse> getIncomePerCourse() {
		return Admin.getIncomePerCourseAdmin();
	}

	 @PreAuthorize("hasRole('Admin')")
	@GetMapping("/get-approved-courses")
	public ArrayList<CourseApproval> getApprovedCoursesAdmin() {
		return Admin.getApprovedCoursesAdmin();
	}

	 @PreAuthorize("hasRole('Admin')")
	@GetMapping("/get-unapproved-courses")
	public ArrayList<CourseApproval> getunApprovedCoursesAdmin() {
		return Admin.getUnapprovedCoursesAdmin();
	}

	 @PreAuthorize("hasRole('Admin')")
	@GetMapping("/get-slider-images")
	public ArrayList<Slider> getSliderImages() {
		return Admin.getSliderImages();
	}
}
