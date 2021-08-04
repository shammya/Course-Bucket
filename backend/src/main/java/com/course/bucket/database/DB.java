package com.course.bucket.database;


import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;


public class DB {

    private static Connection con;
    private static ResultSet rs;
    private static Statement st;

    public static void startConnection() {
        try {
            Class.forName("oracle.jdbc.OracleDriver").newInstance();
            if(System.getProperty("user.name").equals("ASUS")){
                System.out.println("USER : MEHEDI");
                con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:globaldb", "coursebucket", "cb");
            }
            else{
                System.out.println("USER : SHAMMYA");
                con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:orcl", "coursebucket", "cb");
            }
            st = con.createStatement();
            st.setQueryTimeout(3);
            System.out.println("Connection established ...");
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(DB.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(DB.class.getName()).log(Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            Logger.getLogger(DB.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            Logger.getLogger(DB.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public static void closeConnection() {
        try {
            if (rs != null) {
                rs.close();
            }
            if (st != null) {
                st.close();
            }
            if (con != null) {
                con.close();
            }
        } catch (SQLException ex) {
            Logger.getLogger(DB.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public static ResultSet executeQuery(String sql, String... arg) { // Replace # mark with value
        
        for (String value : arg) {
            if(!value.contains("TO_DATE")) value = value.replace("'", "''");
            value = value.replace("#", "^^^");
            value = value.replace("$", "&&&&&");
            sql = sql.replaceFirst("#", value);
        }
        sql = sql.replace("^^^", "#");
        sql = sql.replace("&&&&&", "$");
        
        try {
            System.err.println(sql);System.out.println("");
            st = con.createStatement();
            rs = st.executeQuery(sql);
        } catch (SQLException ex) {
//            Logger.getLogger(DB.class.getName()).log(Level.SEVERE, null, ex);
            startConnection();
        }
        return rs;
    }
    
    public static boolean execute(String sql, String ... arg) { // Replace # mark with value
        //System.out.println(sql);
        for (String value : arg) {
        	//System.out.println("value : "+ value);
        	if(value==null)
        		value = "NULL";
            if(!value.contains("TO_DATE")) value = value.replace("'", "''");

            value = value.replace("#", "^^^");
            value = value.replace("$", "&&&&&");
            sql = sql.replaceFirst("#", value);
        }
        sql = sql.replace("^^^", "#");
        sql = sql.replace("&&&&&", "$");
        
        try {
           System.err.println("\t "+sql);System.out.println("");
            return st.execute(sql);
        } catch (SQLException ex) {
//            Logger.getLogger(DB.class.getName()).log(Level.SEVERE, null, ex);
            startConnection();
        }
        return false;
    }
    
    public static Integer generateId(String tableName, String idName){
        ResultSet rs = executeQuery("SELECT NVL(MAX(#), 0)+1 # FROM #", idName, idName, tableName);
        try {
            rs.next();
            Integer IN = new Integer(rs.getInt(idName));
            rs.close();
            return IN;
        } catch (SQLException ex) {
//            Logger.getLogger(DB.class.getName()).log(Level.SEVERE, null, ex);
        }
        return 0;
    }
    
    public static Integer generateId(String tableName){
        return generateId(tableName, "ID");
    }

    public static boolean valueExist(String table, String column, String val) {
        try {
            String sql = "SELECT * FROM # WHERE # = '#' ";
            ResultSet rs = executeQuery(sql, table, column, val);
            boolean f = rs.next();
            rs.close();
            return f;
        } catch (SQLException ex) {
//            Logger.getLogger(DB.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
    public static boolean valueExistnew(String table, String column, String val) {
        try {
            String sql = "SELECT * FROM # WHERE # = # ";
            ResultSet rs = executeQuery(sql, table, column, val);
            boolean f = rs.next();
            rs.close();
            return f;
        } catch (SQLException ex) {
//            Logger.getLogger(DB.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
    
    public static Integer getIdFromDb(String table,String column,String value) {
    	String sql = "SELECT ID FROM "+table.toUpperCase()+" WHERE "+column.toUpperCase()+" = '"+value+"'";
    	ResultSet rs = DB.executeQuery(sql);

    	try {
			if(rs.next()) {
				//System.out.println("column name : "+column.toUpperCase());
				return rs.getInt("ID");
			}
			rs.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	return null;
    }
    public static String getString(String tableName, String idColumnName, String id, String dataColumnName) {
    	String sql = "SELECT # FROM # WHERE #='#'";
    	ResultSet rs = DB.executeQuery(sql,dataColumnName,tableName,idColumnName, id);

    	try {
			if(rs.next()) {
				//System.out.println("column name : "+column.toUpperCase());
				return rs.getString(dataColumnName);
			}
			rs.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	return "";
    }
    public static Date getDate(String tableName, String idColumnName, String id, String dataColumnName) {
    	String sql = "SELECT # FROM # WHERE #='#'";
    	ResultSet rs = DB.executeQuery(sql,dataColumnName,tableName,idColumnName, id);

    	try {
			if(rs.next()) {
				//System.out.println("column name : "+column.toUpperCase());
				return rs.getDate(dataColumnName);
			}
			rs.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	return null;
    }
    public static Integer getInt(String tableName, String idColumnName, String id, String dataColumnName) {
    	String sql = "SELECT # FROM # WHERE #='#'";
    	ResultSet rs = DB.executeQuery(sql,dataColumnName,tableName,idColumnName, id);

    	try {
			if(rs.next()) {
				//System.out.println("column name : "+column.toUpperCase());
				return rs.getInt(dataColumnName);
			}
			rs.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	return 0;
    }
    public static void update(String tableName, String idColumnName, String id, String dataColumnName, String data, boolean isDate) {
    	String sql = "UPDATE # SET # = " + (isDate ? "#" : "'#'") + " WHERE # = '#'";
    	DB.execute(sql,tableName,dataColumnName,data,idColumnName, id);
    }
    public static void update(String tableName, String idColumnName, String id, String dataColumnName, String data) {
    	update(tableName, idColumnName, id, dataColumnName, data, false);
    }
}
