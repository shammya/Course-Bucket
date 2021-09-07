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
	Integer parentId;
	String adminId;
	List<Category> children = new ArrayList<>();

	public Category() {

	}

	public Category(Integer id) {
		ResultSet rs = DB.executeQuery("SELECT * FROM CATEGORY WHERE ID = #", id.toString()), rs1;
		try {
			if (rs.next()) {
				this.setId(id);
				this.setName(rs.getString("NAME"));
				// ResultSet rs1 = DB.executeQuery("SELECT NAME FROM CATEGORY WHERE ID = '#'",
				// Integer.toString(rs.getInt("PARENT_ID")));
				if (rs.getInt("PARENT_ID") != 0)
					this.setParentId(rs.getInt("PARENT_ID"));
				else {
					this.setParentId(null);
				}
				this.setAdminId(rs.getString("ADMIN_ID"));
				rs1 = DB.executeQuery("SELECT ID FROM CATEGORY WHERE PARENT_ID = #", this.getId().toString());
				while (rs1.next()) {
					this.children.add(new Category(rs1.getInt("ID")));
				}
				rs1.close();

			}
			rs.close();

		} catch (SQLException ex) {
			Logger.getLogger(Category.class.getName()).log(Level.SEVERE, null, ex);
		}
	}

//	public Category(String categoryName) {
//		// this.children.clear();
//		System.out.println("category name = " + categoryName);
//		this.setName(categoryName);
//		ResultSet rs = DB.executeQuery("SELECT * FROM CATEGORY WHERE NAME = '#'", categoryName);
//		ResultSet rs1;
//		try {
//			if (rs.next()) {
//				System.out.println(rs.getInt("ID") + " " + rs.getString("NAME") + " " + rs.getInt("PARENT_ID"));
//				this.setId(rs.getInt("ID"));
//				// System.out.println("id = " + this.getId());
//				rs1 = DB.executeQuery("SELECT NAME FROM CATEGORY WHERE ID = '#'",
//						Integer.toString(rs.getInt("PARENT_ID")));
//				if (rs1.next())
//					this.parentName = rs1.getString("NAME");
//				else {
//					this.parentName = null;
//				}
//				this.adminId = rs.getString("ADMIN_ID");
//				rs1.close();
//			}
//			rs1 = DB.executeQuery("SELECT NAME FROM CATEGORY WHERE PARENT_ID = #", this.getId().toString());
//			while (rs1.next()) {
//				this.children.add(new Category(rs1.getString("NAME")));
//			}
//			rs.close();
//			rs1.close();
//		} catch (SQLException ex) {
//			Logger.getLogger(Category.class.getName()).log(Level.SEVERE, null, ex);
//		}
//	}

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

	public Integer getParentId() {
		return parentId;
	}

	public void setParentId(Integer parentId) {
		this.parentId = parentId;
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
				Category mainCat = new Category(rsMainCat.getInt("ID"));
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
				list.add(new Category(rsMainCat.getInt("ID")));
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
		Integer parentId = category.getParentId();
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

	public static void getAllChildren(Category category, List<String> ids) {

		if (category.children.size() != 0) {
			for (Category child : category.children) {
				getAllChildren(child, ids);
				ids.add(child.getId().toString());
			}

		}

	}

	public static void deleteCategory( Integer id) {
		String sql = "DELETE FROM CATEGORY WHERE ID IN(#) ";
		List<String>  idList = new ArrayList<String>();
		String  ids = "";
		getAllChildren(new Category(id),idList);
		idList.add(id.toString());
		System.out.println("list size = "+idList.size());
		int len = idList.size(),i=0;
		for(String id1 : idList) {
			ids += id1 ;
			if(i <= len-2)
				ids+= " , ";
			i++;
		}
		sql = "DELETE FROM CATEGORY WHERE ID IN (#)";
		DB.execute(sql,ids);

	}

	public static void updateCategory(Category category) {
		String sql = "UPDATE CATEGORY SET NAME = '#' WHERE  ID = #";
		DB.execute(sql, category.getName(), category.getId().toString());
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


