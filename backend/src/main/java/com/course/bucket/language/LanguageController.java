package com.course.bucket.language;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.course.bucket.Global;


@RestController
@CrossOrigin(origins = Global.HOST)
public class LanguageController {
	
	@PreAuthorize("hasRole('Admin')")
	@PostMapping("/add-language")
	public void addLanguage(@RequestBody Language language) {
		//System.out.println("Language : "+language.name+" "+language.adminId);
		Language.createNewLanguage(language.getName(),language.getAdminId());
	}
	
	@GetMapping("/get-languages")
	public List<Language> findLanguages(){
		return Language.getList();
	}
	
	@GetMapping("/get-language-by-name/{name}")
	public Language findById(@PathVariable String name) {
		Language language = new Language(name);
		return language;
	}
		
	
	@PreAuthorize("hasRole('Admin')")
	@PutMapping("/update-language/")
	public void updateLanguage(@RequestBody Language language) {
		Language.changeLanguageName(language);
	}
	
	@PreAuthorize("hasRole('Admin')")
	@DeleteMapping("/delete-language/{id}")
	public void deleteLanguage(@PathVariable Integer id) {
		Language.deleteLanguage(id);
	}
}
