package com.course.bucket.edustatus;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class EduStatusController {
	
	@PostMapping("/add-edustatus")
	public void addEduStatus(@RequestBody EduStatus edustatus) {
		System.out.println("EduStatus : "+edustatus.getType()+" "+edustatus.adminId);
		EduStatus.createNewEduStatus(edustatus.getType(),edustatus.getAdminId());
	}
	
	@GetMapping("/get-edustatuss")
	public List<EduStatus> findCountries(){
		return EduStatus.getList();
	}
	
	@GetMapping("/get-edustatus-by-name/{name}")
	public EduStatus findById(@PathVariable String name) {
		EduStatus edustatus = new EduStatus(name);
		return edustatus;
	}
		
	
	@PutMapping("/update-edustatus/{oldName}/{newName}")
	public void updateEduStatus(@PathVariable String oldName, @PathVariable String newName) {
		EduStatus.changeEduStatusName(oldName, newName);
	}
	
	@DeleteMapping("/delete-edustatus/{name}")
	public void deleteEduStatus(@PathVariable String name) {
		EduStatus.deleteEduStatus(name);
	}
}
