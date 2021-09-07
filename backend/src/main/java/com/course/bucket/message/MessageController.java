package com.course.bucket.message;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.course.bucket.Global;
import com.course.bucket.course.Course;
import com.course.bucket.database.DB;
import com.course.bucket.person.Admin;
import com.course.bucket.tools.ToolKit;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

@RestController
@CrossOrigin(origins = Global.HOST)
public class MessageController {
	
	@Autowired
	private ObjectMapper mapper;

	@PreAuthorize("hasRole('Admin') or hasRole('Teacher') or hasRole('Student')")
	@PostMapping("/insert-message")
	public void insertMessage(@RequestBody Message message) {
		Message.insertNewMessage(message);
	}

	@PreAuthorize("hasRole('Admin') or hasRole('Teacher') or hasRole('Student')")
	@GetMapping("/get-conversation-list")
	public ResponseEntity<?> getConversationList() {
		return ResponseEntity.ok(Message.getConversationList(mapper, ToolKit.getCurrentUserName()));
	}

	@PreAuthorize("hasRole('Admin') or hasRole('Teacher') or hasRole('Student')")
	@GetMapping("/get-messages/{username}")
	public ObjectNode getMessage(@PathVariable String username) {
		return Message.messageList(mapper, ToolKit.getCurrentUserName(), username);
	}

}
