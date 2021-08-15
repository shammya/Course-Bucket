package com.course.bucket.courseextra.faq;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;

import com.course.bucket.database.DB;

public class FaqDb {

	private Integer id;
	private Integer courseId;
	private String studentId;
	private String question;
	private Date  questionTime;
	private String answer;
	private Date  answerTime;
	
	
	
	public FaqDb(Integer courseId, String studentId, String question, Date questionTime, String answer,
			Date answerTime) {
		super();
		this.courseId = courseId;
		this.studentId = studentId;
		this.question = question;
		this.questionTime = questionTime;
		this.answer = answer;
		this.answerTime = answerTime;
	}
	
	public FaqDb(Integer id) {
		ResultSet rs = DB.executeQuery("SELECT * FROM FAQ WHERE ID = #", id.toString());
		try {
			if(rs.next()) {
				this.courseId = rs.getInt("COURSE_ID");
				this.studentId = rs.getString("STUDENT_ID");
				this.question = rs.getString("QUESTION");
				this.questionTime = rs.getTimestamp("QUESTION_TIME");
			}
			rs.close();
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


	public Integer getCourseId() {
		return courseId;
	}



	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}



	public String getStudentId() {
		return studentId;
	}



	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}



	public String getQuestion() {
		return question;
	}



	public void setQuestion(String question) {
		this.question = question;
	}



	public Date getQuestionTime() {
		return questionTime;
	}



	public void setQuestionTime(Date questionTime) {
		this.questionTime = questionTime;
	}



	public String getAnswer() {
		return answer;
	}



	public void setAnswer(String answer) {
		this.answer = answer;
	}



	public Date getAnswerTime() {
		return answerTime;
	}



	public void setAnswerTime(Date answerTime) {
		this.answerTime = answerTime;
	}
	
	
	
}
