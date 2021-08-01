package com.course.bucket.courseextra.faq;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.course.bucket.course.Course;
import com.course.bucket.database.DB;
import com.course.bucket.person.Student;
import com.course.bucket.person.Teacher;
import com.course.bucket.tools.ToolKit;

public class FAQ {
	Integer id;
	String question;
	String answer;
	Date questionTime;
	Date answerTime;
	Student student;
	Teacher teacher;
	Integer courseId;

	public FAQ() {
	}

	public FAQ(Integer id) {
		this.id = id;
		ResultSet rs = DB.executeQuery("SELECT * FROM FAQ WHERE ID = #", id.toString());
		try {
			if (rs.next()) {
				this.question = rs.getString("QUESTION");
				this.answer = rs.getString("ANSWER");
				this.questionTime = rs.getTimestamp("QUESTION_TIME");
				this.answerTime = rs.getTimestamp("ANSWER_TIME");
				this.student = new Student(rs.getString("STUDENT_ID"));
				this.courseId = rs.getInt("COURSE_ID");
				ResultSet rsT = DB.executeQuery("SELECT TEACHER_ID FROM COURSE WHERE ID = #",
						rs.getString("COURSE_ID"));
				if (rsT.next()) {
					this.teacher = new Teacher(rsT.getString("TEACHER_ID"));
				}
				rsT.close();
			}
			rs.close();
		} catch (SQLException ex) {
			System.err.println("Error inside faq");
		}
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
		DB.execute("UPDATE FAQ SET ANSWER = '#' WHERE ID = #", answer, id.toString());
		updateAnswerTime();
	}

	public Date getQuestionTime() {
		return questionTime;
	}

	public void setQuestionTime(Date questionTime) {
		this.questionTime = questionTime;
	}

	public Date getAnswerTime() {
		return answerTime;
	}

	public void updateAnswerTime() {
		this.answerTime = ToolKit.getCurTime();
		DB.execute("UPDATE FAQ SET ANSWER_TIME = # WHERE ID = #", ToolKit.JDateToDDate(answerTime), id.toString());
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public Teacher getTeacher() {
		return teacher;
	}

	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}

	public static void delete(Course course) {
		DB.execute("DELETE FROM FAQ WHERE COURSE_ID = #", course.getId().toString());
	}

	public FAQ(Course course, Student student, String question) {
		this.id = DB.generateId("FAQ");
		this.question = question;
		this.questionTime = ToolKit.getCurTime();
		this.student = student;
		this.teacher = course.getTeacher();
		this.courseId = course.getId();
		DB.execute("INSERT INTO FAQ(ID, COURSE_ID, STUDENT_ID, QUESTION, QUESTION_TIME) VALUES(#, #, '#', '#', #)",
				id.toString(), course.getId().toString(), student.getUsername(), question,
				ToolKit.JDateToDDate(questionTime));
	}

	public static ArrayList<FAQ> getFAQList(Integer courseId) {
		ArrayList<FAQ> list = new ArrayList<FAQ>();
		ResultSet rs = DB.executeQuery("SELECT ID FROM FAQ WHERE COURSE_ID = # ORDER BY QUESTION_TIME ASC",
				courseId.toString());
		try {
			while (rs.next()) {
				list.add(new FAQ(rs.getInt("ID")));
			}
			rs.close();
		} catch (SQLException ex) {
			System.err.println("Error inside CourseRating");
		}
		return list;
	}

//    public static ArrayList<Pair<Course,ArrayList<FAQ>>> getFAQForTeacherView(){
//        ArrayList<Pair<Course,ArrayList<FAQ>>> lists = new ArrayList();
//        try {
//            ResultSet rsCourse = DB.executeQuery("SELECT COURSE_ID FROM FAQ WHERE COURSE_ID = ANY (SELECT ID FROM COURSE WHERE TEACHER_ID = '#') GROUP BY COURSE_ID ORDER BY MAX(QUESTION_TIME) DESC", GLOBAL.TEACHER.getUsername());
//            while(rsCourse.next()){
//                ArrayList list = new ArrayList();
//                ResultSet rsFAQ = DB.executeQuery("SELECT * FROM FAQ WHERE COURSE_ID = # ORDER BY QUESTION_TIME DESC", rsCourse.getString("COURSE_ID"));
//                while(rsFAQ.next()){
//                    list.add(new FAQ(rsFAQ.getInt("ID")));
//                }
//                rsFAQ.close();
//                Pair<Course, ArrayList<FAQ>> pair = new Pair(new Course(rsCourse.getInt("COURSE_ID")), list);
//                lists.add(pair);
//            }
//            rsCourse.close();
//        } catch (SQLException ex) {
//        	System.err.println("Error inside CourseRating");        }
//        return lists;
//    }

	public static Map<Integer, ArrayList<FAQ>> getFAQForTeacherView(String teacherName) {
		Map<Integer, ArrayList<FAQ>> lists = new HashMap<Integer, ArrayList<FAQ>>();
		try {
			ResultSet rsCourse = DB.executeQuery(
					"SELECT COURSE_ID FROM FAQ WHERE COURSE_ID = ANY (SELECT ID FROM COURSE WHERE TEACHER_ID = '#') GROUP BY COURSE_ID ORDER BY MAX(QUESTION_TIME) DESC",
					teacherName);
			while (rsCourse.next()) {
				ArrayList<FAQ> list = new ArrayList<FAQ>();
				ResultSet rsFAQ = DB.executeQuery("SELECT * FROM FAQ WHERE COURSE_ID = # ORDER BY QUESTION_TIME DESC",
						rsCourse.getString("COURSE_ID"));
				while (rsFAQ.next()) {
					list.add(new FAQ(rsFAQ.getInt("ID")));
				}
				rsFAQ.close();
				lists.put(rsCourse.getInt("COURSE_ID"), list);

			}
			rsCourse.close();
		} catch (SQLException ex) {
			System.err.println("Error inside getFAQForTeacherView");
		}
		return lists;
	}

//    public static ArrayList<Pair<Course, ArrayList<FAQ>>> getFAQForStudentView() {
//        ArrayList<Pair<Course,ArrayList<FAQ>>> lists = new ArrayList();
//        try {
//            ResultSet rsCourse = DB.executeQuery("SELECT COURSE_ID FROM FAQ WHERE STUDENT_ID = '#' GROUP BY COURSE_ID ORDER BY MAX(QUESTION_TIME) DESC", GLOBAL.STUDENT.getUsername());
//            while(rsCourse.next()){
//                ArrayList list = new ArrayList();
//                ResultSet rsFAQ = DB.executeQuery("SELECT ID FROM FAQ WHERE COURSE_ID = # AND STUDENT_ID = '#' ORDER BY QUESTION_TIME DESC", rsCourse.getString("COURSE_ID"), GLOBAL.STUDENT.getUsername());
//                while(rsFAQ.next()){
//                    list.add(new FAQ(rsFAQ.getInt("ID")));
//                }
//                rsFAQ.close();
//                Pair<Course, ArrayList<FAQ>> pair = new Pair(new Course(rsCourse.getInt("COURSE_ID")), list);
//                lists.add(pair);
//            }
//            rsCourse.close();
//        } catch (SQLException ex) {
//        	System.err.println("Error inside getFAQForStudentView");
//        }
//        return lists;
//    }

	public static Map<Integer, ArrayList<FAQ>> getFAQForStudentView(String studentName) {
		Map<Integer, ArrayList<FAQ>> lists = new HashMap<Integer, ArrayList<FAQ>>();
		try {
			ResultSet rsCourse = DB.executeQuery(
					"SELECT COURSE_ID FROM FAQ WHERE STUDENT_ID = '#' GROUP BY COURSE_ID ORDER BY MAX(QUESTION_TIME) DESC",
					studentName);
			while (rsCourse.next()) {
				ArrayList<FAQ> list = new ArrayList<FAQ>();
				ResultSet rsFAQ = DB.executeQuery(
						"SELECT ID FROM FAQ WHERE COURSE_ID = # AND STUDENT_ID = '#' ORDER BY QUESTION_TIME DESC",
						rsCourse.getString("COURSE_ID"), studentName);
				while (rsFAQ.next()) {
					list.add(new FAQ(rsFAQ.getInt("ID")));
				}
				rsFAQ.close();
				lists.put(rsCourse.getInt("COURSE_ID"), list);
			}
			rsCourse.close();
		} catch (SQLException ex) {
			System.err.println("Error inside getFAQForStudentView");
		}
		return lists;
	}

	public Integer getCourseId() {
		return courseId;
	}

	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}

	public static ArrayList<FaqList> getFaqListTeacher(String teacherUsername) {
		ArrayList<FaqList> faqLists = new ArrayList<>();
		String sql = "SELECT f.course_id, c.title, c.subtitle, fl.content\n" + " FROM FAQ f,course c, files fl\n"
				+ " WHERE f.course_id = c.id and c.cover_id = fl.id and \n"
				+ " COURSE_ID = ANY (SELECT ID FROM COURSE WHERE TEACHER_ID = '#')\n"
				+ " GROUP BY f.course_id, c.title, c.subtitle, fl.content ORDER BY MAX(QUESTION_TIME) DESC";
		ResultSet crs = DB.executeQuery(sql, teacherUsername);

		try {
			while (crs.next()) {
				ResultSet frs = DB.executeQuery("select * from faq where course_id = #", crs.getString("course_id"));

				ArrayList<FaqInfo> faqInfos = new ArrayList<>();
				while (frs.next()) {
					ResultSet trs = DB.executeQuery(
							"select concat(concat(p.first_name , ' '),p.last_name) as full_name, f.content from person p, files f, course c where p.photo_id = f.id and c.teacher_id = p.id and c.id = #",
							crs.getString("course_id"));
					ResultSet srs = DB.executeQuery(
							"select concat(concat(p.first_name , ' '),p.last_name) as full_name, f.content from person p, files f\n"
									+ "where p.photo_id = f.id and p.id = '#'",
							frs.getString("student_id"));
					trs.next();
					srs.next();
					faqInfos.add(new FaqInfo(srs.getString("full_name"), srs.getString("content"),
							trs.getString("full_name"), trs.getString("content"), frs.getString("question"),
							frs.getTimestamp("question_time"), frs.getString("answer"),
							frs.getTimestamp("answer_time")));

					srs.close();
					trs.close();
				}
				frs.close();

				faqLists.add(new FaqList(crs.getString("title"), crs.getString("subtitle"), crs.getString("content"),
						faqInfos));

			}
			crs.close();
			return faqLists;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;

	}
}
