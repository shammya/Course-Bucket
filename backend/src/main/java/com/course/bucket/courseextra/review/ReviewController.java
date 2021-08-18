package com.course.bucket.courseextra.review;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.course.bucket.Global;
import com.course.bucket.courseextra.CourseRating;
import com.course.bucket.tools.ToolKit;


@RestController
@CrossOrigin(origins = Global.HOST)
public class ReviewController {
	
	@PreAuthorize("hasRole('Student')")
	@PostMapping("/add-review")
	public void addReview(@RequestParam Integer courseId, @RequestParam String review) {
		String username = ToolKit.getCurrentUserName();
		ReviewDb rd = new ReviewDb(courseId, username, ToolKit.getCurTime(), review);
		Review.createNewReview(rd);
	}
	

	@PreAuthorize("hasRole('Student')")
	@PostMapping("/add-rating")
	public void addRating(@RequestParam Integer courseId, @RequestParam Double ratingValue) {
		//System.out.println("\t review : "+review.getName()+" "+review.getParentName()+" "+review.getAdminId());
		String username = ToolKit.getCurrentUserName();
		Review.createNewRating(courseId, username, ratingValue);
	}
	
	@PreAuthorize("hasRole('Student')")
	@GetMapping("/get-rating-self/{courseId}")
	public Integer getRatingSelf(@PathVariable Integer courseId) {
		//System.out.println("\t review : "+review.getName()+" "+review.getParentName()+" "+review.getAdminId());
		String username = ToolKit.getCurrentUserName();
		return CourseRating.getRatingByStudent(courseId, username);
	}
	
	@PreAuthorize("hasRole('Student')")
	@GetMapping("/get-review-self/{courseId}")
	public ReviewInfo getReviewSelf(@PathVariable Integer courseId) {
		//System.out.println("\t review : "+review.getName()+" "+review.getParentName()+" "+review.getAdminId());
		String username = ToolKit.getCurrentUserName();
		return Review.getReviewByStudent(courseId, username);
	}
	

	@GetMapping("/get-review-teacher")
	public ArrayList<ReviewList> getReviewListTeacher(){
		return Review.getReviewListTeacher(ToolKit.getCurrentUserName());
	}
	@GetMapping("/get-review-student")
	public ArrayList<ReviewList> getReviewListStudent(){
		return Review.getReviewListStudent(ToolKit.getCurrentUserName());
	}
	
//	@GetMapping("/get-review-by-name/{id}")
//	public Category findById(@PathVariable Integer id) {
//		return new Category(id);
//	}
//		
//	
//	@PutMapping("/update-review")
//	public void updateCategory(@RequestBody Category review) {
//		Category.updateCategory(review);
//	}
//	
//	@DeleteMapping("/delete-review/{id}")
//	public void deleteCategory(@PathVariable Integer id) {
//		Category.deleteCategory(id);
//	}
}
