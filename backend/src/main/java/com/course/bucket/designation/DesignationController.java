package com.course.bucket.designation;

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
public class DesignationController {
	
	@PostMapping("/add-designation")
	public void addDesignation(@RequestBody Designation designation) {
		//System.out.println("Designation : "+designation.ge+" "+designation.adminId);
		Designation.createNewDesignation(designation.getType(),designation.getAdminId());
	}
	
	@GetMapping("/get-designations")
	public List<Designation> findCountries(){
		return Designation.getList();
	}
	
	@GetMapping("/get-designation-by-name/{name}")
	public Designation findById(@PathVariable String name) {
		Designation designation = new Designation(name);
		return designation;
	}
		
	
	@PutMapping("/update-designation/{oldName}/{newName}")
	public void updateDesignation(@PathVariable String oldName, @PathVariable String newName) {
		Designation.changeDesignationName(oldName, newName);
	}
	
	@DeleteMapping("/delete-designation/{name}")
	public void deleteDesignation(@PathVariable String name) {
		Designation.deleteDesignation(name);
	}
}
