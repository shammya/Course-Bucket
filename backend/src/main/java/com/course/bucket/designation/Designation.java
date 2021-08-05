package com.course.bucket.designation;


import java.sql.*;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.course.bucket.database.DB;


public class Designation {

    Integer id;
    String type;
    String adminId;

    public Designation(Integer id) {
        this.id = id;
        ResultSet rs = DB.executeQuery("SELECT * FROM DESIGNATION WHERE ID = #", id.toString());
        try {
            if (!rs.next()) {
                return;
            }
            type = rs.getString("TYPE");
            adminId = rs.getString("ADMIN_ID");
            rs.close();
        } catch (SQLException ex) {
            Logger.getLogger(Designation.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public Designation(String type) {
        this.type = type;
        ResultSet rs = DB.executeQuery("SELECT * FROM DESIGNATION WHERE TYPE = '#'", type);
        try {
            if (!rs.next()) {
                return;
            }
            id = rs.getInt("ID");
            adminId = rs.getString("ADMIN_ID");
            rs.close();
        } catch (SQLException ex) {
            Logger.getLogger(Designation.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public Designation(Integer id, String type, String adminId) {
        this.id = id;
        this.type = type;
        this.adminId = adminId;
    }
    
    public static Designation getByUsername(String username) {
        int id = DB.getInt("TEACHER", "ID", username, "DESIGNATION_ID");
        if(id!=0) {
        	return new Designation(id);
        }
        return null;
    }

    public static ArrayList<Designation> getList() {
        ArrayList<Designation> list = new ArrayList<>();
        ResultSet rs = DB.executeQuery("SELECT * FROM DESIGNATION ORDER BY TYPE ");
        try {
            while (rs.next()) {
                list.add(new Designation(rs.getInt("ID"), rs.getString("TYPE"), rs.getString("ADMIN_ID")));
            }
            rs.close();
        } catch (SQLException ex) {
            Logger.getLogger(Designation.class.getName()).log(Level.SEVERE, null, ex);
        }
        return list;
    }

    public Integer getId() {
        return id;
    }

    public String getType() {
        return type;
    }

    public String getAdminId() {
        return adminId;
    }

    public static void createNewDesignation(String text,String admin) {
        String sql = "INSERT INTO DESIGNATION (ID,TYPE,ADMIN_ID) VALUES(#,'#','#')";
        boolean x = DB.execute(sql, DB.generateId("DESIGNATION").toString(), text,admin);
    }

    public static void changeDesignationName(Designation designation) {
//        ResultSet rs = DB.executeQuery("SELECT ID FROM DESIGNATION WHERE TYPE = '" + oldName + "'");
//        try {
//            rs.next();
//            if (oldName != newName) {
//                String sql = "UPDATE DESIGNATION SET TYPE = '#' WHERE ID = #";
//                boolean x = DB.execute(sql, newName, rs.getString("ID"));
//            }
//            rs.close();
//        } catch (SQLException ex) {
//            Logger.getLogger(Designation.class.getName()).log(Level.SEVERE, null, ex);
//        }
    	DB.executeQuery("UPDATE DESIGNATION SET TYPE = '#' WHERE ID = #",designation.getType(),designation.getId().toString());
    }

    public static void deleteDesignation(Integer id) {
//        ResultSet rs = DB.executeQuery("SELECT ID FROM DESIGNATION WHERE TYPE = '#'", selected);
//        try {
//            rs.next();
//            String id = rs.getString("ID");
            DB.execute("UPDATE TEACHER  SET DESIGNATION_ID = NULL WHERE DESIGNATION_ID = # ", id.toString());
            DB.execute("DELETE FROM DESIGNATION WHERE ID = '#' ", id.toString());
//            rs.close();
//        } catch (SQLException ex) {
//            Logger.getLogger(Designation.class.getName()).log(Level.SEVERE, null, ex);
//        }

    }

}
