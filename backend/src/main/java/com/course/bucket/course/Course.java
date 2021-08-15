package com.course.bucket.course;


import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;

import com.course.bucket.category.Category;
import com.course.bucket.course.additionals.CarouselCourse;
import com.course.bucket.course.additionals.CourseApproval;
import com.course.bucket.course.additionals.CoursePopularity;
import com.course.bucket.course.additionals.Filters;
import com.course.bucket.course.additionals.IncomePerCourse;
import com.course.bucket.course.additionals.MiniCourse;
import com.course.bucket.course.additionals.PopularCategory;
import com.course.bucket.courseextra.CourseRating;
import com.course.bucket.courseextra.PromoCode;
import com.course.bucket.courseextra.Property;
import com.course.bucket.courseextra.PublicResponse;
import com.course.bucket.courseextra.faq.FAQ;
import com.course.bucket.courseextra.faq.FaqList;
import com.course.bucket.courseextra.purchasehistory.PurchaseHistory;
import com.course.bucket.courseextra.review.Review;
import com.course.bucket.courseextra.review.ReviewList;
import com.course.bucket.database.DB;
import com.course.bucket.files.Files;
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
	Files cover;
	Category mainCategory;
	Category subCategory;

	ArrayList<Language> languages;
	ArrayList<Property> properties;
	Double rating;
	ArrayList<Review> reveiws;

	Integer numOfStudents;
	ArrayList<String> prerequisites;
	ArrayList<String> outcomes;

	ArrayList<Week> weeks;
//    CourseContent content;
//    Media promotionalVideo;
	String level;
	PromoCode promo;

	public Course() {
		this.rating = 0.0;
	}

	public String getTeacherUsername() {
		return teacherUsername;
	}

	public void setTeacherUsername(String teacherUsername) {
		this.teacherUsername = teacherUsername;
	}

	public ArrayList<String> getPrerequisites() {
		return prerequisites;
	}

	public void setPrerequisites(ArrayList<String> prerequisites) {
		this.prerequisites = prerequisites;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}

	public PromoCode getPromo() {
		return promo;
	}

	public void setPromo(PromoCode promo) {
		this.promo = promo;
	}

	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName;
	}

	public void setApproved(boolean isApproved) {
		this.isApproved = isApproved;
	}

	public void setMainCategory(Category mainCategory) {
		this.mainCategory = mainCategory;
	}

	public void setRating(Double rating) {
		this.rating = rating;
	}

	public void setOutcomes(ArrayList<String> outcomes) {
		this.outcomes = outcomes;
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
			cover = new Files(rs.getInt("COVER_ID"));
			subCategory = new Category(rs.getInt("CATEGORY_ID"));
			mainCategory = new Category(subCategory.getParentId());

			languages = Language.getLanguages(this);
			properties = Property.getProperties(this);
			weeks = Week.getWeeks(this);

			description = rs.getString("DESCRIPTION");
//            Rating will be added
//            Review will be added
			if (rs.getString("OUTCOMES") != null) {
				outcomes = new ArrayList();
				String[] ara = rs.getString("OUTCOMES").split("><");
				for (int i = 0; i < ara.length; i++) {
					outcomes.add(ara[i]);
				}
			} else {
				outcomes = new ArrayList();
			}
			if (rs.getString("PREREQUISITES") != null) {
				prerequisites = new ArrayList();
				String[] ara = rs.getString("PREREQUISITES").split("><");
				for (int i = 0; i < ara.length; i++) {
					prerequisites.add(ara[i]);
				}
			} else {
				prerequisites = new ArrayList();
			}
			rs.close();
		} catch (SQLException ex) {
			System.err.println("error in course constructor");
		}
	}

	public static void createNewCourse(String teacherUsername, Course course) {
		Integer courseId = DB.generateId("COURSE");
		course.setId(courseId);

		Files.createNewFile(course.cover);
		String prerequisites = formatString(course.getPrerequisites());
		String outcomes = formatString(course.getOutcomes());

		DB.execute("" + "INSERT INTO COURSE(" + "ID, TITLE, SUBTITLE, " + "DESCRIPTION, PRICE, OFFER, "
				+ "PUBLISH_DATE, IS_APPROVED, TEACHER_ID, " + "COVER_ID, CATEGORY_ID, PREREQUISITES, " + "OUTCOMES"
				+ ") VALUES(" + "#, '#', '#', " + "'#', #, #, " + "#, '#', '#'," + "#, #,'#'," + "'#')",
				courseId.toString(), course.getTitle(), course.getSubTitle(),

				course.getDescription(), course.getMainPrice().toString(), course.getOff().toString(),

				ToolKit.getCurTimeDB(), ToolKit.JBoolToDBool(false), teacherUsername,

				course.cover.getId().toString(), course.getSubCategory().getId().toString(), prerequisites,

				outcomes);

		// After Course Insert
		course.weeks.forEach(week -> {
			week.upload(courseId);
		});
		course.uploadLanguages();
		course.properties.forEach(property -> {
			property.upload(courseId);
		});
		notificationCourseUpload(course.getTeacherUserame(), courseId);
		System.out.println("Course upload done of id: " + courseId);
	}

	public static void update(Course course) {
		Course currentCourseState = new Course(course.getId());
		course.cover.update();
		String prerequisites = formatString(course.getPrerequisites());
		String outcomes = formatString(course.getOutcomes());

		DB.execute(
				"" + "UPDATE COURSE SET " + "TITLE = '#', " + "SUBTITLE = '#', " + "DESCRIPTION = '#', " + "PRICE = #, "
						+ "OFFER = #, " + "CATEGORY_ID = #, " + "PREREQUISITES = '#', " + "OUTCOMES = '#' "
						+ "WHERE ID = #",
				course.getTitle(), course.getSubTitle(), course.description, course.getMainPrice().toString(),
				course.getOff().toString(), course.getSubCategory().getId().toString(), prerequisites, outcomes,
				course.getId().toString());

		// After Course Update
		for (Week week : currentCourseState.weeks) {
			boolean found = false;
			for (Week updatedWeek : course.weeks) {
				if (updatedWeek.getId() == week.getId()) {
					found = true;
					for (Lecture lecture : week.getLectures()) {
						boolean lecFound = false;
						for (Lecture updatedLecture : updatedWeek.getLectures()) {
							if (updatedLecture.getId() == lecture.getId()) {
								lecFound = true;
								break;
							}
						}
						if (!lecFound)
							lecture.delete();
					}
				}
			}
			if (!found)
				week.delete();
		}

		course.weeks.forEach(week -> {
			if (week.getId() == null) {
				week.upload(course.getId());
			} else {
				week.update();
			}
		});
		course.updateLanguages();
		course.properties.forEach(property -> {
			property.update();
		});
	}

	public static String formatString(ArrayList<String> strarr) {
		if (strarr == null)
			return "";
		int len = strarr.size();
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
//		if (this.subTitle.equals(subTitle)) {
//			return;
//		}
		this.subTitle = subTitle;
//		DB.execute("UPDATE COURSE SET SUBTITLE = '#' WHERE ID = #", subTitle, id.toString());
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
//		if (this.subCategory != null) {
//			if (this.subCategory.equals(subCategory)) {
//				return;
//			}
//		}
		this.subCategory = subCategory;
//		this.mainCategory = new Category(subCategory.getParentId());
//		DB.execute("UPDATE COURSE SET CATEGORY_ID = # WHERE ID = #", subCategory.getId().toString(), id.toString());
	}

	public void setTitle(String title) {
//		if (this.title.equals(title)) {
//			return;
//		}
		this.title = title;
//		DB.execute("UPDATE COURSE SET TITLE = '#' WHERE ID = #", title, id.toString());
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
//		if (this.mainPrice != null) {
//			if (this.mainPrice.equals(mainPrice)) {
//				return;
//			}
//		}
		this.mainPrice = mainPrice;
//		DB.execute("UPDATE COURSE SET PRICE = # WHERE ID = #", mainPrice.toString(), id.toString());
	}

	public Double getOff() {
		return off;
	}

	public void setOff(Double off) {
//		if (this.off != null) {
//			if (this.off.equals(off)) {
//				return;
//			}
//		}
		this.off = off;
//		DB.execute("UPDATE COURSE SET OFFER = # WHERE ID = #", off.toString(), id.toString());
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
//		DB.execute("UPDATE COURSE SET LAST_UPDATE = # WHERE ID = #", ToolKit.JDateToDDate(lastUpdate), id.toString());
	}

	public ArrayList<Language> getLanguages() {
		return languages;
	}

	public void setLanguages(ArrayList<Language> languages) {
//		if (this.languages != null) {
//			if (this.languages.equals(languages)) {
//				return;
//			}
//		}
		this.languages = languages;
//		deleteCourseLanguage();
//		for (Language lang : languages) {
//			Integer id = DB.generateId("COURSE_LANGUAGE");
//			DB.execute("INSERT INTO COURSE_LANGUAGE VALUES(#, '#', #)", id.toString(), this.id.toString(),
//					lang.getId().toString());
//		}
	}

	public ArrayList<String> getOutcomes() {
		return outcomes;
	}

//	public void setOutcomes(String outcome) {
//		this.outcomes = outcome.split("><", 0);
//		DB.execute("UPDATE COURSE SET OUTCOMES = '#' WHERE ID = #", outcome, id.toString());
//	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
//		if (this.description.equals(description)) {
//			return;
//		}
		this.description = description;
//		DB.execute("UPDATE COURSE SET DESCRIPTION = '#' WHERE ID = #", description, id.toString());
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

	public Files getCover() {
		return cover;
	}

	public void setCover(Files cover) {
		this.cover = cover;
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
		this.deleteCourseLanguage();
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
		cover.delete();
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

		String finalSql = " select c.id, c.title ,\n" + "	( select concat(concat(first_name,' '),last_name) \n"
				+ "	  from person where c.teacher_id = id\n" + "	) as name ,\n" + "	nvl(( select avg(value)\n"
				+ "	  from rating \n" + "	  where course_id = c.id \n" + "	  group by course_id\n"
				+ "	),0.0) as rating ,\n" + "	nvl(( select count(course_id)\n" + "	  from rating \n"
				+ "	  where course_id = c.id\n" + "	  group by course_id\n" + "	),0) as rating_count ,\n"
				+ "	c.price, (c.price *(100 - c.offer)/100) as offer_price\n" + "	\n" + "from course c , \n" + " ( "
				+ sql + " ) a\n" + "where c.id = a.id and c.is_approved = 'T'";

		// System.err.println(finalSql);
		ResultSet rs = DB.executeQuery(finalSql);
		ArrayList<MiniCourse> miniCourses = new ArrayList<>();
		try {
			while (rs.next()) {
				miniCourses.add(new MiniCourse(rs.getInt("id"), rs.getString("title"), rs.getString("name"),
						rs.getDouble("rating"), rs.getInt("rating_count"), rs.getDouble("price"),
						rs.getDouble("offer_price")));
			}
			return miniCourses;
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}

		return null;
	}

	public static String getMiniCourseSql(String sql) {
		String finalSql = " select c.id, c.title ,\n" + "	( select concat(concat(first_name,' '),last_name) \n"
				+ "	  from person where c.teacher_id = id\n" + "	) as name ,\n" + "	nvl(( select avg(value)\n"
				+ "	  from rating \n" + "	  where course_id = c.id \n" + "	  group by course_id\n"
				+ "	),0.0) as rating ,\n" + "	nvl(( select count(course_id)\n" + "	  from rating \n"
				+ "	  where course_id = c.id\n" + "	  group by course_id\n" + "	),0) as rating_count ,\n"
				+ "	c.price, (c.price *(100 - c.offer)/100) as offer_price\n" + " from ( " + sql + " ) c";
		return finalSql;
	}

	public static CarouselCourse getCarouselCourse() {
		CarouselCourse cc;
		ArrayList<MiniCourse> newReleased = new ArrayList<>();
		ArrayList<MiniCourse> bestSeller = new ArrayList<>();
		ArrayList<MiniCourse> mostReviewed = new ArrayList<>();
		ArrayList<MiniCourse> mostRated = new ArrayList<>();
		ArrayList<MiniCourse> free = new ArrayList<>();

		String sql = getMiniCourseSql(
				" SELECT * FROM course WHERE publish_date BETWEEN CURRENT_DATE-7 AND CURRENT_DATE ");
		ResultSet rs = DB.executeQuery(sql);
		try {
			if (rs != null) {
				while (rs.next()) {
					newReleased.add(new MiniCourse(rs.getInt("id"), rs.getString("title"), rs.getString("name"),
							rs.getDouble("rating"), rs.getInt("rating_count"), rs.getDouble("price"),
							rs.getDouble("offer_price")));
				}
			}
			sql = getMiniCourseSql("SELECT\n" + "	c.id,\n" + "	c.title,\n" + "	c.price,\n" + "	c.offer,\n"
					+ "	c.teacher_id ,\n"
					+ "	( SELECT count( course_id ) FROM purchase_history WHERE course_id = c.id ) AS count \n"
					+ "FROM\n"
					+ "	( SELECT * FROM course WHERE id IN ( SELECT UNIQUE ( course_id ) FROM purchase_history ) ) c \n"
					+ "ORDER BY\n" + "	count DESC");
			rs = DB.executeQuery(sql);
			while (rs.next()) {
				bestSeller.add(new MiniCourse(rs.getInt("id"), rs.getString("title"), rs.getString("name"),
						rs.getDouble("rating"), rs.getInt("rating_count"), rs.getDouble("price"),
						rs.getDouble("offer_price")));
			}
			sql = getMiniCourseSql(
					"SELECT\n" + "	c.id,\n" + "	c.title,\n" + "	c.price,\n" + "	c.offer,\n" + "	c.teacher_id ,\n"
							+ "	( SELECT count( course_id ) FROM rating WHERE course_id = c.id ) AS count \n" + "FROM\n"
							+ "	( SELECT * FROM course WHERE id IN ( SELECT UNIQUE ( course_id ) FROM rating ) ) c \n"
							+ "ORDER BY\n" + "	count DESC");
			rs = DB.executeQuery(sql);
			while (rs.next()) {
				mostRated.add(new MiniCourse(rs.getInt("id"), rs.getString("title"), rs.getString("name"),
						rs.getDouble("rating"), rs.getInt("rating_count"), rs.getDouble("price"),
						rs.getDouble("offer_price")));
			}

			sql = getMiniCourseSql(
					"SELECT\n" + "	c.id,\n" + "	c.title,\n" + "	c.price,\n" + "	c.offer,\n" + "	c.teacher_id ,\n"
							+ "	( SELECT count( course_id ) FROM review WHERE course_id = c.id ) AS count \n" + "FROM\n"
							+ "	( SELECT * FROM course WHERE id IN ( SELECT UNIQUE ( course_id ) FROM review ) ) c \n"
							+ "ORDER BY\n" + "	count DESC");
			rs = DB.executeQuery(sql);
			while (rs.next()) {
				mostReviewed.add(new MiniCourse(rs.getInt("id"), rs.getString("title"), rs.getString("name"),
						rs.getDouble("rating"), rs.getInt("rating_count"), rs.getDouble("price"),
						rs.getDouble("offer_price")));
			}

			sql = getMiniCourseSql(
					"SELECT\n" + "	c.id,\n" + "	c.title,\n" + "	c.price,\n" + "	c.offer \n" + "	c.teacher_id ,\n"
							+ "FROM\n" + "	course c \n" + "WHERE\n" + "	( c.price * ( 100-c.offer ) / 100 ) = 0.0");
			rs = DB.executeQuery(sql);
			while (rs.next()) {
				free.add(new MiniCourse(rs.getInt("id"), rs.getString("title"), rs.getString("name"),
						rs.getDouble("rating"), rs.getInt("rating_count"), rs.getDouble("price"),
						rs.getDouble("offer_price")));
			}

			rs.close();
			cc = new CarouselCourse(newReleased, bestSeller, mostReviewed, mostRated, free);
			return cc;

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;

	}

	public static void notificationCourseUpload(String fromId, Integer courseId) {
		Integer id = DB.generateId("notification");
		String sql = "insert into notification values('#', 'admin', #, '#', 'F', #, 'COURSEUPLOAD' ";
		DB.execute(sql, id.toString(), fromId, ToolKit.JDateToDDate(new Date()), courseId.toString());
	}

	public void uploadLanguages() {
		for (Language lang : languages) {
			Integer id = DB.generateId("COURSE_LANGUAGE");
			DB.execute("INSERT INTO COURSE_LANGUAGE VALUES(#, #, #)", id.toString(), this.id.toString(),
					lang.getId().toString());
		}
	}

	public void updateLanguages() {
		this.deleteCourseLanguage();
		this.uploadLanguages();
	}

	public static Integer enrolledStudentCount(Integer courseId) {
		ResultSet rs = DB.executeQuery("select nvl(count(*),0) count  from purchase_history where course_id = #",
				courseId.toString());
		try {
			if (rs.next())
				return rs.getInt("count");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	public static Integer ratingCount(Integer courseId) {
		ResultSet rs = DB.executeQuery("select nvl(count(*),0) count  from rating where course_id = #",
				courseId.toString());
		try {
			if (rs.next())
				return rs.getInt("count");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	public static Double avgRatingValue(Integer courseId) {
		ResultSet rs = DB.executeQuery("select nvl(avg(value),0) rating  from rating where course_id = #",
				courseId.toString());
		try {
			if (rs.next())
				return rs.getDouble("rating");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	public static ArrayList<Integer> ratingByNumberList(Integer courseId) {
		ArrayList<Integer> ratingsByNumber = new ArrayList<>();
		String sql = "SELECT c.id,(\r\n"
				+ "SELECT nvl(count(value),0) FROM rating rt WHERE value=1 AND c.id=rt.course_id) AS one,(\r\n"
				+ "SELECT nvl(count(value),0) FROM rating rt WHERE value=2 AND c.id=rt.course_id) AS two,(\r\n"
				+ "SELECT nvl(count(value),0) FROM rating rt WHERE value=3 AND c.id=rt.course_id) AS three,(\r\n"
				+ "SELECT nvl(count(value),0) FROM rating rt WHERE value=4 AND c.id=rt.course_id) AS four,(\r\n"
				+ "SELECT nvl(count(value),0) FROM rating rt WHERE value=5 AND c.id=rt.course_id) AS five FROM course c WHERE c.id= #";
		ResultSet rs = DB.executeQuery(sql, courseId.toString());
		try {
			if (rs.next()) {
				ratingsByNumber.add(0);
				ratingsByNumber.add(rs.getInt("one"));
				ratingsByNumber.add(rs.getInt("two"));
				ratingsByNumber.add(rs.getInt("three"));
				ratingsByNumber.add(rs.getInt("four"));
				ratingsByNumber.add(rs.getInt("five"));
			}
			return ratingsByNumber;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	public static PublicResponse getPublicResponse(Integer courseId) {

		Integer enrolledStudentCount = Course.enrolledStudentCount(courseId);
		ArrayList<Integer> ratingByNumber = ratingByNumberList(courseId);
		Double ratingValue = Course.avgRatingValue(courseId);
		Integer ratingCount = Course.ratingCount(courseId);
		ArrayList<ReviewList> reviews = Review.getReviewListCourse(courseId);
		ArrayList<FaqList> faqs = FAQ.getFaqListCourse(courseId);
		return new PublicResponse(enrolledStudentCount, ratingByNumber, ratingValue, ratingCount, reviews, faqs);
	}

	public Course getCourseAfterAuthentication(String username, Integer courseId) {
		String sql = "select teacher_id person from course where id = # and teacher_id = '#'\r\n" + "union\r\n"
				+ "select student_id person from purchase_history where course_id = #  and student_id = '#'\r\n"
				+ "union \r\n" + "select id person from admin where id = '#'\r\n" + "	";
		ResultSet rs = DB.executeQuery(sql, courseId.toString(), username, courseId.toString(), username, username);
		try {
			if (rs.next()) {
				return new Course(courseId);
			}
			else {
				Course course  = new Course(courseId);
				for(Week week : course.getWeeks())
				{
					for(Lecture lecture : week.getLectures())
					{
						if(!lecture.isPreview)
						{
							lecture.setFile(null);
						}
							
					}
				}
				return course;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;

	}
}
