package com.course.bucket.courseextra.review;


import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;

import com.course.bucket.course.Course;
import com.course.bucket.courseextra.CourseRating;
import com.course.bucket.courseextra.faq.FaqList;
import com.course.bucket.database.DB;
import com.course.bucket.person.Student;
import com.course.bucket.tools.ToolKit;


public class Review {

	Integer id;
	Student student;
	Date date;
	String text;
	CourseRating rating;

	private Review() {
	}

	public Review(Integer id) {
		this.id = id;
		ResultSet rs = DB.executeQuery("SELECT * FROM REVIEW WHERE ID = #", id.toString());
		try {
			rs.next();
			student = new Student(rs.getString("STUDENT_ID"));
			date = rs.getTimestamp("TIME");
			text = rs.getString("TEXT");
			rating = new CourseRating(rs.getInt("COURSE_ID"), student);
			rs.close();
		} catch (SQLException ex) {
			System.err.println("Error in Review");
		}
	}

	public Review(Course course, Student student, String text, CourseRating rating) {
		this.id = DB.generateId("REVIEW");
		this.student = student;
		this.text = text;
		this.date = ToolKit.getCurTime();
		this.rating = rating;
		DB.execute("INSERT INTO REVIEW(ID, COURSE_ID, STUDENT_ID, TIME, TEXT) VALUES(#, #, '#', #, '#')", id.toString(),
				course.getId().toString(), student.getUsername(), ToolKit.JDateToDDate(date), text);
	}

	public static ArrayList<Review> getList(Course course) {
		ArrayList<Review> list = new ArrayList<Review>();
		ResultSet rs = DB.executeQuery("SELECT ID FROM REVIEW WHERE COURSE_ID = # ORDER BY TIME ASC",
				course.getId().toString());
		try {
			while (rs.next()) {
				list.add(new Review(rs.getInt("ID")));
			}
			rs.close();
		} catch (SQLException ex) {
			System.err.println("Error in Review");
		}
		return list;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public CourseRating getRating() {
		return rating;
	}

	public void setRating(CourseRating rating) {
		this.rating = rating;
	}

	public Integer getCourseId() {
		try {
			ResultSet rs = DB.executeQuery("SELECT COURSE_ID FROM REVIEW WHERE ID = #", id.toString());
			if (rs.next()) {
				Integer value = rs.getInt("COURSE_ID");
				rs.close();
				return value;
			}
			rs.close();
		} catch (SQLException ex) {
			System.err.println("Error in Review");
		}
		return null;
	}

	public static boolean isReviewed(Course course, Student student) {
		try {
			ResultSet rs = DB.executeQuery("SELECT * FROM REVIEW WHERE COURSE_ID = # AND STUDENT_ID = '#'",
					course.getId().toString(), student.getUsername());
			if (rs.next()) {
				rs.close();
				return true;
			}
			rs.close();
		} catch (SQLException ex) {
			System.err.println("Error in Review");
		}
		return false;
	}

//    public static ArrayList<Pair<Course ,ArrayList<Review>>> getReviewsForTeacherView(){
//        ArrayList<Pair<Course ,ArrayList<Review>>> lists = new ArrayList();
//        try {
//            ResultSet rsCourse = DB.executeQuery("SELECT COURSE_ID FROM REVIEW WHERE COURSE_ID = ANY (SELECT ID FROM COURSE WHERE TEACHER_ID = '#') GROUP BY COURSE_ID ORDER BY MAX(TIME) DESC", GLOBAL.TEACHER.getUsername());
//            while(rsCourse.next()){
//                ArrayList list = new ArrayList();
//                ResultSet rsReview = DB.executeQuery("SELECT * FROM REVIEW WHERE COURSE_ID = # ORDER BY TIME DESC", rsCourse.getString("COURSE_ID"));
//                while(rsReview.next()){
//                    Review r = new Review();
//                    r.setId(rsReview.getInt("ID"));
//                    r.setStudent(new Student(rsReview.getString("STUDENT_ID")));
//                    r.setDate(rsReview.getTimestamp("TIME"));
//                    r.setText(rsReview.getString("TEXT"));
//                    r.setRating(new CourseRating(rsReview.getInt("COURSE_ID"), r.getStudent()));
//                    list.add(r);
//                }
//                lists.add(new Pair<Course, ArrayList<Review>>(new Course(rsCourse.getInt("COURSE_ID")), list));
//                rsReview.close();
//            }
//            rsCourse.close();
//        } catch (SQLException ex) {
//            Logger.getLogger(Review.class.getName()).log(Level.SEVERE, null, ex);
//        }
//        return lists;
//    }

	public static HashMap<Integer, ArrayList<Review>> getReviewsForTeacherView(String teacherName) {
		HashMap<Integer, ArrayList<Review>> lists = new HashMap<Integer, ArrayList<Review>>();
		try {
			ResultSet rsCourse = DB.executeQuery(
					"SELECT COURSE_ID FROM REVIEW WHERE COURSE_ID = ANY (SELECT ID FROM COURSE WHERE TEACHER_ID = '#') GROUP BY COURSE_ID ORDER BY MAX(TIME) DESC",
					teacherName);
			Integer course_id = rsCourse.getInt("COURSE_ID");
			while (rsCourse.next()) {
				ArrayList list = new ArrayList();
				ResultSet rsReview = DB.executeQuery("SELECT * FROM REVIEW WHERE COURSE_ID = # ORDER BY TIME DESC",
						course_id.toString());
				while (rsReview.next()) {
					Review r = new Review();
					r.setId(rsReview.getInt("ID"));
					r.setStudent(new Student(rsReview.getString("STUDENT_ID")));
					r.setDate(rsReview.getTimestamp("TIME"));
					r.setText(rsReview.getString("TEXT"));
					r.setRating(new CourseRating(rsReview.getInt("COURSE_ID"), r.getStudent()));
					list.add(r);
				}
				lists.put(course_id, list);
				rsReview.close();
			}
			rsCourse.close();
		} catch (SQLException ex) {
			System.err.println("Error in getReviewsForTeacherView");
		}
		return lists;
	}

//    public static ArrayList<Pair<Course ,ArrayList<Review>>> getReviewsForStudentView() {
//        ArrayList<Pair<Course ,ArrayList<Review>>> lists = new ArrayList();
//        try {
//            ResultSet rsCourse = DB.executeQuery("SELECT * FROM REVIEW WHERE STUDENT_ID = '#' ORDER BY TIME DESC", GLOBAL.STUDENT.getUsername());
//            while(rsCourse.next()){
//                ArrayList list = new ArrayList();
//                Review r = new Review();
//                r.setId(rsCourse.getInt("ID"));
//                r.setStudent(GLOBAL.STUDENT);
//                r.setDate(rsCourse.getTimestamp("TIME"));
//                r.setText(rsCourse.getString("TEXT"));
//                r.setRating(new CourseRating(rsCourse.getInt("COURSE_ID"), r.getStudent()));
//                list.add(r);
//                Course course = new Course(rsCourse.getInt("COURSE_ID"));
//                lists.add(new Pair<Course, ArrayList<Review>>(course,list));
//            }
//            rsCourse.close();
//        } catch (SQLException ex) {
//        	System.err.println("Error in getReviewsForStudentView");
//        }
//        return lists;
//    }

	public static HashMap<Integer, ArrayList<Review>> getReviewsForStudentView(String studentName) {
		HashMap<Integer, ArrayList<Review>> lists = new HashMap<Integer, ArrayList<Review>>();
		try {
			ResultSet rsCourse = DB.executeQuery("SELECT * FROM REVIEW WHERE STUDENT_ID = '#' ORDER BY TIME DESC",
					studentName);
			Integer id = rsCourse.getInt("COURSE_ID");
			while (rsCourse.next()) {
				ArrayList list = new ArrayList();
				Review r = new Review();
				r.setId(rsCourse.getInt("ID"));
				r.setStudent(new Student(studentName));
				r.setDate(rsCourse.getTimestamp("TIME"));
				r.setText(rsCourse.getString("TEXT"));
				r.setRating(new CourseRating(id, r.getStudent()));
				list.add(r);
				Course course = new Course(rsCourse.getInt("COURSE_ID"));
				lists.put(id, list);
			}
			rsCourse.close();
		} catch (SQLException ex) {
			System.err.println("Error in getReviewsForStudentView");
		}
		return lists;
	}

	public static void delete(Course course) {
		DB.execute("DELETE FROM REVIEW WHERE COURSE_ID = #", course.getId().toString());
	}

	public static ArrayList<ReviewList> getReviewListTeacher(String teacherUsername) {
		ArrayList<ReviewList> reviewLists = new ArrayList<>();

		String sql = "SELECT r.course_id,c.title, c.subtitle, fl.content\n" + " FROM review r,course c, files fl\n"
				+ " WHERE r.course_id = c.id and c.cover_id = fl.id and \n"
				+ " r.course_id = ANY (SELECT ID FROM COURSE WHERE TEACHER_ID = '#')\n"
				+ " GROUP BY r.course_id, c.title, c.subtitle, fl.content ORDER BY MAX(time) DESC";
		ResultSet crs = DB.executeQuery(sql, teacherUsername);

		try {
			while (crs.next()) {
				ResultSet rvrs = DB.executeQuery("select * from review where course_id = #", crs.getString("course_id"));

				ArrayList<ReviewInfo> reviewInfos = new ArrayList<>();
				while (rvrs.next()) {
					ResultSet srs = DB.executeQuery(
							"select concat(concat(p.first_name , ' '),p.last_name) as full_name, f.content from person p, files f\n"
									+ "where p.photo_id = f.id and p.id = '#'",rvrs.getString("student_id"));
					ResultSet rtrs = DB.executeQuery("select value from rating where course_id = #", crs.getString("course_id"));
					srs.next();
					rtrs.next();
					reviewInfos.add(new ReviewInfo(srs.getString("full_name"),srs.getString("content"),rvrs.getTimestamp("time"),rtrs.getInt("value"),rvrs.getString("text")));

					srs.close();
					rtrs.close();
				}
				rvrs.close();

				reviewLists.add(new ReviewList(crs.getString("title"), crs.getString("subtitle"), crs.getString("content"),
						reviewInfos));
			}
			crs.close();
			return reviewLists;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;

	}
	
	public static void createNewReview(ReviewDb review) {
		Integer id = DB.generateId("review");
		String sql = " insert into review values(#,#, '#', #,'#')";
		DB.execute(sql,id.toString(),review.getCourseId().toString(),review.getStudentId(),ToolKit.JDateToDDate(review.getTime()),review.getText());
		notificationReview(review);
	}
	
	public static void createNewRating(RatingDb rating) {
		Integer id = DB.generateId("rating");
		String sql = " insert into rating values(#,#, '#', #,#)";
		DB.execute(sql,id.toString(),rating.getCourseId().toString(),rating.getStudentId(),rating.getValue().toString(),ToolKit.JDateToDDate(rating.getTime()));
		notificationRating(rating);
	}
	
	public static void notificationReview(ReviewDb review) {
		Integer id = DB.generateId("notification");
		String sql = "insert into notification values(# ,'#','#',# , 'F', #,'REVIEW'";
		ResultSet rs = DB.executeQuery("select teacher_id from course where id = #", review.getCourseId().toString());
		try {
			rs.next();
			DB.execute(sql,id.toString(),rs.getString("teacher_id"),review.getStudentId(),ToolKit.JDateToDDate(new Date()),review.getCourseId().toString());
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static void notificationRating(RatingDb rating) {
		Integer id = DB.generateId("notification");
		String sql = "insert into notification values(# ,'#','#',# , 'F', #,'RATING'";
		ResultSet rs = DB.executeQuery("select teacher_id from course where id = #", rating.getCourseId().toString());
		try {
			rs.next();
			DB.execute(sql,id.toString(),rs.getString("teacher_id"),rating.getStudentId(),ToolKit.JDateToDDate(new Date()),rating.getCourseId().toString());
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
