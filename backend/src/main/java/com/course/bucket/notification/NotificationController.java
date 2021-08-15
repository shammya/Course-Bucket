package com.course.bucket.notification;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.course.bucket.Global;
import com.course.bucket.authentication.JwtUtils;
import com.course.bucket.designation.Designation;
import com.course.bucket.edustatus.EduStatus;
import com.course.bucket.tools.ToolKit;


@RestController
@CrossOrigin(origins = Global.HOST)
public class NotificationController {
	
	
	@PreAuthorize("hasRole('Admin') or hasRole('Teacher') or hasRole('Student')")
	@GetMapping("/get-notification")
	public ArrayList<Notification> getNotification(){
			return Notification.getNotification(ToolKit.getCurrentUserName());
	}


}
