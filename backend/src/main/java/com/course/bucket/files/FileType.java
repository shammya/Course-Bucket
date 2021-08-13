package com.course.bucket.files;




import java.io.Serializable;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.course.bucket.database.DB;


public enum FileType  implements Serializable {
	ICON("ICON"),
	VIDEO("VIDEO"),
    PICTURE("PICTURE"),
    PDF("PDF"),
    ARTICLE("ARTICLE"),
    LINK("LINK"),
    
    MATERIAL_ICON("MaterialIcon"),
    SVG("SVG"),
    MESSAGE("Message"),
    ;
    String name;
    Integer id;
    private void generateId() {
    	ResultSet rs = DB.executeQuery("SELECT ID FROM FILE_TYPE WHERE UPPER(TYPE)='#'", name);
        try {
			if(rs.next()) {
				this.id = rs.getInt("ID");
				System.out.println(this.id);
			}
	        rs.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    }
    private FileType(String name) {
        this.name = name;
        generateId();
    }
    
    public static FileType createFromId(Integer id) {
    	FileType type = null;
        ResultSet rs = DB.executeQuery("SELECT TYPE FROM FILE_TYPE WHERE ID = #", id.toString());
        try {
			if(rs.next()) {
				System.out.println(rs.getString("TYPE").toUpperCase());
				type = FileType.valueOf(rs.getString("TYPE").toUpperCase());
			}
	        rs.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        return type;
    }

    public String getName() {
        return name;
    }


	public void setName(String name) {
		this.name = name;
	}


	public Integer getId() {
		if(id==null) {
			generateId();
		}
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}
	
	public String toString() {
		return "id: " + id + ", name: " + name;
	}
 
}
