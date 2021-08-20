package com.course.bucket.designation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.course.bucket.authentication.JwtUtils;
import com.course.bucket.tools.ToolKit;


@RestController
@CrossOrigin(origins = "http://localhost:6600")
public class DesignationController {
	
	@PreAuthorize("hasRole('Admin')")
	@PostMapping("/add-designation")
	public void addDesignation(@RequestBody Designation designation) {
		//System.out.println("Designation : "+designation.ge+" "+designation.adminId);
		Designation.createNewDesignation(designation.getType(),designation.getAdminId());
	}
	
	@GetMapping("/public/get-designations")
	public List<Designation> findCountries(){
		return Designation.getList();
	}
	
//	@GetMapping("/get-designation-by-name/{name}")
//	public Designation findById(@PathVariable String name) {
//		Designation designation = new Designation(name);
//		return designation;
//	}
		
	@PreAuthorize("hasRole('Admin')")
	@PutMapping("/update-designation")
	public void updateDesignation(@RequestBody Designation  designation) {
		Designation.changeDesignationName(designation);
	}
	
	@PreAuthorize("hasRole('Admin')")
	@DeleteMapping("/delete-designation/{id}")
	public void deleteDesignation(@PathVariable Integer id) {
		Designation.deleteDesignation(id);
	}
	
	
//	Mehedi
	@PreAuthorize("hasRole('Teacher')")
	@GetMapping("/get-designation-self")
	public Designation getDesignationSelf() {
		return Designation.getByUsername(ToolKit.getCurrentUserName());
	}
}
