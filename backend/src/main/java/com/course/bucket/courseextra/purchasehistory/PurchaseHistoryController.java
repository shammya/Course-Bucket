package com.course.bucket.courseextra.purchasehistory;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

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
public class PurchaseHistoryController {
	
	
	@PreAuthorize("hasRole('Student')")
	@PostMapping("/add-purchasehistory")
	public void addPurchaseHistory(@RequestBody PurchaseHistoryDb phd) {
		//System.out.println("Country : "+purchasehistory.name+" "+purchasehistory.adminId);
		PurchaseHistory.createNewPurchaseHistory(phd);
	}
	
	@PreAuthorize("hasRole('Teacher')")
	@GetMapping("/get-purchase-student-info")
	public ArrayList<PurchaseHistory> findPurchasedStudentInfo(){
		return PurchaseHistory.getPurchasedStudentInfo(ToolKit.getCurrentUserName());
	}
	
	@PreAuthorize("hasRole('Teacher')")
	@GetMapping("/get-purchase-history-teacher")
	public ArrayList<PurchaseHistoryList> getPurchaseHistoryTeacher(){
		return PurchaseHistory.getPurchaseHistoryTeacher(ToolKit.getCurrentUserName());
	}
	
	
	@PreAuthorize("hasRole('Teacher')")
	@GetMapping("/get-enrolled-students-teacher")
	public HashMap<Integer, ArrayList<PurchaseHistory>> findEnrolledStudentList() {
		return PurchaseHistory.getEnrolledStudentList(ToolKit.getCurrentUserName());
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
