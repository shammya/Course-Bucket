package com.course.bucket.category;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
public class CategoryController {
	
	@PostMapping("/add-category")
	public void addCategory(@RequestBody Category category) {
		//System.out.println("\t category : "+category.getName()+" "+category.getParentName()+" "+category.getAdminId());
		Category.createNewCategory(category);
	}
	
	@GetMapping("/get-categories")
	public List<Category> findCategories(){
		return Category.getAllCategories();
	}
	
	@GetMapping("/get-category-by-name/{id}")
	public Category findById(@PathVariable Integer id) {
		return new Category(id);
	}
		
	
	@PutMapping("/update-category")
	public void updateCategory(@RequestBody Category category) {
		Category.updateCategory(category);
	}
	
	@DeleteMapping("/delete-category/{id}")
	public void deleteCategory(@PathVariable Integer id) {
		Category.deleteCategory(id);
	}
}
