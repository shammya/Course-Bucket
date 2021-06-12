package com.course.bucket.language;



import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.course.bucket.database.DB;

public class Language {

    Integer id;
    String name;
    String adminId;

    public Language(Integer id) {
        this.id = id;
        if (DB.valueExist("LANGUAGE", "ID", id.toString())) {
            ResultSet rs = DB.executeQuery("SELECT * FROM LANGUAGE WHERE ID = #", id.toString());
            try {
                rs.next();
                name = rs.getString("NAME");
                adminId = rs.getString("ADMIN_ID");
                rs.close();
            } catch (SQLException ex) {
                Logger.getLogger(Language.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    public Language(Integer id, String name, String adminId) {
        this.id = id;
        this.name = name;
        this.adminId = adminId;
    }

    public Language(String name) {
        this.name = name;
        ResultSet rs = DB.executeQuery("SELECT * FROM LANGUAGE WHERE NAME = '#'", name);
        try {
            if (!rs.next()) {
                rs.close();
                return;
            };
            id = rs.getInt("ID");
            adminId = rs.getString("ADMIN_ID");
            rs.close();
        } catch (SQLException ex) {
            Logger.getLogger(Language.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public static ArrayList<Language> getList() {
        ArrayList<Language> list = new ArrayList<>();
        ResultSet rs = DB.executeQuery("SELECT * FROM LANGUAGE ORDER BY NAME ");
        try {
            while (rs.next()) {
                list.add(new Language(rs.getInt("ID"), rs.getString("NAME"), rs.getString("ADMIN_ID")));
            }
            rs.close();
        } catch (SQLException ex) {
            Logger.getLogger(Language.class.getName()).log(Level.SEVERE, null, ex);
        }
        return list;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getAdminId() {
        return adminId;
    }

    public static void createNewLanguage(String text,String admin) {
        String sql = "INSERT INTO LANGUAGE (ID,NAME,ADMIN_ID) VALUES(#,'#','#')";
        boolean x = DB.execute(sql, DB.generateId("LANGUAGE").toString(), text, admin);
    }

    public static void changeLanguageName(Language language) {
//        ResultSet rs = DB.executeQuery("SELECT ID FROM LANGUAGE WHERE NAME = '" + oldName + "'");
//        try {
//            rs.next();
//            if (oldName != newName) {
                String sql = "UPDATE LANGUAGE SET NAME = '#' WHERE ID = #";
                boolean x = DB.execute(sql, language.getName(),language.getId().toString());
//            }
//            rs.close();
//        } catch (SQLException ex) {
//            Logger.getLogger(Language.class.getName()).log(Level.SEVERE, null, ex);
//        }

    }

    public static void deleteLanguage(Integer id) {
//        ResultSet rs = DB.executeQuery("SELECT ID FROM LANGUAGE WHERE NAME = '#'", selected);
//        try {
//            rs.next();
//            String id = rs.getString("ID");
            DB.execute("UPDATE PERSON  SET LANGUAGE_ID = NULL WHERE LANGUAGE_ID = # ", id.toString());
            DB.execute("DELETE FROM LANGUAGE WHERE ID = '#' ", id.toString());
//            rs.close();
//        } catch (SQLException ex) {
//            Logger.getLogger(Language.class.getName()).log(Level.SEVERE, null, ex);
//        }
    }
}
