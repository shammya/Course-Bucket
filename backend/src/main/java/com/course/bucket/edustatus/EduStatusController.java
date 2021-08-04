package com.course.bucket.edustatus;

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

import com.course.bucket.Global;
import com.course.bucket.authentication.JwtUtils;


@RestController
@CrossOrigin(origins = Global.HOST)
public class EduStatusController {
	
	@PostMapping("/add-edustatus")
	public void addEduStatus(@RequestBody EduStatus edustatus) {
		//System.out.println("EduStatus : "+edustatus.getType()+" "+edustatus.adminId);
		EduStatus.createNewEduStatus(edustatus.getType(),edustatus.getAdminId());
	}
	
	@GetMapping("/get-edustatus")
	public List<EduStatus> findEdustatuses(){
		return EduStatus.getList();
	}
	
	@GetMapping("/get-edustatus-by-name/{name}")
	public EduStatus findById(@PathVariable String name) {
		EduStatus edustatus = new EduStatus(name);
		return edustatus;
	}
		
	
	@PutMapping("/update-edustatus")
	public void updateEduStatus(@RequestBody EduStatus edustatus) {
		EduStatus.changeEduStatusName(edustatus);
	}
	
	@DeleteMapping("/delete-edustatus/{id}")
	public void deleteEduStatus(@PathVariable Integer id) {
		EduStatus.deleteEduStatus(id);
	}
	

	
//	Mehedi
	@PreAuthorize("hasRole('Student')")
	@GetMapping("/get-edustatus-self")
	public EduStatus getEduStatusSelf() {
		UserDetails user = JwtUtils.getUser();
		return EduStatus.getByUsername(user.getUsername());
	}
}
