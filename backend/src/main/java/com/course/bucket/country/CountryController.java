package com.course.bucket.country;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


import com.course.bucket.Global;



@RestController
@CrossOrigin(origins = "http://localhost:6600")
public class CountryController {
	
	@PostMapping("/add-country")
	public void addCountry(@RequestBody Country country) {
		System.out.println("Country : "+country.name+" "+country.adminId);
		Country.createNewCountry(country.name,country.adminId);
	}
	
	@GetMapping("/get-countries")
	public List<Country> findCountries(){
		return Country.getList();
	}
	
	@GetMapping("/get-country-by-name/{name}")
	public Country findById(@PathVariable String name) {
		Country country = new Country(name);
		return country;
	}
		
	
	@PutMapping("/update-country")
	public void updateCountry(@RequestBody Country country) {
		Country.changeCountryName(country);
	}
	
	@DeleteMapping("/delete-country/{id}")
	public void deleteCountry(@PathVariable Integer id) {
		Country.deleteCountry(id);
	}
}
