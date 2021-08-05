package com.course.bucket.edustatus;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.course.bucket.database.DB;
import com.course.bucket.designation.Designation;


public class EduStatus {

    Integer id;
    String type;
    String adminId;

    public EduStatus(Integer id) {
        this.id = id;
        ResultSet rs = DB.executeQuery("SELECT * FROM EDUCATIONAL_STATUS WHERE ID = #", id.toString());
        try {
            if (!rs.next()) {
                return;
            }
            type = rs.getString("TYPE");
            adminId = rs.getString("ADMIN_ID");
            rs.close();
        } catch (SQLException ex) {
            Logger.getLogger(EduStatus.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public EduStatus(String type) {
        this.type = type;
        ResultSet rs = DB.executeQuery("SELECT * FROM EDUCATIONAL_STATUS WHERE TYPE = '#'", type);
        try {
            if (!rs.next()) {
                return;
            }
            id = rs.getInt("ID");
            adminId = rs.getString("ADMIN_ID");
            rs.close();
        } catch (SQLException ex) {
            Logger.getLogger(EduStatus.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public EduStatus(Integer id, String type, String adminId) {
        this.id = id;
        this.type = type;
        this.adminId = adminId;
    }

    public static ArrayList<EduStatus> getList() {
        ArrayList<EduStatus> list = new ArrayList<>();
        ResultSet rs = DB.executeQuery("SELECT * FROM EDUCATIONAL_STATUS ORDER BY TYPE");
        try {
            while (rs.next()) {
                list.add(new EduStatus(rs.getInt("ID"), rs.getString("TYPE"), rs.getString("ADMIN_ID")));
            }
            rs.close();
        } catch (SQLException ex) {
            Logger.getLogger(EduStatus.class.getName()).log(Level.SEVERE, null, ex);
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

    public static void createNewEduStatus(String text,String admin) {
        String sql = "INSERT INTO EDUCATIONAL_STATUS (ID,TYPE,ADMIN_ID) VALUES(#,'#','#')";
        boolean x = DB.execute(sql, DB.generateId("EDUCATIONAL_STATUS").toString(), text, admin);
    }

    public static void changeEduStatusName(EduStatus eduStatus) {
//        ResultSet rs = DB.executeQuery("SELECT ID FROM EDUCATIONAL_STATUS WHERE TYPE = '" + oldName + "'");
//        try {
//            rs.next();
//            if (oldName != newName) {
                String sql = "UPDATE EDUCATIONAL_STATUS SET TYPE = '#' WHERE ID = #";
                boolean x = DB.execute(sql,eduStatus.getType(),eduStatus.getId().toString());
//            }
//            rs.close();
//        } catch (SQLException ex) {
//            Logger.getLogger(EduStatus.class.getName()).log(Level.SEVERE, null, ex);
//        }
    }

    public static void deleteEduStatus(Integer id) {
//        ResultSet rs = DB.executeQuery("SELECT ID FROM EDUCATIONAL_STATUS WHERE TYPE = '#'", selected);
//        try {
//            rs.next();
//            String id = rs.getString("ID");
            DB.execute("UPDATE STUDENT  SET EDU_STATUS_ID = NULL WHERE EDU_STATUS_ID = # ", id.toString());
            DB.execute("DELETE FROM EDUCATIONAL_STATUS WHERE ID = '#' ", id.toString());
//            rs.close();
//        } catch (SQLException ex) {
//            Logger.getLogger(EduStatus.class.getName()).log(Level.SEVERE, null, ex);
//        }

    }
    

    
    public static EduStatus getByUsername(String username) {
        int id = DB.getInt("STUDENT", "ID", username, "EDU_STATUS_ID");
        if(id!=0) {
        	return new EduStatus(id);
        }
        return null;
    }
}
