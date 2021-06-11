package com.course.bucket.files;

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
public class FilesController {
	
//	@PostMapping("/add-coursePreview-photo-by-id/{id}")
//	public void addFiles(@RequestBody Files files,@PathVariable Integer id) {
//		Files.createPhoto(files, email);
//	}
	
	@PostMapping("/add-photo-by-email/{email}")
	public void addPhoto(@RequestBody Files files,@PathVariable String email) {
		Files.createPhoto(files, email);
	}
	
	@GetMapping("/get-photo-by-id/{id}")
	public String  findPhoto(@PathVariable String id){
		return Files.getPhoto(id);
	}
//	
//	@GetMapping("/get-files-by-name/{name}")
//	public Files findById(@PathVariable String name) {
//		Files files = new Files(name);
//		return files;
//	}
		
	
	@PutMapping("/update-photo")
	public void updateFiles(@RequestBody Files files) {
		Files.changePhoto(files);
	}
	
	@DeleteMapping("/delete-photo-by-id/{personId,photoId}")
	public void deleteFiles(@PathVariable Integer personId,@PathVariable Integer photoId) {
		Files.deletePhoto(personId,photoId);
	}
}
