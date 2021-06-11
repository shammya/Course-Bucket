package com.course.bucket.courseextra;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.course.bucket.course.Course;
import com.course.bucket.database.DB;
import com.course.bucket.files.Files;

public class Property {

    Integer id;
    Files icon;
    String text;
    Integer position;

    public Property(Integer id) {
        this.id = id;
        ResultSet rs = DB.executeQuery("SELECT * FROM COURSE_PROPERTIES WHERE ID = #", id.toString());
        try {
            if (rs.next()) {
                icon = new Files(rs.getInt("ICON_ID"));
                text = rs.getString("TEXT");
                position = rs.getInt("POSITION");
            }
            rs.close();
        } catch (SQLException ex) {
            System.err.println("Error inside property");
        }
    }

    public Property(Files icon, Course course, String text, Integer position) {
        this.id = DB.generateId("COURSE_PROPERTIES");
        this.icon = icon;
        this.text = text;
        DB.execute("INSERT INTO COURSE_PROPERTIES(ID, ICON_ID, COURSE_ID, TEXT, POSITION) VALUES(#, #, #, '#', #)", id.toString(), icon.getId().toString(), course.getId().toString(), text, position.toString());
    }

    public static ArrayList<Property> getProperties(Course course) {
        ArrayList<Property> properties = new ArrayList<Property>();
        ResultSet rs = DB.executeQuery("SELECT ID FROM COURSE_PROPERTIES WHERE COURSE_ID = # ORDER BY POSITION", course.getId().toString());
        try {
            while (rs.next()) {
                properties.add(new Property(rs.getInt("ID")));
            }
            rs.close();
        } catch (SQLException ex) {
        	System.err.println("Error inside getProperties`	");
        }
        return properties;
    }

    public Integer getId() {
        return id;
    }

    public Files getIcon() {
        return icon;
    }

    public String getText() {
        return text;
    }

    public Integer getPosition() {
        return position;
    }

    public void setPosition(Integer position) {
        this.position = position;
        DB.execute("UPDATE COURSE_PROPERTIES SET POSITION = # WHERE ID = #", position.toString(), id.toString());
    }

    public void setIcon(Files icon) {
        this.icon = icon;
        DB.execute("UPDATE COURSE_PROPERTIES SET ICON_ID = # WHERE ID = #", icon.getId().toString(), id.toString());
    }

    public void setText(String text) {
        this.text = text;
        DB.execute("UPDATE COURSE_PROPERTIES SET TEXT = '#' WHERE ID = #", text, id.toString());
    }

    public void delete(){
        DB.execute("DELETE COURSE_PROPERTIES WHERE ID = #", id.toString());
        icon.delete();
    }
}
