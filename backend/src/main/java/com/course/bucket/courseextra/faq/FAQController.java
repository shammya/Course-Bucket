package com.course.bucket.courseextra.faq;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class FAQController {
	
	@PostMapping("/add-faq-question")
	public void addFaqQuestion(@RequestBody FaqDb faq) {
		//System.out.println("Country : "+purchasehistory.name+" "+purchasehistory.adminId);
		FAQ.addFaqQuestion(faq);
	}
	@PostMapping("/add-faq-answer")
	public void addFaqAnswer(@RequestBody FaqDb faq) {
		//System.out.println("Country : "+purchasehistory.name+" "+purchasehistory.adminId);
		FAQ.addFaqAnswer(faq);
	}
	
	@GetMapping("/get-faq-list/{courseId}")
	public ArrayList<FAQ> findFAQList(@PathVariable Integer courseId){
		return FAQ. getFAQList(courseId);
	}
	
	@GetMapping("/get-faq-for-teacher/{teacherUsername}")
	public ArrayList<FaqList> findFAQForTeacherView(@PathVariable String teacherUsername) {
		return FAQ.getFaqListTeacher(teacherUsername);
	}
	
	@GetMapping("/get-faq-student/{studentName}")
	public Map<Integer, ArrayList<FAQ>> findFAQForStudentView(@PathVariable String studentName) {
		return FAQ.getFAQForStudentView(studentName);
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
