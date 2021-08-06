package com.course.bucket.courseextra.faq;

import java.util.Date;

public class FaqDb {

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
