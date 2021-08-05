package com.course.bucket.courseextra.review;

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


@RestController
@CrossOrigin(origins = Global.HOST)
public class ReviewController {
	
	@PostMapping("/add-review")
	public void addReview(@RequestBody ReviewDb review) {
		//System.out.println("\t review : "+review.getName()+" "+review.getParentName()+" "+review.getAdminId());
		Review.createNewReview(review);
	}
	@PostMapping("/add-rating")
	public void addRating(@RequestBody RatingDb rating) {
		//System.out.println("\t review : "+review.getName()+" "+review.getParentName()+" "+review.getAdminId());
		Review.createNewRating(rating);
	}
	
	@GetMapping("/get-review-teacher/{teacherUsername}")
	public ArrayList<ReviewList> getReviewListTeacher(@PathVariable String teacherUsername){
		return Review.getReviewListTeacher(teacherUsername);
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
