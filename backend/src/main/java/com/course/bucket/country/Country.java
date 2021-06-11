package com.course.bucket.country;



import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.course.bucket.database.DB;

public class Country {

    Integer id;
    String name;
    String adminId;

    public Country(Integer id) {
        this.id = id;
        if (DB.valueExist("COUNTRY", "ID", id.toString())) {
            ResultSet rs = DB.executeQuery("SELECT * FROM COUNTRY WHERE ID = #", id.toString());
            try {
                rs.next();
                name = rs.getString("NAME");
                adminId = rs.getString("ADMIN_ID");
                rs.close();
            } catch (SQLException ex) {
                Logger.getLogger(Country.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    public Country(Integer id, String name, String adminId) {
        this.id = id;
        this.name = name;
        this.adminId = adminId;
    }

    public Country(String name) {
        this.name = name;
        ResultSet rs = DB.executeQuery("SELECT * FROM COUNTRY WHERE NAME = '#'", name);
        try {
            if (!rs.next()) {
                rs.close();
                return;
            };
            id = rs.getInt("ID");
            adminId = rs.getString("ADMIN_ID");
            rs.close();
        } catch (SQLException ex) {
            Logger.getLogger(Country.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public static ArrayList<Country> getList() {
        ArrayList<Country> list = new ArrayList<>();
        ResultSet rs = DB.executeQuery("SELECT * FROM COUNTRY ORDER BY NAME ");
        try {
            while (rs.next()) {
                list.add(new Country(rs.getInt("ID"), rs.getString("NAME"), rs.getString("ADMIN_ID")));
            }
            rs.close();
        } catch (SQLException ex) {
            Logger.getLogger(Country.class.getName()).log(Level.SEVERE, null, ex);
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

    public static void createNewCountry(String text,String admin) {
        String sql = "INSERT INTO COUNTRY (ID,NAME,ADMIN_ID) VALUES(#,'#','#')";
        boolean x = DB.execute(sql, DB.generateId("COUNTRY").toString(), text, admin);
    }

    public static void changeCountryName(Country country) {
//        ResultSet rs = DB.executeQuery("SELECT ID FROM COUNTRY WHERE NAME = '" + oldName + "'");
//        try {
//            rs.next();
//            if (oldName != newName) {
//                String sql = "UPDATE COUNTRY SET NAME = '#' WHERE ID = #";
//                boolean x = DB.execute(sql, newName, rs.getString("ID"));
//            }
//            rs.close();
//        } catch (SQLException ex) {
//            Logger.getLogger(Country.class.getName()).log(Level.SEVERE, null, ex);
//        }
    	DB.execute("update country set name = '#' where id = # ",country.getName() ,country.getId().toString());
    }

    public static void deleteCountry(Integer id) {
        //ResultSet rs = DB.executeQuery("SELECT ID FROM COUNTRY WHERE NAME = '#'", selected);
        //try {
           // rs.next();
            //String id = rs.getString("ID");
            DB.execute("UPDATE PERSON  SET COUNTRY_ID = NULL WHERE COUNTRY_ID = # ", id.toString());
            DB.execute("DELETE FROM COUNTRY WHERE ID = '#' ", id.toString());
            //rs.close();
        //} catch (SQLException ex) {
            //System.out.println("error in delete country");
        //}
    }
}
