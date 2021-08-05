package com.course.bucket.courseextra.purchasehistory;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;


import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class PurchaseHistoryController {
	
	@PostMapping("/add-purchasehistory")
	public void addPurchaseHistory(@RequestBody PurchaseHistoryDb phd) {
		//System.out.println("Country : "+purchasehistory.name+" "+purchasehistory.adminId);
		PurchaseHistory.createNewPurchaseHistory(phd);
	}
	
	@GetMapping("/get-purchase-student-info/{teacherName}")
	public ArrayList<PurchaseHistory> findPurchasedStudentInfo(@PathVariable String teacherName){
		return PurchaseHistory.getPurchasedStudentInfo(teacherName);
	}
	
	@GetMapping("/get-purchase-history-teacher/{teacherUsername}")
	public ArrayList<PurchaseHistoryList> getPurchaseHistoryTeacher(@PathVariable String teacherUsername){
		return PurchaseHistory.getPurchaseHistoryTeacher(teacherUsername);
	}
	
	@GetMapping("/get-enrolled-students/{teacherName}")
	public HashMap<Integer, ArrayList<PurchaseHistory>> findEnrolledStudentList(@PathVariable String teacherName) {
		return PurchaseHistory.getEnrolledStudentList(teacherName);
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
