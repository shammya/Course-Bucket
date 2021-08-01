package com.course.bucket.courseextra.faq;

import java.util.ArrayList;
import java.util.Date;

public class FaqList {

	private String courseTitle;
	private String courseSubtitle;
	private String courseImage;
	private ArrayList<FaqInfo> faqInfos = new ArrayList<>();

	public FaqList() {

	}

	public FaqList(String courseTitle, String courseSubtitle, String courseImage, ArrayList<FaqInfo> faqInfos) {
		super();
		this.courseTitle = courseTitle;
		this.courseSubtitle = courseSubtitle;
		this.courseImage = courseImage;
		this.faqInfos = faqInfos;
	}

	public String getCourseTitle() {
		return courseTitle;
	}

	public void setCourseTitle(String courseTitle) {
		this.courseTitle = courseTitle;
	}

	public String getCourseSubtitle() {
		return courseSubtitle;
	}

	public void setCourseSubtitle(String courseSubtitle) {
		this.courseSubtitle = courseSubtitle;
	}

	public String getCourseImage() {
		return courseImage;
	}

	public void setCourseImage(String courseImage) {
		this.courseImage = courseImage;
	}

	public ArrayList<FaqInfo> getFaqInfos() {
		return faqInfos;
	}

	public void setFaqInfos(ArrayList<FaqInfo> faqInfos) {
		this.faqInfos = faqInfos;
	}

	
	
	

}

class FaqInfo {
	
	private String studentName;
	private String studentImage;
	private String teacherName;
	private String teacherImage;
	private String question;
	private Date questionDate;
	private String answer;
	private Date answerDate;

	public FaqInfo() {

	}

	public FaqInfo(String studentName, String studentImage, String teacherName, String teacherImage, String question,
			Date questionDate, String answer, Date answerDate) {
		super();
		this.studentName = studentName;
		this.studentImage = studentImage;
		this.teacherName = teacherName;
		this.teacherImage = teacherImage;
		this.question = question;
		this.questionDate = questionDate;
		this.answer = answer;
		this.answerDate = answerDate;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public String getStudentImage() {
		return studentImage;
	}

	public void setStudentImage(String studentImage) {
		this.studentImage = studentImage;
	}

	public String getTeacherName() {
		return teacherName;
	}

	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName;
	}

	public String getTeacherImage() {
		return teacherImage;
	}

	public void setTeacherImage(String teacherImage) {
		this.teacherImage = teacherImage;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public Date getQuestionDate() {
		return questionDate;
	}

	public void setQuestionDate(Date questionDate) {
		this.questionDate = questionDate;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public Date getAnswerDate() {
		return answerDate;
	}

	public void setAnswerDate(Date answerDate) {
		this.answerDate = answerDate;
	}

}
