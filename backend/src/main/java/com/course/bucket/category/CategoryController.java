package com.course.bucket.category;

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
public class CategoryController {
	
	@PostMapping("/add-category")
	public void addCategory(@RequestBody Category category) {
		System.out.println("\t category : "+category.getName()+" "+category.getParentName()+" "+category.getAdminId());
		Category.createNewCategory(category);
	}
	
	@GetMapping("/get-categories")
	public List<Category> findCategories(){
		return Category.getAllCategories();
	}
	
	@GetMapping("/get-category-by-name/{name}")
	public Category findById(@PathVariable String name) {
		return new Category(name);
	}
		
	
	@PutMapping("/update-category/{oldName}/{newName}")
	public void updateCategory(@PathVariable String oldName, @PathVariable String newName) {
		Category.updateCategory(oldName, newName);
	}
	
	@DeleteMapping("/delete-category/{name}")
	public void deleteCategory(@PathVariable String name) {
		Category.deleteCategory(name);
	}
}
