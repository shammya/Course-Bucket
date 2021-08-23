package com.course.bucket.person.others;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.course.bucket.database.DB;
import com.course.bucket.files.Files;
import com.course.bucket.tools.ToolKit;

public class Slider {

	private Integer id;
	private String adminId;
	private Integer serial;
	private Files file;
	
	
	
	public Slider(Integer id, String adminId, Integer serial, Files file) {
		super();
		this.id = id;
		this.adminId = adminId;
		this.serial = serial;
		this.file = file;
	}
	
	public Slider(Integer id) {
		ResultSet rs = DB.executeQuery("SELECT * FROM SLIDER WHERE ID = #", id.toString());
		try {
			if(rs.next()) {
				this.id = rs.getInt("ID");
				this.adminId = rs.getString("admin_id");
				this.serial = rs.getInt("serial");
				this.file = new Files(rs.getInt("files_id"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();			
		}
		
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getAdminId() {
		return adminId;
	}

	public void setAdminId(String adminId) {
		this.adminId = adminId;
	}

	public Integer getSerial() {
		return serial;
	}

	public void setSerial(Integer serial) {
		this.serial = serial;
	}

	public Files getFile() {
		return file;
	}

	public void setFile(Files file) {
		this.file = file;
	}

	public static ArrayList<Slider> getSliderImages(){
		ArrayList<Slider> list = new ArrayList();
		ResultSet rs = DB.executeQuery("select id from slider order by serial asc");
		try {
			while(rs.next()) {
				list.add(new Slider(rs.getInt("id")));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	
	public static void updateSerial(ArrayList<Slider> list) {
		for(Slider slider : list) {
			DB.execute("UPDATE SLIDER SET SERIAL = # WHERE ID = #", slider.getSerial().toString(), slider.getId().toString());
		}
	}
	
	public static void deleteSlider(Integer id) {
		Integer fileId = 0;
		Integer serial = 1;
		Integer maxSerial = 1;
		ResultSet maxSerialResultSet = DB.executeQuery("SELECT nvl(MAX(SERIAL), 0) max FROM SLIDER");
		ResultSet currentDataRS = DB.executeQuery("SELECT * FROM SLIDER WHERE ID = #", id.toString());
		try {
			if(maxSerialResultSet.next() && currentDataRS.next()) {
				maxSerial = maxSerialResultSet.getInt("max");
				fileId = currentDataRS.getInt("files_id");
				serial = currentDataRS.getInt("serial");
			}
			while(serial < maxSerial) {
				DB.execute("UPDATE SLIDER SET SERIAL = # WHERE SERIAL = #", serial.toString(), String.valueOf(serial+1));
				serial++;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		DB.execute("DELETE FROM SLIDER WHERE ID = #", id.toString());
		DB.execute("DELETE FROM FILES WHERE ID = #", fileId.toString());
	}
	
	public static void createNewSlider(Slider slider) {
		Integer fileId = Files.createNewFile(slider.getFile());
		Integer id = DB.generateId("SLIDER");
		if(slider.getSerial() == null) {
			ResultSet rs = DB.executeQuery("SELECT nvl(MAX(SERIAL), 0) max FROM SLIDER");
			try {
				if(rs.next()) {
					slider.setSerial(rs.getInt("max")+1);
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		DB.execute("INSERT INTO SLIDER(ID, SERIAL, FILES_ID, ADMIN_ID) VALUES(#, #, #, '#')", 
				id.toString(), slider.getSerial().toString(), fileId.toString(), ToolKit.getCurrentUserName());
	}
	
}
