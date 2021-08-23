package com.course.bucket.files;



import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.access.prepost.PreAuthorize;

import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.course.bucket.Global;


@CrossOrigin(value=Global.HOST)
@RequestMapping("/resources")
@RestController
public class FilesController {
	

	@Autowired
	private FileStorageService fileStorageService;
	
	@PutMapping("/upload")
	public ResponseEntity<FileResponse> uploadFile(
			@RequestParam("file") MultipartFile file, 
			@RequestParam("type") String type,  
			@RequestParam("secure") Boolean secure){
		
		System.out.println("param " +type);
		String fileName = fileStorageService.storeFile(file, type, secure);	// Getting filename
		
		String path = "/resources/pb/";
		if(secure) path = "/resources/pv/";
		String uri = ServletUriComponentsBuilder.fromCurrentContextPath()		// Generating URI
				.path(path)
				.path(fileName)
				.toUriString();
		
		FileResponse fileResponse = new FileResponse(fileName, uri, file.getContentType(), file.getSize());
		return new ResponseEntity<FileResponse>(fileResponse,HttpStatus.OK);
	}
	
	@GetMapping("/pb/{fileName:.+}")
	public ResponseEntity<?> publicFile(@PathVariable String fileName,HttpServletRequest request){
		Resource resource = fileStorageService.loadFileAsResource(fileName, false);
		if(resource == null) {
			return ResponseEntity.badRequest().body("");
		}
		String contentType = null; 
		try {
			contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
		}catch(IOException ex) {
			System.out.println("Could not determine fileType");
		}
		
		if(contentType==null) {
			contentType = "application/octet-stream";
		}
		return ResponseEntity.ok()
				.contentType(MediaType.parseMediaType(contentType))
				.body(resource);
	}
	

	@GetMapping("/pv/{fileName:.+}")
	public ResponseEntity<?> privateFile(@PathVariable String fileName,HttpServletRequest request){
		Resource resource = fileStorageService.loadFileAsResource(fileName, true);
		if(resource == null) {
			return ResponseEntity.badRequest().body("");
		}
		String contentType = null; 
		try {
			contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
		}catch(IOException ex) {
			System.out.println("Could not determine fileType");
		}
		
		if(contentType==null) {
			contentType = "application/octet-stream";
		}
		return ResponseEntity.ok()
				.contentType(MediaType.parseMediaType(contentType))
				.body(resource);
	}
	
	
//	@PostMapping("/add-coursePreview-photo-by-id/{id}")
//	public void addFiles(@RequestBody Files files,@PathVariable Integer id) {
//		Files.createPhoto(files, email);
//	}
	
//	@PreAuthorize("hasRole('Admin') or hasRole('Teacher') or hasRole('Student')")
//	@PostMapping("/add-photo-by-email/{email}")
//	public void addPhoto(@RequestBody Files files,@PathVariable String email) {
//		Files.createPhoto(files, email);
//	}
	
//	@PreAuthorize("hasRole('Admin') or hasRole('Teacher') or hasRole('Student')")
//	@GetMapping("/get-photo-by-id/{id}")
//	public String  findPhoto(@PathVariable String id){
//		return Files.getPhoto(id);
//	}
//	
//	@GetMapping("/get-files-by-name/{name}")
//	public Files findById(@PathVariable String name) {
//		Files files = new Files(name);
//		return files;
//	}
		
//	@PreAuthorize("hasRole('Admin') or hasRole('Teacher') or hasRole('Student')")
//	@PutMapping("/update-photo")
//	public void updateFiles(@RequestBody Files files) {
//		Files.changePhoto(files);
//	}
	
//	@PreAuthorize("hasRole('Admin') or hasRole('Teacher') or hasRole('Student')")
//	@DeleteMapping("/delete-photo-by-id/{personId,photoId}")
//	public void deleteFiles(@PathVariable Integer personId,@PathVariable Integer photoId) {
//		Files.deletePhoto(personId,photoId);
//	}
	
//	@PostMapping("/insert-files")
//	public void insertFiles(@RequestBody Files files) {
//		Files.createNewFile(files);
//	}
}
