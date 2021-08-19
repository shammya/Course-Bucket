package com.course.bucket.notification;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.course.bucket.Global;
import com.course.bucket.tools.ToolKit;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

@RestController
@CrossOrigin(origins = Global.HOST)
public class NotificationController {
	
	@Autowired
	private ObjectMapper mapper;

	@PreAuthorize("hasRole('Admin') or hasRole('Teacher') or hasRole('Student')")
	@GetMapping("/get-notification")
	public ArrayList<ObjectNode> getNotification() {
//		return Notification.getNotifications(mapper, ToolKit.getCurrentUserName());
		return Notification.getNotifications(mapper, "newTeacher");
	}

//	@GetMapping("/api/auth/get-registration-notification")
//	public   ArrayList<ObjectNode> getRegisteredPerson(){
//		return Notification.getRegisteredPersonNotification(mapper);
//	}
//	
//	@GetMapping("/api/auth/get-course-upload-notification")
//	public   ArrayList<ObjectNode> getCourseUpload(){
//		return Notification.getCourseUploadNotification(mapper);
//	}
//	@GetMapping("/api/auth/get-course-purchase-notification")
//	public   ArrayList<ObjectNode> getCoursePurchase(){
//		return Notification.getCoursePurchaseNotification(mapper);
//	}
//	@GetMapping("/api/auth/get-course-rating-notification")
//	public   ArrayList<ObjectNode> getCourseRating(){
//		return Notification.getCourseRatingNotification(mapper);
//	}
//	@GetMapping("/api/auth/get-course-review-notification")
//	public   ArrayList<ObjectNode> getCourseReview(){
//		return Notification.getCourseReviewNotification(mapper);
//	}
//	@GetMapping("/api/auth/get-course-faq-question-notification")
//	public   ArrayList<ObjectNode> getFaqQuestion(){
//		return Notification.getFaqQuestionNotification(mapper);
//	}
	

}
