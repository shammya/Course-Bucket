package com.course.bucket.category;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.course.bucket.database.DB;
import com.fasterxml.jackson.databind.util.ArrayBuilders.BooleanBuilder;

public class Category {

	Integer id;
	String name;
	String parentName;
	String adminId;
	List<Category> children = new ArrayList<>();

	@Override
	public String toString() {
		return "Category [id=" + id + ", name=" + name + ", parentName=" + parentName + ", adminId=" + adminId + "]";
	}

	public Category() {

	}

	public Category(Integer id) {
		this.setId(id);
		ResultSet rs = DB.executeQuery("SELECT * FROM CATEGORY WHERE ID = #", id.toString());
		try {
			if (rs.next()) {
				this.setName(rs.getString("NAME"));
				ResultSet rs1 = DB.executeQuery("SELECT NAME FROM CATEGORY WHERE ID = '#'",
						Integer.toString(rs.getInt("PARENT_ID")));
				if (rs1.next())
					this.parentName = rs1.getString("NAME");
				else {
					this.parentName = null;
				}
				this.setAdminId(rs.getString("ADMIN_ID"));
				this.children.clear();
				rs1.close();
			}
			rs.close();

		} catch (SQLException ex) {
			Logger.getLogger(Category.class.getName()).log(Level.SEVERE, null, ex);
		}
	}

	public Category(String categoryName) {
		// this.children.clear();
		System.out.println("category name = " + categoryName);
		this.setName(categoryName);
		ResultSet rs = DB.executeQuery("SELECT * FROM CATEGORY WHERE NAME = '#'", categoryName);
		ResultSet rs1;
		try {
			if (rs.next()) {
				System.out.println(rs.getInt("ID") + " " + rs.getString("NAME") + " " + rs.getInt("PARENT_ID"));
				this.setId(rs.getInt("ID"));
				//System.out.println("id = " + this.getId());
				rs1 = DB.executeQuery("SELECT NAME FROM CATEGORY WHERE ID = '#'",
						Integer.toString(rs.getInt("PARENT_ID")));
				if (rs1.next())
					this.parentName = rs1.getString("NAME");
				else {
					this.parentName = null;
				}
				this.adminId = rs.getString("ADMIN_ID");
				rs1.close();
			}
			rs1 = DB.executeQuery("SELECT NAME FROM CATEGORY WHERE PARENT_ID = #", this.getId().toString());
			while (rs1.next()) {
				this.children.add(new Category(rs1.getString("NAME")));
			}
			rs.close();
			rs1.close();
		} catch (SQLException ex) {
			Logger.getLogger(Category.class.getName()).log(Level.SEVERE, null, ex);
		}
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getParentName() {
		return parentName;
	}

	public void setParentName(String parentName) {
		this.parentName = parentName;
	}

	public String getAdminId() {
		return adminId;
	}

	public void setAdminId(String adminId) {
		this.adminId = adminId;
	}

	public List<Category> getChildren() {
		return children;
	}

	public void setChildren(List<Category> children) {
		this.children = children;
	}

	public static List<Category> getAllCategories() {
		// System.out.println("in get all categories");
		List<Category> categories = new ArrayList<>();
		ResultSet rsMainCat = DB.executeQuery("SELECT * FROM CATEGORY WHERE PARENT_ID IS NULL");
		try {
			while (rsMainCat.next()) {
				Category mainCat = new Category(rsMainCat.getString("NAME"));
				categories.add(mainCat);
			}
			rsMainCat.close();
		} catch (SQLException ex) {
			Logger.getLogger(Category.class.getName()).log(Level.SEVERE, null, ex);
		}
		return categories;
	}

	public static ArrayList<Category> getMainCategories() {
		ArrayList<Category> list = new ArrayList<>();
		ResultSet rsMainCat = DB.executeQuery("SELECT NAME FROM CATEGORY WHERE PARENT_ID = 35");
		try {
			while (rsMainCat.next()) {
				list.add(new Category(rsMainCat.getString("NAME")));
			}
			rsMainCat.close();
		} catch (SQLException ex) {
			Logger.getLogger(Category.class.getName()).log(Level.SEVERE, null, ex);
		}
		return list;
	}

	public static ArrayList<Category> getSubCategories(Category parent) {
		ArrayList<Category> list = new ArrayList<Category>();
		ResultSet rs = DB.executeQuery("SELECT ID FROM CATEGORY WHERE PARENT_ID = #", parent.getId().toString());
		try {
			while (rs.next()) {
				list.add(new Category(rs.getInt("ID")));
			}
			rs.close();
		} catch (SQLException ex) {
			Logger.getLogger(Category.class.getName()).log(Level.SEVERE, null, ex);
		}
		return list;
	}

	public static void createNewCategory(Category category) {
		System.out.println("in create categories");
		String sql2 = "INSERT INTO CATEGORY VALUES (#,'#',#,NULL,'#')";
		String sql1 = "INSERT INTO CATEGORY VALUES (#,'#',NULL,NULL,'#')";
		Integer parentId = DB.getIdFromDb("CATEGORY", "NAME", category.getParentName());
		System.out.println("parent id = " + parentId);
		if (parentId == null) {
			DB.execute(sql1, DB.generateId("CATEGORY").toString(), category.getName(), category.getAdminId());
		} else {
			DB.execute(sql2, DB.generateId("CATEGORY").toString(), category.getName(), parentId.toString(),
					category.getAdminId());
		}
	}

//	public static void createNewSubCategory(String name, String parentname, String admin) {
//		Category ctg = new Category(parentname);
//		String sql = "INSERT INTO CATEGORY VALUES (#,'#',#,NULL,'#')";
//		boolean x = DB.execute(sql, DB.generateId("CATEGORY").toString(), name, ctg.getId().toString(), admin);
//	}

	public static void deleteCategory(String name) {
		String sql = "DELETE FROM CATEGORY WHERE PARENT_ID  = # ";
		Category ctg = new Category(name);
		DB.execute(sql, ctg.getId().toString());
		sql = "DELETE FROM CATEGORY WHERE NAME = '#'";
		DB.execute(sql, name);

	}

	public static void updateCategory(String oldName, String newName) {
		String sql = "UPDATE CATEGORY SET NAME = '#' WHERE  NAME = '#'";
		DB.execute(sql, newName, oldName);
	}

//	  public static ArrayList<Pair<Category, ArrayList<Category>>> getTreeList() {
//	  ArrayList<Pair<Category, ArrayList<Category>>> lists = new ArrayList(); try {
//	  ResultSet rsMain = DB.
//	  executeQuery("SELECT ID FROM CATEGORY WHERE PARENT_ID IS NULL ORDER BY NAME ASC"
//	  ); while (rsMain.next()) { Category main = new Category(rsMain.getInt("ID"));
//	  ResultSet rsSub = DB.
//	  executeQuery("SELECT ID FROM CATEGORY WHERE PARENT_ID = # ORDER BY NAME ASC",
//	  main.getId().toString()); ArrayList<Category> list = new ArrayList(); while
//	  (rsSub.next()) { list.add(new Category(rsSub.getInt("ID"))); } lists.add(new
//	  Pair<Category, ArrayList<Category>>(main, list)); rsSub.close(); }
//	  rsMain.close(); } catch (SQLException ex) {
//	  Logger.getLogger(Category.class.getName()).log(Level.SEVERE, null, ex); }
//	  return lists; }

}

//{
//	  "name" : "BB",
//	  "parentName" : "Root",
//	  "adminId" : "shammya"
//}
