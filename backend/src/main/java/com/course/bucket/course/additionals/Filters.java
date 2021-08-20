package com.course.bucket.course.additionals;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Vector;

import com.course.bucket.category.Category;
import com.course.bucket.database.DB;
import com.course.bucket.tools.Pair;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;



public class Filters {
	
	private String searchKey = null;
	private ArrayList<Integer> categories = new ArrayList<>();
	private ArrayList<Integer> languages = new ArrayList<>();
	private ArrayList<String> teachers = new ArrayList<>();
	private Vector<Double> price = new Vector<>(2);
	private Vector<Double> rating =  new Vector<>(2);
	private String sorting;


	public Filters(String searchKey, ArrayList<Integer> categories, ArrayList<Integer> languages,
			ArrayList<String> teachers, Vector<Double> price, Vector<Double> rating, String sorting) {
		super();
		this.searchKey = searchKey;
		this.categories = categories;
		this.languages = languages;
		this.teachers = teachers;
		this.price = price;
		this.rating = rating;
		this.sorting = sorting;
	}


	public ArrayList<Integer> getCategories() {
		return categories;
	}


	public void setCategories(ArrayList<Integer> categories) {
		this.categories = categories;
	}


	public ArrayList<Integer> getLanguages() {
		return languages;
	}


	public void setLanguages(ArrayList<Integer> languages) {
		this.languages = languages;
	}


	public ArrayList<String> getTeachers() {
		return teachers;
	}


	public void setTeachers(ArrayList<String> teachers) {
		this.teachers = teachers;
	}


	public Vector<Double> getPrice() {
		return price;
	}


	public void setPrice(Vector<Double> price) {
		this.price = price;
	}


	public Vector<Double> getRating() {
		return rating;
	}


	public void setRating(Vector<Double> rating) {
		this.rating = rating;
	}


	public String getSorting() {
		return sorting;
	}


	public void setSorting(String sorting) {
		this.sorting = sorting;
	}


	public String getSearchKey() {
		return searchKey;
	}


	public void setSearchKey(String searchKey) {
		this.searchKey = searchKey;
	}


	public static ObjectNode getDataForFilter(ObjectMapper mapper) {
		ObjectNode data = mapper.createObjectNode();
		try {
			ResultSet rs = DB.executeQuery(""
					+ "select unique(p.id), concat(p.first_name,concat(' ',p.last_name)) full_name "
					+ "from person p, course c "
					+ "where p.id = c.teacher_id "
					+ "order by full_name");
			ArrayList<ObjectNode> teacherNodes = new ArrayList();
			while(rs.next()) {
				ObjectNode node = mapper.createObjectNode();
				node.put("id", rs.getString("id"));
				node.put("title", rs.getString("full_name"));
				teacherNodes.add(node);
			}
			
			rs = DB.executeQuery("select * from language order by name");
			ArrayList<ObjectNode> langNodes = new ArrayList();
			while(rs.next()) {
				ObjectNode node = mapper.createObjectNode();
				node.put("id", rs.getInt("id"));
				node.put("title", rs.getString("name"));
				langNodes.add(node);
			}

			rs = DB.executeQuery(""
					+ "select min(price) min, max(price) max "
					+ "from course "
					+ "");

			ObjectNode price = mapper.createObjectNode();
			while(rs.next()) {
				price.put("min", rs.getDouble("min"));
				price.put("max", rs.getDouble("max"));
			}

			JsonNode teacher = mapper.convertValue(teacherNodes, JsonNode.class);
			JsonNode language = mapper.convertValue(langNodes, JsonNode.class);
			JsonNode categories = mapper.convertValue(Category.getAllCategories(), JsonNode.class);
			
			data.set("teachers", teacher);
			data.set("languages", language);
			data.set("categories", categories);
			data.set("price", price);
			
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return data;
	}
	
	
	
	

	
	
	
	
	
}
