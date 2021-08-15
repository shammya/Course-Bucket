package com.course.bucket.notification;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;

import com.course.bucket.database.DB;
import com.course.bucket.tools.ToolKit;

public class Notification {

	private String userId;
	private String fromId;
	private Date time;
	private String seen;
	private Integer courseId;
	private String type;

	public Notification(String userId, String fromId, Date time, String seen, Integer courseId, String type) {
		super();
		this.userId = userId;
		this.fromId = fromId;
		this.time = time;
		this.seen = seen;
		this.courseId = courseId;
		this.type = type;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getFromId() {
		return fromId;
	}

	public void setFromId(String fromId) {
		this.fromId = fromId;
	}

	public Date getTime() {
		return time;
	}

	public void setTime(Date time) {
		this.time = time;
	}

	public String getSeen() {
		return seen;
	}

	public void setSeen(String seen) {
		this.seen = seen;
	}

	public Integer getCourseId() {
		return courseId;
	}

	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public static ArrayList<Notification> getNotification(String userName) {
		ArrayList<Notification> notifications = new ArrayList<>();

		String sql = "select * from notification where user_id = '#'";
		ResultSet rs = DB.executeQuery(sql, userName);

		try {
			while (rs.next()) {
				notifications.add(new Notification(rs.getString("user_id"), rs.getString("from_id"),
						new Date(rs.getTimestamp("time").getTime()), rs.getString("seen"), rs.getInt("course_id"),
						rs.getString("type")));
			}
			return notifications;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

}
