package com.course.bucket.person;


import java.io.Serializable;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Vector;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.course.bucket.country.Country;
import com.course.bucket.course.Course;
import com.course.bucket.creditcard.CreditCard;
import com.course.bucket.database.DB;
import com.course.bucket.files.Files;
import com.course.bucket.language.Language;
import com.course.bucket.tools.HashPassword;
import com.course.bucket.tools.ToolKit;



public class Person {

	public enum AccountType implements Serializable {
		Admin("Admin"), Student("Student"), Teacher("Teacher");

		String name;

		private AccountType(String name) {
			this.name = name;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}
	}

	AccountType accountType;
	String username = "";
	String email = "";
	String password = "";
	String firstName = "";
	String lastName = "";
	Date dob;
	String institution = "";
	String fbURL = "";
	String linkedInURL = "";
	Date signupDate;
	String about = "";
	Country country;
	Files photo;
	CreditCard card;
	String youtubeURL = "";
	String website = "";
	List<Language> languages;

	public Person() {

	}

	public Person(String username) {
		this.username = username;
		ResultSet rs = DB.executeQuery("SELECT * FROM PERSON WHERE ID = '#'", username);
		try {
			if (rs.next()) {
				this.email = rs.getString("EMAIL");
				this.firstName = rs.getString("FIRST_NAME");
				this.lastName = rs.getString("LAST_NAME");
				this.dob = rs.getTimestamp("DOB");
				this.signupDate = rs.getTimestamp("SIGNUP_DATE");
				this.about = rs.getString("ABOUT");
				if (rs.getString("INSTITUTION") != null) {
					this.institution = rs.getString("INSTITUTION");
				}
				if (rs.getString("FB_URL") != null) {
					this.fbURL = rs.getString("FB_URL");
				}
				if (rs.getString("LINKEDIN_URL") != null) {
					this.linkedInURL = rs.getString("LINKEDIN_URL");
				}
				if (rs.getString("YOUTUBE_URL") != null) {
					this.youtubeURL = rs.getString("YOUTUBE_URL");
				}
				if (rs.getString("WEBSITE") != null) {
					this.website = rs.getString("WEBSITE");
				}
				if (rs.getInt("COUNTRY_ID") != 0) {
					this.country = new Country(rs.getInt("COUNTRY_ID"));
				}
				if (rs.getInt("PHOTO_ID") != 0) {
					this.photo = new Files(rs.getInt("PHOTO_ID"));
				}
				if (rs.getInt("CARD_ID") != 0) {
					this.card = new CreditCard(rs.getInt("CARD_ID"));
				}
				loadLanguages();
				accountType = AccountType.valueOf(Person.getRole(username));

				rs.close();
			}
		} catch (SQLException ex) {
			Logger.getLogger(Person.class.getName()).log(Level.SEVERE, null, ex);
		}
	}

	public Person(AccountType accountType, String username, String email, String password, String firstName,
			String lastName, String about, Date dob) {
		HashPassword hp = new HashPassword();
		this.password = hp.hash(password);
		System.out.println(this.password);
		this.accountType = accountType;
		this.username = username;
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.about = about;
		this.dob = dob;

		DB.execute(
				"INSERT INTO PERSON(ID, EMAIL, PASSWORD, FIRST_NAME, LAST_NAME, SIGNUP_DATE, ABOUT, DOB)"
						+ " VALUES('#', '#', '" + this.password + "', '#', '#', #, '#', #)",
				username, email, firstName, lastName, ToolKit.getCurTimeDB(), about, ToolKit.JDateToDDate(dob));
	}

	public Person(AccountType accountType, String username, String email, String password) {
		this.password = password;
		System.out.println(this.password);
		this.accountType = accountType;
		this.username = username;
		this.email = email;

		DB.execute(
				"INSERT INTO PERSON(ID, EMAIL, PASSWORD, FIRST_NAME, LAST_NAME, SIGNUP_DATE, ABOUT)"
						+ " VALUES('#', '#', '" + this.password + "', '#', '#', #, '#')",
				username, email, firstName, lastName, ToolKit.getCurTimeDB(), about);
	}

	private void loadLanguages() {
		languages = new ArrayList<>();
		String sql = "SELECT LANGUAGE_ID FROM PERSON_LANGUAGE WHERE PERSON_ID = '#'";
		ResultSet rs = DB.executeQuery(sql, username);
		try {
			while (rs.next()) {
				languages.add(new Language(rs.getInt("LANGUAGE_ID")));
			}
			rs.close();
		} catch (SQLException ex) {
			Logger.getLogger(Person.class.getName()).log(Level.SEVERE, null, ex);
		}

	}

	public static Person validUser(String username, String password) {
		HashPassword hp = new HashPassword();
		ResultSet rs = DB.executeQuery("SELECT PASSWORD FROM PERSON WHERE ID = '#'", username);
		try {
			if (!rs.next()) {
				return null;
			}
			String found = rs.getString("PASSWORD");
			if (hp.authenticate(password, found)) {
				return new Person(username);
			}
			rs.close();
		} catch (SQLException ex) {
			Logger.getLogger(Person.class.getName()).log(Level.SEVERE, null, ex);
		}
		return null;
	}

	public AccountType getAccountType() {
		return accountType;
	}

	public void setAccountType(AccountType accountType) {
		this.accountType = accountType;
	}

	public String getUsername() {
		return username;
	}

	public String getEmail() {
		return email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
		// System.out.println(this.password);
		// DB.execute("UPDATE PERSON SET PASSWORD = '" + this.password + "' WHERE ID =
		// '#'", username);
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getInstitution() {
		return institution;
	}

	public void setInstitution(String institution) {
		this.institution = institution;
	}

	public String getFbURL() {
		return fbURL;
	}

	public void setFbURL(String fbURL) {
		this.fbURL = fbURL;
	}

	public String getLinkedInURL() {
		return linkedInURL;
	}

	public void setLinkedInURL(String linkedInURL) {
		this.linkedInURL = linkedInURL;
	}

	public Date getSignupDate() {
		return signupDate;
	}

	public void setSignupDate(Date signupDate) {
		this.signupDate = signupDate;
	}

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public Country getCountry() {
		return country;
	}

	public void setCountry(Country country) {
		this.country = country;
	}

	public Files getPhoto() {
		return photo;
	}

	public void setPhoto(Files photo) {
		this.photo = photo;
	}

	public CreditCard getCard() {
		return card;
	}

	public void setCard(CreditCard card) {
		this.card = card;
	}

	public String getYoutubeURL() {
		return youtubeURL;
	}

	public void setYoutubeURL(String youtubeURL) {
		this.youtubeURL = youtubeURL;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setLanguages(List<Language> languages) {
		this.languages = languages;

	}

//    public Image getImage() {
//        if (photo != null) {
//            return ToolKit.makeImage(photo);
//        }
//        return null;
//    }

	public List<Language> getLanguages() {
		return languages;
	}

	public String getFullName() {
		return firstName + " " + lastName;
	}

	public String getShortName() {
		return (firstName.substring(0, 1) + lastName.substring(0, 1)).toUpperCase();
	}

//	public ArrayList<Course> getMyCourses() {
//		try {
//			ArrayList<Course> list = new ArrayList<>();
//			ResultSet rs = null;
//			if (accountType == AccountType.Teacher) {
//				rs = DB.executeQuery("SELECT ID FROM COURSE WHERE TEACHER_ID = '#' ORDER BY PUBLISH_DATE DESC",
//						username);
//			} else if (accountType == AccountType.Student) {
//				rs = DB.executeQuery("SELECT COURSE_ID FROM PURCHASE_HISTORY WHERE STUDENT_ID = '#' ORDER BY TIME DESC",
//						username);
//			}
//			while (rs.next()) {
//				if (accountType == AccountType.Teacher) {
//					list.add(new Course(rs.getInt("ID")));
//				} else if (accountType == AccountType.Student) {
//					list.add(new Course(rs.getInt("COURSE_ID")));
//				}
//			}
//			rs.close();
//			return list;
//		} catch (SQLException ex) {
//			Logger.getLogger(Person.class.getName()).log(Level.SEVERE, null, ex);
//		}
//		return null;
//	}
//
//	public static ArrayList<Person> getList() {
//		ArrayList<Person> list = new ArrayList<Person>();
//		ResultSet rs;
//		String sql = "SELECT ID FROM PERSON ORDER BY SIGNUP_DATE DESC";
//		rs = DB.executeQuery(sql);
//		try {
//			while (rs.next()) {
//				list.add(new Person(rs.getString("ID")));
//			}
//			rs.close();
//		} catch (SQLException ex) {
//			Logger.getLogger(Person.class.getName()).log(Level.SEVERE, null, ex);
//		}
//		return list;
//	}

	public static void deletePerson(String name) {
		String sql = "DELETE FROM PERSON_LANGUAGE WHERE PERSON_ID = '#'";
		DB.execute(sql, name);
		sql = "DELETE FROM PERSON WHERE ID = '#'";
		DB.execute(sql, name);
	}

	public static void createNewPerson(Person person) {
		String sql = "INSERT INTO  PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) VALUES ('#','#','#','#','#',#,'#','#','#',#,'#',#,#,#,'#','#')";
//    	System.err.println(" \t credit card and photo = "+person.getCard()+" and " + person.getPhoto());
		String card_id = null, photo_id = null;
		if (person.getCard() != null) {
			card_id = CreditCard.insertCreditCard(person.getCard()).toString();
		}
		if (person.getPhoto() != null) {
			photo_id = Files.createNewFile(person.getPhoto()).toString();
		}

		DB.execute(sql, person.getUsername(), person.getEmail(), person.getPassword(), person.getFirstName(),
				person.getLastName(), ToolKit.JDateToDDate(person.getDob()), person.getInstitution(), person.getFbURL(),
				person.getLinkedInURL(), ToolKit.getCurTimeDB(), person.getAbout(),
				person.getCountry().getId().toString(), photo_id, card_id, person.getYoutubeURL(), person.getWebsite());

		// person language

		// DB.execute("DELETE FROM PERSON_LANGUAGE WHERE PERSON_ID = '#'",
		// person.getUsername());
		if (person.getLanguages()==null || person.getLanguages().size() == 0) {
			return;
		}
		for (Language lang : person.getLanguages()) {
			Integer id = DB.generateId("PERSON_LANGUAGE");
			DB.execute("INSERT INTO PERSON_LANGUAGE VALUES(#, '#', #)", id.toString(), person.getUsername(),
					lang.getId().toString());
		}
		notificationRegistration(person.getUsername());
	}

	
	
//	public static CourseOverview getCourseOverviewTeacher(Integer id,String teacherUsername) {
//
//		CourseOverview courseOverview = null;
//		String sql = "select  title , publish_date from course where id = #";
//		ResultSet rs = DB.executeQuery(sql, id.toString());
//		Date date;
//		try {
//			rs.next();
//			ArrayList<OverviewContent> overviewContents = new ArrayList<>();
//			Date startDate = rs.getDate("publish_date");
//			Date endDate = new Date();
//			LocalDate start = ToolKit.DateToLocalDate(startDate);
//			LocalDate end = ToolKit.DateToLocalDate(endDate);
//			end = end.plusDays(2);
//			for (LocalDate ldate = start; ldate.isBefore(end); ldate = ldate.plusDays(1)) {
//				date = ToolKit.localDateToDate(ldate);
//				String dDate = ToolKit.JDateToDDate(date);
//				String sql1 = "SELECT c.id,(\r\n"
//						+ "SELECT nvl(count(*),0) FROM purchase_history ph WHERE time=# AND c.id=ph.course_id) AS enr_std_count,(\r\n"
//						+ "SELECT nvl(count(*),0) FROM review rv WHERE time=# AND c.id=rv.course_id) AS review_count,(\r\n"
//						+ "SELECT nvl(count(*),0) FROM rating rt WHERE time=# AND value=1 AND c.id=rt.course_id) AS one,(\r\n"
//						+ "SELECT nvl(count(*),0) FROM rating rt WHERE time=# AND value=2 AND c.id=rt.course_id) AS two,(\r\n"
//						+ "SELECT nvl(count(*),0) FROM rating rt WHERE time=# AND value=3 AND c.id=rt.course_id) AS three,(\r\n"
//						+ "SELECT nvl(count(*),0) FROM rating rt WHERE time=# AND value=4 AND c.id=rt.course_id) AS four,(\r\n"
//						+ "SELECT nvl(count(*),0) FROM rating rt WHERE time=# AND value=5 AND c.id=rt.course_id) AS five FROM course c WHERE c.teacher_id= #";
//				ResultSet rs1 = DB.executeQuery(sql1, dDate, dDate, dDate, dDate, dDate, dDate, dDate, id.toString());
//				rs1.next();
//				overviewContents.add(new OverviewContent(date, rs1.getInt("enr_std_count"), rs1.getInt("review_count"),
//						rs1.getInt("one"), rs1.getInt("two"), rs1.getInt("three"), rs1.getInt("four"),
//						rs1.getInt("five")));
//
//				rs1.close();
//				courseOverview = new CourseOverview(rs.getString("title"), overviewContents);
//			}
//
//			rs.close();
//			return courseOverview;
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		return null;
//	}

	

	public static boolean existsByUsername(String username) {
		return DB.valueExist("PERSON", "ID", username);
	}

	public static boolean existsByEmail(String email) {
		return DB.valueExist("PERSON", "EMAIL", email);
	}

	public static String getPasswordByUsername(String username) {
		ResultSet rs = DB.executeQuery("SELECT PASSWORD FROM PERSON WHERE ID='#'", username);
		try {
			rs.next();
			return rs.getString("PASSWORD");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "";
	}

	public static String getRole(String username) {
		if (DB.valueExist("Student", "ID", username)) {
			return "Student";
		} else if (DB.valueExist("Teacher", "ID", username)) {
			return "Teacher";
		} else if (DB.valueExist("Admin", "ID", username)) {
			return "Admin";
		}
		return "";
	}

	public static void update(Person person) {
		if (person.getCard() != null) {
			CreditCard card = person.getCard();
			if(card.getId()==null) {
				card.setId(CreditCard.insertCreditCard(card));
			}
			else {
				CreditCard.updateCreditCard(card);
			}
		}
		if(person.getPhoto() != null) {
			Files photo = person.getPhoto();
			if(photo.getId()==null) {
				photo.setId(Files.createNewFile(photo));
			}
			else {
				Files.updateFile(photo);
			}
		}

		DB.execute("" + "UPDATE PERSON " + "SET " + "FIRST_NAME = '#'," + "LAST_NAME = '#'," + "DOB = #,"
				+ "INSTITUTION = '#'," + "FB_URL = '#'," + "LINKEDIN_URL = '#'," + "ABOUT = '#'," + "COUNTRY_ID = #,"
				+ "PHOTO_ID = #, " + "CARD_ID = #," + "YOUTUBE_URL = '#'," + "WEBSITE = '#' " + "WHERE ID = '#'",
				person.getFirstName(), person.getLastName(), ToolKit.JDateToDDate(person.getDob()),
				person.getInstitution(), person.getFbURL(), person.getLinkedInURL(), person.getAbout(),
				person.getCountry().getId().toString(),
				(person.getPhoto() == null ? "NULL" : person.getPhoto().getId().toString()),
				(person.getCard() == null ? "NULL" : person.getCard().getId().toString()), person.getYoutubeURL(),
				person.getWebsite(), person.getUsername());
		DB.execute("DELETE PERSON_LANGUAGE WHERE PERSON_ID = '#'", person.getUsername());
		System.out.println(person.getLanguages());
		if (person.getLanguages().size() > 0) {
			for (Language lang : person.getLanguages()) {
				Integer id = DB.generateId("PERSON_LANGUAGE");
				DB.execute("INSERT INTO PERSON_LANGUAGE VALUES(#, '#', #)", id.toString(), person.getUsername(),
						lang.getId().toString());
			}
		}
	}
	public static void updatePassword(String username, String newPassword) {
		DB.execute("UPDATE PERSON SET PASSWORD = '#' WHERE ID = '#'", newPassword, username);
	}
	
	public static void notificationRegistration(String userId) {
		Integer id = DB.generateId("notification");
		String sql = "insert into notification values(# ,'admin','#',# , 'F', NULL,'REGISTRATION')";
		DB.execute(sql, id.toString(), userId, ToolKit.JDateToDDate(new Date()));
	}

	public static void approveCourse(Integer courseId) {
		DB.execute("update course set is_approved = 'T' where id = #", courseId.toString());
		notificationCourseUpload(courseId);
	}
	public static void notificationCourseUpload(Integer courseId) {
		ResultSet rs = DB.executeQuery("SELECT teacher_id FROM course WHERE id = #", courseId.toString());
		try {
			rs.next();
			String teacherId = rs.getString("teacher_id");
			String sql = "SELECT\n" + "	student_id \n" + "FROM\n" + "	purchase_history \n" + "WHERE\n"
					+ "	course_id IN ( SELECT id FROM course WHERE teacher_id = '#' )";
			rs = DB.executeQuery(sql, teacherId);
			while (rs.next()) {
				Integer id = DB.generateId("notification");
				sql = "insert into notification values(# ,'#','#',# , 'F', #,'COURSEUPLOAD')";
				DB.execute(sql, id.toString(), rs.getString("student_id"), teacherId, ToolKit.JDateToDDate(new Date()),courseId.toString());
			}
			rs.close();
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
	}

	public static Files getPhoto(String username) {
		ResultSet rs = DB.executeQuery("SELECT PHOTO_ID FROM PERSON WHERE ID = '#'", username);
		try {
			if(rs.next()) {
				return new Files(rs.getInt("PHOTO_ID"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}
