package com.course.bucket.person;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Vector;

import com.course.bucket.course.Course;
import com.course.bucket.course.additionals.CoursePopularity;
import com.course.bucket.course.additionals.IncomePerCourse;
import com.course.bucket.course.additionals.MiniCourse;
import com.course.bucket.courseextra.CourseRating;
import com.course.bucket.database.DB;
import com.course.bucket.designation.Designation;
import com.course.bucket.person.Person.AccountType;
import com.course.bucket.person.others.CumulativeRating;
import com.course.bucket.person.others.RatingCount;
import com.course.bucket.tools.ToolKit;

public class Teacher extends Person {

    private Designation designation;
    private Integer courseCreated ;
    private Integer coursePurchased;

    public Integer getCourseCreated() {
        return courseCreated;
    }

    public void setCourseCreated(Integer courseCreated) {
        this.courseCreated = courseCreated;
    }

    public Integer getCoursePurchased() {
        return coursePurchased;
    }

    public void setCoursePurchased(Integer coursePurchased) {
        this.coursePurchased = coursePurchased;
    }

    public Designation getDesignation() {
        return designation;
    }

    public void setDesignation(Designation designation) {
        this.designation = designation;
        //DB.execute("UPDATE TEACHER SET DESIGNATION_ID = '#'", designation.getId().toString());
    }
    
    public Teacher() {
    	super();
    }

    public Teacher(AccountType accountType, String username, String email, String password, String firstName, String lastName, String about, Date dob){
        super(accountType, username, email, password, firstName, lastName, about, dob);
        DB.execute("INSERT INTO TEACHER(ID) VALUES('#')", username);
    }

	//Mehedi
	public Teacher(AccountType accountType, String username, String email, String password) {
		super(accountType, username, email, password);
		DB.execute("INSERT INTO TEACHER(ID) VALUES('#')", username);
	}
    public Teacher(String username) {
        super(username);
        String sql = "SELECT DESIGNATION_ID FROM TEACHER WHERE ID = '#'";
        ResultSet rs = DB.executeQuery(sql, username);
        try {
            if(rs.next()) {
            if (rs.getInt("DESIGNATION_ID") != 0) {
                designation = new Designation(rs.getInt("DESIGNATION_ID"));
            }
            }
//        sql = "SELECT ID FROM COURSE WHERE TEACHER_ID = '#'";
//        ResultSet rs2 = DB.executeQuery(sql, username);
//        int count = 0;
//        while(rs2.next())
//        {
//            count++;
//        }
//        rs2.close();
//        this.courseCreated = new Integer(count);
//        count=0;
//        sql = "SELECT c.TEACHER_ID,COUNT(DISTINCT(p.COURSE_ID)) " +
//        " FROM PURCHASE_HISTORY p,COURSE c" +
//        " WHERE p.COURSE_ID = c.ID AND c.TEACHER_ID = '#'" +
//        " GROUP BY c.TEACHER_ID";
//        ResultSet rs1 = DB.executeQuery(sql, username);
//        while(rs1.next())
//        {
//            count++;
//        }
//        this.coursePurchased = count;
//        rs1.close();
        } catch (SQLException ex) {
        	System.err.println("error in Teacher");
        }
        //System.out.println(this.courseCreated);
    }

    public static boolean exist(String username) {
        return DB.valueExist("TEACHER", "ID", username);
    }

    public Integer getNumOfReview() {
        Integer value = null;
        ResultSet rs = DB.executeQuery("SELECT COUNT(*) FROM REVIEW WHERE COURSE_ID = ANY(SELECT ID FROM COURSE WHERE TEACHER_ID = '#')", getUsername());
        try {
            rs.next();
            value = rs.getInt("COUNT(*)");
            rs.close();
        } catch (SQLException ex) {
        	System.err.println("error in getNumOfReview");
        }
        return value;
    }
    
    public Integer getNumOfStudent(){
        try {
            ResultSet rs = DB.executeQuery("SELECT COUNT(*) FROM PURCHASE_HISTORY WHERE COURSE_ID = ANY(SELECT ID FROM COURSE WHERE TEACHER_ID = '#')", getUsername());
            Integer value;
            rs.next();
            value = rs.getInt("COUNT(*)");
            rs.close();
            return value;
        } catch (SQLException ex) {
        	System.err.println("error in getNumOfReview");

        }
        return 0;
    }
    
    public Integer getNumOfCourse(){
        ResultSet rs = DB.executeQuery("SELECT COUNT(*) FROM COURSE WHERE TEACHER_ID = '#'", getUsername());
        Integer value = null;
        try {
            rs.next();
            value = rs.getInt("COUNT(*)");
            rs.close();
        } catch (SQLException ex) {
        	System.err.println("error in getNumOfReview");

        }
        return value;
    }
    
    public Double getRating(){
        return CourseRating.getValue(this);
    }
//
//    public ArrayList<Course> getCourses() {
//        return Course.coursesOf(this);
//    }

    public Integer getNumOfRating() {
        ResultSet rs = DB.executeQuery("SELECT COUNT(*) FROM RATING WHERE COURSE_ID = ANY(SELECT ID FROM COURSE WHERE TEACHER_ID = '#')", getUsername());
        Integer value = null;
        try {
            rs.next();
            value = rs.getInt("COUNT(*)");
            rs.close();
        } catch (SQLException ex) {
        	System.err.println("error in getNumOfReview");

        }
        return value;
    }
    
    public static ArrayList<MiniCourse> getCreatedCourses(String teacherName) {
        String sql = "SELECT ID FROM COURSE WHERE TEACHER_ID = '#' ";
        ResultSet rs = DB.executeQuery(sql, teacherName);
        ArrayList<MiniCourse> courses = new ArrayList<MiniCourse>();
        try {
            while (rs.next()) {
                courses.add(new MiniCourse(rs.getInt("ID")));
            }
        } catch (SQLException ex) {
        	System.err.println("error in getNumOfReview");

        }
        return courses;
    }

    public Double getTotalRevenue() {
        Double value = 0.0;
        try {
            ResultSet rs = DB.executeQuery("SELECT SUM(COST) FROM PURCHASE_HISTORY WHERE COURSE_ID = ANY(SELECT ID FROM COURSE WHERE TEACHER_ID = '#')", getUsername());
            if(rs.next()){
                value = rs.getDouble("SUM(COST)");
            }
            rs.next();
        } catch (SQLException ex) {
        	System.err.println("error in getNumOfReview");

        }
        return value;
    }
    public static ArrayList<Teacher> getTeacherList()
    {
        String sql = "SELECT ID FROM TEACHER ORDER BY ID";
        ArrayList<Teacher> list = new ArrayList<Teacher>();
        ResultSet rs = DB.executeQuery(sql);
        try {
            while(rs.next())
            {
                list.add(new Teacher(rs.getString("ID")));
            }
            rs.close();
        } catch (SQLException ex) {
        	System.err.println("error in getNumOfReview");

        }
        return list;
    }
    
    public static void createNewTeacher(Person person,Integer desig_id) {
    	Person.createNewPerson(person);
    	DB.execute("insert into teacher values('#',#)", person.getUsername(),desig_id.toString());
    }
    

//	Mehedi
	public static void update(Person person, Integer designationId) {
		Person.update(person);
		DB.execute(""
				+ "UPDATE TEACHER SET "
				+ "DESIGNATION_ID = # "
				+ "WHERE ID = '#'",
				designationId.toString(),
				person.getUsername()
				);
	}
	
	public static Vector<CumulativeRating> getCumulativeRatingTeacher(String teacherUsername) {

		String sql = "select min(publish_date) first_date\r\n" + "from course \r\n" + "where teacher_id = '#'\r\n"
				+ "group by teacher_id ";
		Date firstDate;
		HashMap<Date, RatingCount> ratingsDb = new HashMap<>();
		ResultSet rs = DB.executeQuery(sql, teacherUsername);
		try {
			rs.next();
			firstDate = rs.getDate("first_date");
			sql = "select trunc(r.time) as time , avg(value) as rating ,count(*) as count\r\n"
					+ "from rating r,course c\r\n" + "where c.id = r.course_id and c.teacher_id = '#'\r\n"
					+ "group by trunc(r.time)";
			rs = DB.executeQuery(sql, teacherUsername);
			while (rs.next()) {
				ratingsDb.put(rs.getDate("time"), new RatingCount(rs.getDouble("rating"), rs.getInt("count")));
			}
			Date lastDate = new Date();
			long size = ToolKit.getDifferenceDays(firstDate, lastDate);
			Vector<CumulativeRating> ratings = new Vector<>();
			LocalDate start = ToolKit.DateToLocalDate(firstDate);
			LocalDate end = ToolKit.DateToLocalDate(lastDate);
			end = end.plusDays(2);
			System.err.println("today date : " + end);
			Date date;
			int count = 0, idx = 0;
			double rating = 0.0;

			for (LocalDate ldate = start; ldate.isBefore(end); ldate = ldate.plusDays(1)) {
				date = ToolKit.localDateToDate(ldate);
				if (ratingsDb.containsKey(date)) {
					if (idx == 0) {
						ratings.add(idx, new CumulativeRating(date, ratingsDb.get(date).getRating()));
					} else {
						Double oldR = ratings.get(idx - 1).getRating() * count;
						Double newR = ratingsDb.get(date).getRating() * ratingsDb.get(date).getCount();
						count += ratingsDb.get(date).getCount();
						rating = (oldR + newR) / (count);
						ratings.add(new CumulativeRating(date, rating));
					}
				} else {
					if (idx == 0) {
						ratings.add(new CumulativeRating(date, 0.0));
					} else {
						ratings.add(new CumulativeRating(date, ratings.get(idx - 1).getRating()));
					}
				}
				idx++;
			}
			rs.close();
			return ratings;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;

	}
	
	public static ArrayList<CoursePopularity> getCoursePopularityTeacher(String teacherUsername) {
		ArrayList<CoursePopularity> coursePopularities = new ArrayList<>();
		String sql = "select id, title, rating, rating_count, enr_std_count,review_count\n" + "from \n" + "(\n"
				+ "	select c.id as id, c.teacher_id, c.title as title, avg(rt.value) as rating, count(rt.student_id) as rating_count\n"
				+ "	from course c, rating rt\n" + "	where c.id = rt.course_id \n"
				+ "	group by c.id, c.title, c.teacher_id\n" + "	order by rating desc\n" + ") a,\n"
				+ "(	select course_id, count(ph.student_id) as enr_std_count\n" + "	from purchase_history ph\n"
				+ "	group by course_id\n" + ") b,\n" + "(\n"
				+ "	select course_id, count(rv.student_id) as review_count\n" + "	from review rv\n"
				+ "	group by course_id\n" + ") c\n"
				+ "where a.id = b.course_id and a.id = c.course_id and a.teacher_id = '#'";
		ResultSet rs = DB.executeQuery(sql, teacherUsername);
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
	
	public static ArrayList<IncomePerCourse> getIncomePerCourseTeacher(String teacherUsername) {

		ArrayList<IncomePerCourse> totalIncome = new ArrayList<>();
		String sql = "select \n"
				+ "	c.id,c.title  title ,\n"
				+ "	(\n"
				+ "	select\n"
				+ "	nvl(sum(cost),0) income\n"
				+ "	from  purchase_history ph\n"
				+ "	where c.id = ph.course_id \n"
				+ "	) income\n"
				+ "from course c\n"
				+ "where\n"
				+ "	c.teacher_id = '#'  \n"
				+ "group by \n"
				+ "	c.id,c.title \n"
				+ "order by income desc";
		ResultSet rs = DB.executeQuery(sql,teacherUsername);
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
}
