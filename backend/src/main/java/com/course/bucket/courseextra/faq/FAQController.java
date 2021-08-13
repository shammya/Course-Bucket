package com.course.bucket.courseextra.faq;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.course.bucket.tools.ToolKit;


@RestController
public class FAQController {
	
	@PreAuthorize("hasRole('Teacher') or hasRole('Student')")
	@PostMapping("/add-faq-question")
	public void addFaqQuestion(@RequestBody FaqDb faq) {
		//System.out.println("Country : "+purchasehistory.name+" "+purchasehistory.adminId);
		FAQ.addFaqQuestion(faq);
	}
	
	@PreAuthorize("hasRole('Teacher')")
	@PostMapping("/add-faq-answer")
	public void addFaqAnswer(@RequestBody FaqDb faq) {
		//System.out.println("Country : "+purchasehistory.name+" "+purchasehistory.adminId);
		FAQ.addFaqAnswer(faq);
	}
	
	@PreAuthorize("hasRole('Teacher')")
	@GetMapping("/get-faq-list/{courseId}")
	public ArrayList<FAQ> findFAQList(@PathVariable Integer courseId){
		return FAQ. getFAQList(courseId);
	}
	
	
	@PreAuthorize("hasRole('Teacher')")
	@GetMapping("/get-faq-for-teacher")
	public ArrayList<FaqList> findFAQForTeacherView() {
		return FAQ.getFaqListTeacher(ToolKit.getCurrentUserName());
	}
	
	
	@PreAuthorize("hasRole('Student')")
	@GetMapping("/get-faq-student")
	public Map<Integer, ArrayList<FAQ>> findFAQForStudentView() {
		return FAQ.getFAQForStudentView(ToolKit.getCurrentUserName());
	}
		
	
//	@PutMapping("/update-purchasehistory/{oldName}/{newName}")
//	public void updateCountry(@PathVariable String oldName, @PathVariable String newName) {
//		Country.changeCountryName(oldName, newName);
//	}
//	
//	@DeleteMapping("/delete-purchasehistory/{name}")
//	public void deleteCountry(@PathVariable String name) {
//		Country.deleteCountry(name);
//	}
}
