package com.course.bucket.course;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;

import com.course.bucket.category.Category;
import com.course.bucket.course.additionals.CoursePopularity;
import com.course.bucket.course.additionals.Filters;
import com.course.bucket.course.additionals.IncomePerCourse;
import com.course.bucket.course.additionals.MiniCourse;
import com.course.bucket.course.additionals.PopularCourse;
import com.course.bucket.courseextra.CourseRating;
import com.course.bucket.courseextra.PromoCode;
import com.course.bucket.courseextra.Property;
import com.course.bucket.courseextra.faq.FAQ;
import com.course.bucket.courseextra.purchasehistory.PurchaseHistory;
import com.course.bucket.courseextra.review.Review;
import com.course.bucket.database.DB;
import com.course.bucket.language.Language;
import com.course.bucket.person.Student;
import com.course.bucket.person.Teacher;
import com.course.bucket.tools.ToolKit;

import ch.qos.logback.core.filter.Filter;

public class Course {

	String teacherName;
	String teacherUsername;
	Integer id;
	String title;
	String subTitle;
	String description;
	Double mainPrice;
	Double off;
	Date publishDate;
	Date lastUpdate;
	boolean isApproved;
	Teacher teacher;
	// Files imageFile;
	Category mainCategory;
	Category subCategory;

	ArrayList<Language> languages;
	ArrayList<Property> properties;
	Double rating;
	ArrayList<Review> reveiws;

	Integer numOfStudents;
	String[] prerequisites;
	String[] outcomes;

	ArrayList<Week> weeks;
//    CourseContent content;
//    Media promotionalVideo;
	String level;
	PromoCode promo;

	public Course() {

	}

	public Course(Integer id) {
		this.id = id;
		ResultSet rs = DB.executeQuery("SELECT * FROM COURSE WHERE ID = #", id.toString());
		try {
			if (!rs.next()) {
				return;
			}
			title = rs.getString("TITLE");
			subTitle = rs.getString("SUBTITLE");
			mainPrice = rs.getDouble("PRICE");
			off = rs.getDouble("OFFER");
			publishDate = rs.getTimestamp("PUBLISH_DATE");

			isApproved = ToolKit.DBoolToJBool(rs.getString("IS_APPROVED"));
			teacher = new Teacher(rs.getString("TEACHER_ID"));
			teacherName = teacher.getFirstName();
			teacherUsername = teacher.getUsername();
			// imageFile = new Files(rs.getInt("COVER_ID"));
			subCategory = new Category(rs.getInt("CATEGORY_ID"));
			mainCategory = new Category(subCategory.getParentId());

			languages = Language.getLanguages(this);
			properties = Property.getProperties(this);
			weeks = Week.getWeeks(this);

			description = rs.getString("DESCRIPTION");
//            Rating will be added
//            Review will be added
			if (rs.getString("OUTCOMES") != null) {
				outcomes = rs.getString("OUTCOMES").split("><");
			} else {
				outcomes = new String[0];
			}
			if (rs.getString("PREREQUISITES") != null) {
				prerequisites = rs.getString("PREREQUISITES").split("><");
			} else {
				prerequisites = new String[0];
			}
			rs.close();
		} catch (SQLException ex) {
			System.err.println("error in course constructor");
		}
	}

	public static void createNewCourse(Course course) {
		Integer courseId = DB.generateId("COURSE");
//		this.title = title;
//		this.subTitle = subTitle;
//		this.description = description;
//		this.mainPrice = price;
//		this.imageFile = cover;
//		this.subCategory = subCategory;
//		this.mainCategory = subCategory.getParent();
//		this.publishDate = ToolKit.getCurTime();
//		this.isApproved = false;
//		this.teacher = GLOBAL.TEACHER;
//		this.properties = new ArrayList<Property>();

		course.setId(courseId);
		String prerequisites = formatString(course.getPrerequisitives());
		String outcomes = formatString(course.getOutcomes());

		String sql = "INSERT INTO COURSE(ID, TITLE, SUBTITLE, DESCRIPTION, PRICE, OFFER, PUBLISH_DATE, IS_APPROVED, TEACHER_ID, COVER_ID, CATEGORY_ID, PREREQUISITES, OUTCOMES) VALUES(#, '#', '#', '#', #, #, '#', '#', #,NULL,#,'#','#')";
		DB.execute(sql, courseId.toString(), course.getTitle(), course.getSubTitle(), course.getDescription(),
				course.getMainPrice().toString(), course.getOff().toString(),
				ToolKit.JDateToDDate(course.getPublishDate()), ToolKit.JBoolToDBool(course.getIsApproved()),
				course.getTeacherUserame(), course.getSubCategory().getId().toString(), prerequisites, outcomes);

		for (Week week : course.getWeeks()) {
			Integer weekId = DB.generateId("week");
			String weekSql = "insert into week(id,week_no,title,last_update,course_id) values(#,#,'#','#',#)";
			DB.execute(weekSql, weekId.toString(), week.getWeekNo().toString(), week.getTitle(),
					ToolKit.JDateToDDate(week.getLastUpdate()), courseId.toString());
			for (Lecture lecture : week.getLectures()) {
				Integer lectureId = DB.generateId("lecture");
				String lectureSql = "insert into lecture(id,lecture_no,title,last_update,is_preview,week_id,file_id) values(#,#,'#','#','#',#,NULL)";
				DB.execute(lectureSql, lectureId.toString(), lecture.getLectureNo().toString(), lecture.getTitle(),
						ToolKit.JDateToDDate(lecture.getLastUpdate()), ToolKit.JBoolToDBool(lecture.isIsPreview()),
						weekId.toString());
			}
		}

	}

	public static String formatString(String[] strarr) {
		int len = strarr.length;
		String str = "";
		int i = 0;
		for (String unitString : strarr) {
			str += unitString;
			if (i < len - 1)
				str += "><";
		}
		return str;
	}

	public String getTeacherUserame() {
		return teacherUsername;
	}

	public String getTeacherName() {
		return teacherName;
	}

	public Integer getId() {
		return id;
	}

	public boolean getIsApproved() {
		return isApproved;
	}

	public String getTitle() {
		return title;
	}

	public String getSubTitle() {
		return subTitle;
	}

	public void setSubTitle(String subTitle) {
		if (this.subTitle.equals(subTitle)) {
			return;
		}
		this.subTitle = subTitle;
		DB.execute("UPDATE COURSE SET SUBTITLE = '#' WHERE ID = #", subTitle, id.toString());
	}

	public Double getRating() {
		return CourseRating.getValue(this);
	}

	public Teacher getTeacher() {
		return teacher;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}

	public String[] getPrerequisitive() {
		return prerequisites;
	}

	public void setPrerequisitive(String requisitive) {
		this.prerequisites = requisitive.split("><", 0);
		DB.execute("UPDATE COURSE SET PREREQUISITES = '#' WHERE ID = #", requisitive, id.toString());
	}

	public ArrayList<Review> getReveiws() {
		return reveiws;
	}

	public void setReveiws(ArrayList<Review> reveiws) {
		this.reveiws = reveiws;
	}

	public ArrayList<Property> getProperties() {
		return properties;
	}

	public void setProperties(ArrayList<Property> properties) {
		this.properties = properties;
	}

	public Category getSubCategory() {
		return subCategory;
	}

	public void setSubCategory(Category subCategory) {
		if (this.subCategory != null) {
			if (this.subCategory.equals(subCategory)) {
				return;
			}
		}
		this.subCategory = subCategory;
		this.mainCategory = new Category(subCategory.getParentId());
		DB.execute("UPDATE COURSE SET CATEGORY_ID = # WHERE ID = #", subCategory.getId().toString(), id.toString());
	}

	public void setTitle(String title) {
		if (this.title.equals(title)) {
			return;
		}
		this.title = title;
		DB.execute("UPDATE COURSE SET TITLE = '#' WHERE ID = #", title, id.toString());
	}

	public Integer getNumOfStudents() {
		try {
			ResultSet rs = DB.executeQuery("SELECT COUNT(*) FROM PURCHASE_HISTORY WHERE COURSE_ID = #", id.toString());
			rs.next();
			Integer value = rs.getInt("COUNT(*)");
			rs.close();
			return value;
		} catch (SQLException ex) {
			System.err.println("error in getNumOfStudents");
		}
		return 0;
	}

	public void setNumOfStudents(Integer numOfStudents) {
		this.numOfStudents = numOfStudents;
	}

	public Double getMainPrice() {
		return mainPrice;
	}

	public void setMainPrice(Double mainPrice) {
		if (this.mainPrice != null) {
			if (this.mainPrice.equals(mainPrice)) {
				return;
			}
		}
		this.mainPrice = mainPrice;
		DB.execute("UPDATE COURSE SET PRICE = # WHERE ID = #", mainPrice.toString(), id.toString());
	}

	public Double getOff() {
		return off;
	}

	public void setOff(Double off) {
		if (this.off != null) {
			if (this.off.equals(off)) {
				return;
			}
		}
		this.off = off;
		DB.execute("UPDATE COURSE SET OFFER = # WHERE ID = #", off.toString(), id.toString());
	}

	public Category getMainCategory() {
		return mainCategory;
	}

	public Date getDate() {
		return publishDate;
	}

	public Date getLastUpdate() {
		return lastUpdate;
	}

	public void setLastUpdate(Date lastUpdate) {
		this.lastUpdate = lastUpdate;
		DB.execute("UPDATE COURSE SET LAST_UPDATE = # WHERE ID = #", ToolKit.JDateToDDate(lastUpdate), id.toString());
	}

	public ArrayList<Language> getLanguages() {
		return languages;
	}

	public void setLanguages(ArrayList<Language> languages) {
		if (this.languages != null) {
			if (this.languages.equals(languages)) {
				return;
			}
		}
		this.languages = languages;
		deleteCourseLanguage();
		for (Language lang : languages) {
			Integer id = DB.generateId("COURSE_LANGUAGE");
			DB.execute("INSERT INTO COURSE_LANGUAGE VALUES(#, '#', #)", id.toString(), this.id.toString(),
					lang.getId().toString());
		}
	}

	public String[] getOutcomes() {
		return outcomes;
	}

	public void setOutcomes(String outcome) {
		this.outcomes = outcome.split("><", 0);
		DB.execute("UPDATE COURSE SET OUTCOMES = '#' WHERE ID = #", outcome, id.toString());
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		if (this.description.equals(description)) {
			return;
		}
		this.description = description;
		DB.execute("UPDATE COURSE SET DESCRIPTION = '#' WHERE ID = #", description, id.toString());
	}

//    public Files getCourseImage() {
//        return imageFile;
//    }
//
//    public void setCourseImage(Files imageFile) {
//        this.imageFile = imageFile;
//        DB.execute("UPDATE COURSE SET COVER_ID = # WHERE ID = #", imageFile.getId().toString(), id.toString());
//    }
//
	public Date getPublishDate() {
		return publishDate;
	}

	public void setPublishDate(Date publishDate) {
		this.publishDate = publishDate;
	}

	public boolean isIsApproved() {
		return isApproved;
	}

	public void setIsApproved(boolean isApproved) {
		this.isApproved = isApproved;
	}

	public String[] getPrerequisitives() {
		return this.prerequisites;
	}

	public void setPrerequisitives(String[] prerequisites) {
		this.prerequisites = prerequisites;
	}

	public ArrayList<Week> getWeeks() {
		return weeks;
	}

	public void setWeeks(ArrayList<Week> weeks) {
		this.weeks = weeks;
	}

	public void addProperty(Property property) {
		properties.add(property);
	}

	public void deleteCourseLanguage() {
		DB.execute("DELETE FROM COURSE_LANGUAGE WHERE COURSE_ID = #", id.toString());
	}

	public void delete() {
		deleteCourseLanguage();
		for (Property property : properties) {
			property.delete();
		}
		// Delete FAQs
		for (Week week : weeks) {
			week.delete();
		}
		FAQ.delete(this);
		Review.delete(this);
		CourseRating.delete(this);
		PurchaseHistory.delete(this);
		DB.execute("DELETE FROM COURSE WHERE ID = #", id.toString());
		// imageFile.delete();
	}

	public static ArrayList<Course> getApprovedCourses() {
		ArrayList<Course> apCourses = new ArrayList<Course>();
		String sql = "SELECT ID FROM COURSE WHERE IS_APPROVED = 'T' ORDER BY PUBLISH_DATE DESC";
		ResultSet rs = DB.executeQuery(sql);
		try {
			while (rs.next()) {
				int id = Integer.valueOf(rs.getString("ID"));
				Integer ID = new Integer(id);
				apCourses.add(new Course(ID));
			}
			rs.close();
		} catch (SQLException ex) {
			System.err.println("error in getApprovedCourses");
		}
		return apCourses;
	}

	public void loadAllData() {
		weeks = Week.getWeeks(this);
		reveiws = Review.getList(this);
	}

	public Double getCurrentPrice() {
		return getMainPrice() - getMainPrice() * getOff() / 100.0;
	}

	public Integer getNumOfRating() {
		try {
			ResultSet rs = DB.executeQuery("SELECT COUNT(*) FROM RATING WHERE COURSE_ID = #", id.toString());
			rs.next();
			Integer value = rs.getInt("COUNT(*)");
			rs.close();
			return value;
		} catch (SQLException ex) {
			System.err.println("error in getNumOfRating");
		}
		return 0;
	}

	public Integer getRatingOf(Student student) {
		ResultSet rs = DB.executeQuery("SELECT VALUE FROM RATING WHERE COURSE_ID = # AND STUDENT_ID = '#'",
				id.toString(), student.getUsername());
		try {
			if (rs.next()) {
				Integer value = rs.getInt("VALUE");
				rs.close();
				return value;
			}
			rs.close();
		} catch (SQLException ex) {
			System.err.println("error in getRatingOf");
		}
		return 0;
	}

	public boolean isBoughtBy(Student student) {
		try {
			ResultSet rs = DB.executeQuery("SELECT * FROM PURCHASE_HISTORY WHERE COURSE_ID = # AND STUDENT_ID = '#'",
					id.toString(), student.getUsername());
			if (rs.next()) {
				rs.close();
				return true;
			}
		} catch (SQLException ex) {
			System.err.println("error in isBoughtBy");
		}
		return false;
	}

//    public static ArrayList<Course> coursesOf(Teacher teacher) {
//        ArrayList<Course> list = new ArrayList<Course>();
//        try {
//            String sql = "SELECT ID FROM COURSE WHERE IS_APPROVED = 'T' AND TEACHER_ID = '#'";
//            if(ToolKit.getCurrentPerson().getUsername().equals(teacher.getUsername())){
//                sql = "SELECT ID FROM COURSE WHERE TEACHER_ID = '#'";
//            }
//            ResultSet rs = DB.executeQuery(sql, teacher.getUsername());
//            while (rs.next()) {
//                list.add(new Course(rs.getInt("ID")));
//            }
//            rs.close();
//        } catch (SQLException ex) {
//            Logger.getLogger(Course.class.getName()).log(Level.SEVERE, null, ex);
//        }
//        return list;
//    }

	public Integer getNumOfLectures() {
		try {
			ResultSet rs = DB.executeQuery(
					"SELECT COUNT(*) FROM LECTURE WHERE WEEK_ID = ANY(SELECT ID FROM WEEK WHERE COURSE_ID = #)",
					id.toString());
			rs.next();
			Integer value = rs.getInt("COUNT(*)");
			rs.close();
			return value;
		} catch (SQLException ex) {
			System.err.println("error in getNumOfLectures");

		}
		return 0;
	}

	public static ArrayList<Course> getUnapprovedCourses() {
		ArrayList<Course> apCourses = new ArrayList<Course>();
		String sql = "SELECT ID FROM COURSE WHERE IS_APPROVED = 'F'ORDER BY PUBLISH_DATE DESC";
		ResultSet rs = DB.executeQuery(sql);
		try {
			while (rs.next()) {
				int id = Integer.valueOf(rs.getString("ID"));
				Integer ID = new Integer(id);
				apCourses.add(new Course(ID));
			}
			rs.close();
		} catch (SQLException ex) {
			System.err.println("error in getUnapprovedCourses");
		}
//        System.out.println("inside unapproved course : total course = " + apCourses.size());
		return apCourses;
	}

	public static void approveCourse(Integer id) {
		String sql = "UPDATE COURSE SET IS_APPROVED = 'T' WHERE ID = #";
		DB.execute(sql, id.toString());
	}

	public static void unapproveCourse(Integer id) {
		String sql = "UPDATE COURSE SET IS_APPROVED = 'F' WHERE ID = #";
		DB.execute(sql, id.toString());
	}

	public static ArrayList<Course> getList(Category category) {
		ArrayList<Course> list = new ArrayList();
		try {
			ResultSet rs = DB.executeQuery(
					"SELECT ID FROM COURSE WHERE IS_APPROVED = 'T' AND CATEGORY_ID = ANY(SELECT ID FROM CATEGORY WHERE PARENT_ID = # OR ID = #) AND IS_APPROVED = 'T'",
					category.getId().toString(), category.getId().toString());
			while (rs.next()) {
				list.add(new Course(rs.getInt("ID")));
			}
			rs.close();
		} catch (SQLException ex) {
			System.err.println("error in getList");
		}
		return list;
	}

	public static ArrayList<Course> searchCourse(String sql) {
		ArrayList<Course> courses = new ArrayList<Course>();
		ResultSet rs;
		try {
			rs = DB.executeQuery(sql);
			while (rs.next()) {
				Integer id = new Integer(rs.getString("ID"));
				courses.add(new Course(id));
			}
			rs.close();
		} catch (SQLException ex) {
			System.err.println("error in searchCourse");
		}
		return courses;
	}

	private static ArrayList<Course> getList(String sql) {
		ArrayList<Course> list = new ArrayList<Course>();
		try {
			ResultSet rs = DB.executeQuery(sql);
			while (rs.next()) {
				list.add(new Course(rs.getInt("ID")));
			}
			rs.close();
		} catch (SQLException ex) {
			System.err.println("error in getList");
		}
		return list;
	}

	public static ArrayList<Course> getBestSellerCourse() {
		return getList("SELECT ID, NUM_OF_STUDENT(ID) NUM FROM COURSE WHERE IS_APPROVED = 'T' ORDER BY NUM DESC");
	}

	public static ArrayList<Course> getMostReivewedCourse() {
		return getList("SELECT ID, GET_REVIEW(ID) NUM FROM COURSE WHERE IS_APPROVED = 'T' ORDER BY NUM DESC");
	}

	public static ArrayList<Course> getNewReleasedCourse() {
		return getList("SELECT ID FROM COURSE WHERE IS_APPROVED = 'T' ORDER BY PUBLISH_DATE DESC");
	}

	public static ArrayList<Course> getMostDiscountCourse() {
		return getList("SELECT ID FROM COURSE WHERE IS_APPROVED = 'T' ORDER BY OFFER DESC");
	}

	public static ArrayList<Course> getFreeCourse() {
		return getList(
				"SELECT ID FROM COURSE WHERE IS_APPROVED = 'T' AND (PRICE - PRICE*OFFER/100) = 0 ORDER BY PUBLISH_DATE DESC");
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

	public static ArrayList<PopularCourse> getPopularCourseAdmin() {
		ArrayList<PopularCourse> popularCourses = new ArrayList<>();

		String sql = "select a.name , a.rating, a.rating_count, b.std_count ,\n" + "c.review_count\n" + "from\n" + "(\n"
				+ "	select  b.parent_id,ct.name,b.rating, b.rating_count\n" + "	from \n" + "	(\n"
				+ "		select  ct.parent_id, avg(rt.value) as \n"
				+ "		rating, count(rt.student_id) as rating_count\n" + "		from course c, rating rt,category ct\n"
				+ "		where c.id = rt.course_id and ct.id = c.category_id\n" + "		group by ct.parent_id\n"
				+ "		order by ct.parent_id\n" + "	)  b,category ct\n" + "	where b.parent_id = ct.id\n"
				+ "	group by b.parent_id,ct.name ,b.rating, b.rating_count\n" + ") a,\n" + "(\n"
				+ "select  ct.parent_id, count(ph.student_id) as std_count\n"
				+ "	from course c, purchase_history ph,category ct\n"
				+ "	where c.id = ph.course_id and ct.id = c.category_id\n" + "	group by ct.parent_id\n"
				+ "	order by ct.parent_id\n" + ") b,\n" + "(\n"
				+ "select  ct.parent_id, count(r.student_id) as review_count\n"
				+ "	from course c, review r,category ct\n" + "	where c.id = r.course_id and ct.id = c.category_id\n"
				+ "	group by ct.parent_id\n" + "	order by ct.parent_id	\n" + ") c\n"
				+ "where a.parent_id = b.parent_id and a.parent_id = c.parent_id";
		ResultSet rs = DB.executeQuery(sql);
		try {
			while (rs.next()) {
				popularCourses.add(new PopularCourse(rs.getString("name"), rs.getInt("std_count"),
						rs.getInt("review_count"), rs.getDouble("rating"), rs.getInt("rating_count")));
			}
			rs.close();
			return popularCourses;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	public static ArrayList<IncomePerCourse> getIncomePerCourse() {

		ArrayList<IncomePerCourse> totalIncome = new ArrayList<>();
		String sql = "select c.id,c.title as title,sum(cost) as income\n" + "from course c, purchase_history ph\n"
				+ "where c.id = ph.course_id\n" + "group by c.id,c.title ";
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

	public static ArrayList<MiniCourse> getFilteredCourses(Filters filters) {

		String[] searchKeys = filters.getSearchKey().split(" ");
		String where = " where ";
		int len = searchKeys.length;
		for (int i = 0; i < len; i++) {
			where += (" lower(title) like '%" + searchKeys[i] + "%' or lower(subtitle) like '%" + searchKeys[i] + "%'");
			if (i < len - 1)
				where += " or ";
		}
		String innerSql = " ( select * from course " + where + " ) c ";

		String categoryId = "";
		String languageId = "";
		String teacherId = "";
		len = filters.getCategories().size();
		for (int i = 0; i < len; i++) {
			categoryId += filters.getCategories().get(i).toString();
			if (i < len - 1)
				categoryId += ", ";
		}

		len = filters.getLanguages().size();
		for (int i = 0; i < len; i++) {
			languageId += filters.getLanguages().get(i).toString();
			if (i < len - 1)
				languageId += ", ";
		}

		len = filters.getTeachers().size();
		for (int i = 0; i < len; i++) {
			teacherId += ("'" + filters.getTeachers().get(i) + "'");
			if (i < len - 1)
				teacherId += ", ";
		}
		boolean a = !filters.getLanguages().isEmpty();
		boolean b = !filters.getCategories().isEmpty();
		boolean c = !filters.getTeachers().isEmpty();
		boolean d = !filters.getPrice().isEmpty();
		boolean e = !filters.getRating().isEmpty();

		String selectStatement = "select unique(c.id) ";
		String fromStatement = "from " + innerSql;
		String whereStatement = "where";
		
		if (a) {
			fromStatement += ", course_language cl";
			whereStatement += "\n c.id = cl.course_id ";
			whereStatement += ("\n and cl.language_id in ( " + languageId + " ) ");
		}
		if (b) {
			if (!whereStatement.equals("where")) {
				whereStatement += "\n and ";
			}
			whereStatement += (" c.category_id in ( " + categoryId + " )");
		}
		if (c) {
			if (!whereStatement.equals("where")) {
				whereStatement += "\n and ";
			}
			whereStatement += (" c.teacher_id in ( " + teacherId + " )");
		}
		if (d) {
			if (!whereStatement.equals("where")) {
				whereStatement += "\n and ";
			}
			String low = filters.getPrice().get(0).toString();
			String high = filters.getPrice().get(1).toString();
			whereStatement += (" (c.price * (100 - c.offer)/100) between " + low + " and " + high + " ");
		}
		if (e) {
			if (!whereStatement.equals("where")) {
				whereStatement += "\n and ";
			}
			String low = filters.getRating().get(0).toString();
			String high = filters.getRating().get(1).toString();
			whereStatement += " (select nvl(avg(value),0.0) \n" + "		From rating\n"
					+ "		Where course_id = c.id)";
			whereStatement += (" between " + low + " and " + high + " ");
		}

		String orderStatement = "";
		switch (filters.getSorting()) {
		case "NewReleased":
			selectStatement += " , c.publish_date ";
			orderStatement += " order by c.publish_date desc";
			break;
		case "BestSeller":
			selectStatement += (" , (select nvl(count(course_id),0) \n" + "		From purchase_history\n"
					+ "		Where course_id = c.id) as count ");
			orderStatement += " order by count desc";
			break;
		case "MostReviewed":
			selectStatement += (" , (select nvl(count(course_id),0) \n" + "		From review\n"
					+ "		Where course_id = c.id) as count ");
			orderStatement += " order by count desc";
			break;
		case "MostRated":
			selectStatement += (" , (select nvl(count(course_id),0) \n" + "		From rating\n"
					+ "		Where course_id = c.id) as count ");
			orderStatement += " order by count desc";
			break;
		case "AscendingPrice":
			selectStatement += " , (c.price * (100 - c.offer)/100) as price ";
			orderStatement += " order by price asc";
			break;
		case "DescendingPrice":
			selectStatement += " , (c.price * (100 - c.offer)/100) as price ";
			orderStatement += " order by price desc";
			break;
		}
		String sql = selectStatement + " \n" + fromStatement + "\n";
		if (!whereStatement.equals("where"))
			sql += whereStatement;
		sql = sql + "\n" + orderStatement;
		
		String finalSql = " select c.id, c.title ,\n"
				+ "	( select concat(concat(first_name,' '),last_name) \n"
				+ "	  from person where c.teacher_id = id\n"
				+ "	) as name ,\n"
				+ "	nvl(( select avg(value)\n"
				+ "	  from rating \n"
				+ "	  where course_id = c.id \n"
				+ "	  group by course_id\n"
				+ "	),0.0) as rating ,\n"
				+ "	nvl(( select count(course_id)\n"
				+ "	  from rating \n"
				+ "	  where course_id = c.id\n"
				+ "	  group by course_id\n"
				+ "	),0) as rating_count ,\n"
				+ "	c.price, (c.price *(100 - c.offer)/100) as offer_price\n"
				+ "	\n"
				+ "from course c , \n"+" ( "+sql + " ) a\n"
				+ "where c.id = a.id and c.is_approved = 'T'";
		
		//System.err.println(finalSql);
	 ResultSet rs = DB.executeQuery(finalSql);
	 ArrayList<MiniCourse> miniCourses = new ArrayList<>();
	 try {
		while(rs.next()) {
			 miniCourses.add(new MiniCourse(rs.getInt("id"),rs.getString("title"),rs.getString("name"),
					 rs.getDouble("rating"),rs.getInt("rating_count"),rs.getDouble("price"),rs.getDouble("offer_price")));
		 }
		return miniCourses;
	} catch (SQLException e1) {
		// TODO Auto-generated catch block
		e1.printStackTrace();
	}

		return null;
	}

}
