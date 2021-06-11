package com.course.bucket.language;

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
public class LanguageController {
	
	@PostMapping("/add-language")
	public void addLanguage(@RequestBody Language language) {
		System.out.println("Language : "+language.name+" "+language.adminId);
		Language.createNewLanguage(language.getName(),language.getAdminId());
	}
	
	@GetMapping("/get-languages")
	public List<Language> findCountries(){
		return Language.getList();
	}
	
	@GetMapping("/get-language-by-name/{name}")
	public Language findById(@PathVariable String name) {
		Language language = new Language(name);
		return language;
	}
		
	
	@PutMapping("/update-language/{oldName}/{newName}")
	public void updateLanguage(@PathVariable String oldName, @PathVariable String newName) {
		Language.changeLanguageName(oldName, newName);
	}
	
	@DeleteMapping("/delete-language/{name}")
	public void deleteLanguage(@PathVariable String name) {
		Language.deleteLanguage(name);
	}
}
