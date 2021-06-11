package com.course.bucket.files;




import java.sql.ResultSet;
import java.sql.SQLException;

import com.course.bucket.database.DB;


public enum FileType {
    PICTURE("Picture"),
    VIDEO("Video"),
    PDF("PDF"),
    ARTICLE("Article"),
    LINK("Link"),
    FONT_AWESOME_ICON("FontAwesomeIcon"),
    MATERIAL_ICON("MaterialIcon"),
    SVG("SVG"),
    MESSAGE("Message"),
    ;
    
    Integer id;
    String typeName;
    String adminId;

    private FileType(String typeName) {
        this.typeName = typeName;
        ResultSet rs = DB.executeQuery("SELECT * FROM FILE_TYPE WHERE TYPE = '#'", typeName);
        try {
            if (rs.next()) {
                id = rs.getInt("ID");
                adminId = rs.getString("ADMIN_ID");
            } else {
                System.err.println("no file data found");
            }
            rs.close();
        } catch (SQLException ex) {
        	System.err.println("sql exception in file type");
        }
    }
    
    public static FileType valueOf(Integer id) {
        for(FileType v : values())
            if(v.getId() ==  id) return v;
        throw new IllegalArgumentException();
    }

    public Integer getId() {
        return id;
    }

    public String getTypeName() {
        return typeName;
    }

    public String getAdminId() {
        return adminId;
    }
    
 
}
