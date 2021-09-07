package com.course.bucket.person;

import java.sql.ResultSet;

import java.sql.SQLException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;

import com.course.bucket.course.additionals.CourseApproval;
import com.course.bucket.course.additionals.CoursePopularity;
import com.course.bucket.course.additionals.IncomePerCourse;
import com.course.bucket.course.additionals.PopularCategory;
import com.course.bucket.database.DB;
import com.course.bucket.person.others.CourseOverview;
import com.course.bucket.person.others.NewUser;
import com.course.bucket.person.others.OverviewContent;
import com.course.bucket.person.others.ShowCard;
import com.course.bucket.person.others.Slider;
import com.course.bucket.person.others.StudentInfoAdmin;
import com.course.bucket.person.others.TeacherInfoAdmin;
import com.course.bucket.tools.ToolKit;


public class Admin extends Person{

    
    public Admin(String username) {
        super(username);
        
    }
    
    public static boolean exist(String username) {
        return DB.valueExist("ADMIN", "ID", username);
    }
    
    public static HashMap<Date, NewUser> getNewUserAdmin() { 
		HashMap<Date, NewUser> newUsers = new HashMap<>();
		Date date = null;
		String sql = "select trunc(p.signup_date) signup_date,count(*) student_count\r\n"
				+ "from person p ,student s\r\n" + "where p.id = s.id\r\n" + "group by trunc(p.signup_date)\r\n"
				+ "order by trunc(p.signup_date) asc";
		ResultSet rs = DB.executeQuery(sql);
		try {
			while (rs.next()) {
				date = rs.getTimestamp("signup_date");
				NewUser newUser = new NewUser(date, rs.getInt("student_count"), 0);
				newUsers.put(date, newUser);
			}
			rs.close();

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		sql = "select trunc(p.signup_date) signup_date,count(*) teacher_count\r\n" + "from person p ,teacher t\r\n"
				+ "where p.id = t.id\r\n" + "group by trunc(p.signup_date)\r\n" + "order by trunc(p.signup_date) asc";
		rs = DB.executeQuery(sql);
		try {
			while (rs.next()) {
				date = rs.getTimestamp("signup_date");
				if (newUsers.containsKey(date)) {
					NewUser newUser = new NewUser(date, newUsers.get(date).getStudentCount(),
							rs.getInt("teacher_count"));
					newUsers.remove(date);
					newUsers.put(date, newUser);
				} else {
					NewUser newUser = new NewUser(date, 0, rs.getInt("teacher_count"));
					newUsers.put(date, newUser);
				}
			}
			rs.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return newUsers;
	}
    
    public static ArrayList<NewUser> getNewUserCount(){
    	ArrayList<NewUser> array = new ArrayList();
    	ResultSet rs = DB.executeQuery(""
    			+ "\r\n"
    			+ "select signup_date \"date\",\r\n"
    			+ "    nvl((\r\n"
    			+ "       select count(*)\r\n"
    			+ "        from person p, student s\r\n"
    			+ "        where p.id = s.id \r\n"
    			+ "        group by p.signup_date\r\n"
    			+ "        having p.signup_date = pp.signup_date --TO_DATE('23-NOV-20','dd-MON-yy') \r\n"
    			+ "    ),0) \"student count\", \r\n"
    			+ "    nvl((\r\n"
    			+ "        select count(*)\r\n"
    			+ "        from person pe, teacher t\r\n"
    			+ "        where pe.id = t.id \r\n"
    			+ "        group by pe.signup_date\r\n"
    			+ "        having pe.signup_date = pp.signup_date --TO_DATE('23-NOV-20','dd-MON-yy') \r\n"
    			+ "    ),0) \"teacher count\"\r\n"
    			+ "from person pp\r\n"
    			+ "group by signup_date\r\n"
    			+ "order by signup_date asc");
    	try {
			while(rs.next()) {
				array.add(new NewUser(rs.getDate("date"), rs.getInt("student count"), rs.getInt("teacher count")));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	return array;
    }
    
    
    public static ShowCard showCardAdmin() {
		ShowCard showCard;
		Integer totalVisitor = 0;
		Integer newCourse = 0;
		Integer totalCourse = 0;
		Integer newUser = 0;
		Integer totalUser = 0;
		Double todayIncome = 0.0;
		Double totalIncome = 0.0;

		String sql = "select count(*) as new_course\r\n" + "from course\r\n"
				+ "where publish_date between current_date-3 and current_date  ";
		ResultSet rs = DB.executeQuery(sql);
		try {
			rs.next();
			newCourse = rs.getInt("new_course");

			sql = "select count(*) as total_course\r\n" + "from course";
			rs = DB.executeQuery(sql);
			rs.next();
			totalCourse = rs.getInt("total_course");

			sql = "select count(*) as new_user\r\n" + "from person\r\n"
					+ "where signup_date between current_date - 3 and current_date";
			rs = DB.executeQuery(sql);
			rs.next();
			newUser = rs.getInt("new_user");
			sql = "select count(*) as total_user\r\n" + "from person";
			rs = DB.executeQuery(sql);
			rs.next();
			totalUser = rs.getInt("total_user");
			sql = "select nvl(sum(cost),0.0) as today_cost\r\n" + "from purchase_history\r\n"
					+ "where trunc(time) = trunc(current_date)";

			rs = DB.executeQuery(sql);
			rs.next();
			todayIncome = rs.getDouble("today_cost");
			sql = "select nvl(sum(cost),0.0) as total_cost\r\n" + "from purchase_history\r\n";
			rs = DB.executeQuery(sql);
			rs.next();
			totalIncome = rs.getDouble("total_cost");

			showCard = new ShowCard(totalVisitor, newCourse, totalCourse, newUser, totalUser, todayIncome, totalIncome);
			rs.close();
			return showCard;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;

	}
    
    public static CourseOverview getCourseOverview(Integer id) {

		CourseOverview courseOverview = null;
		String sql = "select  title , publish_date from course where id = #";
		ResultSet rs = DB.executeQuery(sql, id.toString());
		Date date;
		try {
			rs.next();
			ArrayList<OverviewContent> overviewContents = new ArrayList<>();
			Date startDate = rs.getDate("publish_date");
			Date endDate = new Date();
			LocalDate start = ToolKit.DateToLocalDate(startDate);
			LocalDate end = ToolKit.DateToLocalDate(endDate);
			end = end.plusDays(2);
			for (LocalDate ldate = start; ldate.isBefore(end); ldate = ldate.plusDays(1)) {
				date = ToolKit.localDateToDate(ldate);
				String dDate = ToolKit.JDateToDDate(date);
				String sql1 = "SELECT c.id,(\r\n"
						+ "SELECT nvl(count(*),0) FROM purchase_history ph WHERE trunc(time)=# AND c.id=ph.course_id) AS enr_std_count,(\r\n"
						+ "SELECT nvl(count(*),0) FROM review rv WHERE trunc(time)=# AND c.id=rv.course_id) AS review_count,(\r\n"
						+ "SELECT nvl(count(*),0) FROM rating rt WHERE trunc(time)=# AND value=1 AND c.id=rt.course_id) AS one,(\r\n"
						+ "SELECT nvl(count(*),0) FROM rating rt WHERE trunc(time)=# AND value=2 AND c.id=rt.course_id) AS two,(\r\n"
						+ "SELECT nvl(count(*),0) FROM rating rt WHERE trunc(time)=# AND value=3 AND c.id=rt.course_id) AS three,(\r\n"
						+ "SELECT nvl(count(*),0) FROM rating rt WHERE trunc(time)=# AND value=4 AND c.id=rt.course_id) AS four,(\r\n"
						+ "SELECT nvl(count(*),0) FROM rating rt WHERE trunc(time)=# AND value=5 AND c.id=rt.course_id) AS five FROM course c WHERE c.id= # ";
				ResultSet rs1 = DB.executeQuery(sql1, dDate, dDate, dDate, dDate, dDate, dDate, dDate, id.toString());
				rs1.next();
				overviewContents.add(new OverviewContent(date, rs1.getInt("enr_std_count"), rs1.getInt("review_count"),
						rs1.getInt("one"), rs1.getInt("two"), rs1.getInt("three"), rs1.getInt("four"),
						rs1.getInt("five")));

				rs1.close();
				courseOverview = new CourseOverview(rs.getString("title"), overviewContents);
			}

			rs.close();
			return courseOverview;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
    
    public static ArrayList<TeacherInfoAdmin> getTeacherInfoAdmin() {
		ArrayList<TeacherInfoAdmin> teacherInfoAdmins = new ArrayList<>();
		String sql = "SELECT\r\n"
				+ "	t.id,\r\n"
				+ "	( SELECT count( id ) FROM course WHERE teacher_id = t.id ) course_created,\r\n"
				+ "	( SELECT count( id ) FROM purchase_history WHERE course_id IN ( SELECT id FROM course WHERE teacher_id = t.id ) ) course_purchased,\r\n"
				+ "	(\r\n"
				+ "	SELECT\r\n"
				+ "		nvl( sum( cost ) * 0.9, 0 ) \r\n"
				+ "	FROM\r\n"
				+ "		purchase_history \r\n"
				+ "	WHERE\r\n"
				+ "		course_id IN ( SELECT id FROM course WHERE teacher_id = t.id ) \r\n"
				+ "	) total_income ,\r\n"
				+ "	( SELECT content FROM files f, person p WHERE p.id = t.id AND p.photo_id = f.id ) content \r\n"
				+ "FROM\r\n"
				+ "	teacher t";
		ResultSet rs = DB.executeQuery(sql);
		try {
			while (rs.next()) {
				teacherInfoAdmins.add(new TeacherInfoAdmin(rs.getString("id"), rs.getInt("course_created"),
						rs.getInt("course_purchased"), rs.getDouble("total_income"),rs.getString("content")));
			}
			return teacherInfoAdmins;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	public static ArrayList<StudentInfoAdmin> getStudentInfoAdmin() {
		ArrayList<StudentInfoAdmin> studentInfoAdmins = new ArrayList<>();
		String sql = "SELECT\r\n"
				+ "	s.id,\r\n"
				+ "	( SELECT count( id ) FROM purchase_history WHERE course_id IN ( SELECT id FROM course WHERE student_id = s.id ) ) course_owned,\r\n"
				+ "	(\r\n"
				+ "	SELECT\r\n"
				+ "		nvl( sum( cost ), 0.0 ) \r\n"
				+ "	FROM\r\n"
				+ "		purchase_history \r\n"
				+ "	WHERE\r\n"
				+ "		course_id IN ( SELECT id FROM course WHERE student_id = s.id ) \r\n"
				+ "	) money_spent,\r\n"
				+ "	( SELECT content FROM files f, person p WHERE p.id = s.id AND p.photo_id = f.id ) content \r\n"
				+ "FROM\r\n"
				+ "	student s";
		ResultSet rs = DB.executeQuery(sql);
		try {
			while (rs.next()) {
				studentInfoAdmins.add(new StudentInfoAdmin(rs.getString("id"), rs.getInt("course_owned"),
						rs.getDouble("money_spent"),rs.getString("content")));
			}
			return studentInfoAdmins;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	

	public static ArrayList<CoursePopularity> getCoursePopularityAdmin() {
		ArrayList<CoursePopularity> coursePopularities = new ArrayList<>();
		String sql = "select id, title, rating, rating_count, enr_std_count,review_count\n" + "from \n" + "(\n"
				+ "	select c.id as id, c.title as title, avg(rt.value) as rating, count(rt.student_id) as rating_count\n"
				+ "	from course c, rating rt\n" + "	where c.id = rt.course_id \n"
				+ "	group by c.id, c.title, c.teacher_id\n" + "	order by rating desc\n" + ") a,\n"
				+ "(	select course_id, count(ph.student_id) as enr_std_count\n" + "	from purchase_history ph\n"
				+ "	group by course_id\n" + ") b,\n" + "(\n"
				+ "	select course_id, count(rv.student_id) as review_count\n" + "	from review rv\n"
				+ "	group by course_id\n" + ") c\n" + "where a.id = b.course_id and a.id = c.course_id ";
		ResultSet rs = DB.executeQuery(sql);
		try {
			while (rs.next()) {
				coursePopularities.add(new CoursePopularity(rs.getString("title"), rs.getDouble("rating"),
						rs.getInt("rating_count"), rs.getInt("enr_std_count"), rs.getInt("review_count")));
			}
			rs.close();
			return coursePopularities;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	public static ArrayList<PopularCategory> getPopularCourseAdmin() {
		ArrayList<PopularCategory> popularCategories = new ArrayList<>();

		String sql = "select \n"
				+ "	a.parent_id id,\n"
				+ "	(\n"
				+ "	select \n"
				+ "		name \n"
				+ "	from \n"
				+ "		category\n"
				+ "	where \n"
				+ "		id = a.parent_id\n"
				+ "	) name ,\n"
				+ "	sum(a.review) review_count ,\n"
				+ "	sum(a.rating_count) rating_count ,\n"
				+ "	sum(a.enr_std_count) enr_std_count ,\n"
				+ "	sum(a.rating) rating\n"
				+ "from(\n"
				+ "	select \n"
				+ "		ct.name,ct.id,ct.parent_id,\n"
				+ "		(\n"
				+ "		select \n"
				+ "			nvl(count(r.course_id),0) \n"
				+ "		 from \n"
				+ "			review r ,course c\n"
				+ "		 where\n"
				+ "			c.id = r.course_id and c.category_id = ct.id\n"
				+ "		) review ,\n"
				+ "		(\n"
				+ "		select \n"
				+ "			nvl(count(ph.course_id),0) \n"
				+ "		 from \n"
				+ "			purchase_history ph ,course c\n"
				+ "		 where\n"
				+ "			c.id = ph.course_id and c.category_id = ct.id\n"
				+ "		) enr_std_count , \n"
				+ "		(\n"
				+ "		select \n"
				+ "			nvl(count(r.course_id),0) \n"
				+ "		 from \n"
				+ "			rating r ,course c\n"
				+ "		 where\n"
				+ "			c.id = r.course_id and c.category_id = ct.id\n"
				+ "		) rating_count ,\n"
				+ "		(\n"
				+ "		select \n"
				+ "			nvl(avg(r.value),0) \n"
				+ "		 from \n"
				+ "			rating r ,course c\n"
				+ "		 where\n"
				+ "			c.id = r.course_id and c.category_id = ct.id\n"
				+ "		) rating \n"
				+ "	 from\n"
				+ "	category ct\n"
				+ "	) a\n"
				+ "where \n"
				+ "	a.parent_id is not null\n"
				+ "group by\n"
				+ "	a.parent_id";
		ResultSet rs = DB.executeQuery(sql);
		try {
			while (rs.next()) {
				popularCategories.add(new PopularCategory(rs.getString("name"), rs.getInt("enr_std_count"),
						rs.getInt("review_count"), rs.getDouble("rating"), rs.getInt("rating_count")));
			}
			rs.close();
			return popularCategories;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	public static ArrayList<IncomePerCourse> getIncomePerCourseAdmin() {

		ArrayList<IncomePerCourse> totalIncome = new ArrayList<>();
		String sql = "select \n"
				+ "	c.id,c.title  title ,\n"
				+ "	(\n"
				+ "	select\n"
				+ "	nvl(sum(cost) * 0.1,0) income\n"
				+ "	from  purchase_history ph\n"
				+ "	where c.id = ph.course_id \n"
				+ "	) income\n"
				+ "from course c\n"
				+ "group by \n"
				+ "	c.id,c.title \n"
				+ "order by income desc";
		ResultSet rs = DB.executeQuery(sql);
		try {
			while (rs.next()) {
				totalIncome.add(new IncomePerCourse(rs.getString("title"), rs.getDouble("income")));
			}
			return totalIncome;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	public static ArrayList<CourseApproval> getApprovedCoursesAdmin() {
		ArrayList<CourseApproval> courses = new ArrayList<>();
		String sql = "select \n"
				+ "	c.id,\n"
				+ "	c.title,\n"
				+ "	c.publish_date,\n"
				+ "	c.teacher_id\n"
				+ "from \n"
				+ "	course c\n"
				+ "where\n"
				+ "	c.is_approved = 'T' order by c.publish_date desc";
		ResultSet rs = DB.executeQuery(sql);
		Integer id ;
		String title;
		String teacherId;
		Date publishDate;
		try {
			while(rs.next()) {
				id = rs.getInt("id");
				title = rs.getString("title");
				teacherId  = rs.getString("teacher_id");
				publishDate = rs.getDate("publish_date");
				courses.add(new CourseApproval(id, title, teacherId, publishDate));
			}
			return courses;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
 	}
	
	public static ArrayList<CourseApproval> getUnapprovedCoursesAdmin() {
		ArrayList<CourseApproval> courses = new ArrayList<>();
		String sql = "select \n"
				+ "	c.id,\n"
				+ "	c.title,\n"
				+ "	c.publish_date,\n"
				+ "	c.teacher_id\n"
				+ "from \n"
				+ "	course c\n"
				+ "where\n"
				+ "	c.is_approved = 'F' order by c.publish_date desc";
		ResultSet rs = DB.executeQuery(sql);
		Integer id ;
		String title;
		String teacherId;
		Date publishDate;
		try {
			while(rs.next()) {
				id = rs.getInt("id");
				title = rs.getString("title");
				teacherId  = rs.getString("teacher_id");
				publishDate = rs.getDate("publish_date");
				courses.add(new CourseApproval(id, title, teacherId, publishDate));
			}
			return courses;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
 	}
	
	public static void approveCourse(Integer courseId,String adminId) {
		DB.execute("update course set is_approved = 'T' where id = # ",courseId.toString());
		ResultSet rs = DB.executeQuery("select teacher_id from course where id = #",courseId.toString() );
		try {
			rs.next();
			Integer id = DB.generateId("notification");
			DB.execute("insert into  notification values( #,'#','#',#,'F',#,'COURSEAPPROVED',0) ",id.toString(),rs.getString("teacher_id"),adminId,ToolKit.JDateToDDate(new Date()),courseId.toString());
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}
	
	public static void unapproveCourse(Integer courseId,String adminId) {
		DB.execute("update course set is_approved = 'F' where id = # ",courseId.toString());
		ResultSet rs = DB.executeQuery("select teacher_id from course where id = #",courseId.toString() ); 
		try {
			rs.next();
			Integer id = DB.generateId("notification");
			DB.execute("insert into  notification values( #,'#','#',#,'F',#,'COURSEUNAPPROVED',0) ",id.toString(),rs.getString("teacher_id"),adminId,ToolKit.JDateToDDate(new Date()),courseId.toString());
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static boolean isAdmin(String username) {
		return DB.valueExist("admin", "id", username);
	}
	
}
