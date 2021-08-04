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

		public String getName() {return name;}
		public void setName(String name) {this.name = name;}		
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
				this.password = rs.getString("PASSWORD");
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

	public List<Language> getLanguagesFromDB() {
		this.languages = new ArrayList<>();
		String sql = "SELECT LANGUAGE_ID FROM PERSON_LANGUAGE WHERE PERSON_ID = '#'";
		ResultSet rs = DB.executeQuery(sql, username);
		try {
			while (rs.next()) {
				this.languages.add(new Language(rs.getInt("LANGUAGE_ID")));
			}
			rs.close();
		} catch (SQLException ex) {
			Logger.getLogger(Person.class.getName()).log(Level.SEVERE, null, ex);
		}
		return this.languages;
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
//		if (person.getPhoto() != null) {
//			photo_id = person.getPhoto().getId().toString();
//		}



		DB.execute(sql, person.getUsername(), person.getEmail(), person.getPassword(), person.getFirstName(),
				person.getLastName(), ToolKit.JDateToDDate(person.getDob()), person.getInstitution(), person.getFbURL(),
				person.getLinkedInURL(), ToolKit.getCurTimeDB(), person.getAbout(),
				person.getCountry().getId().toString(), photo_id, card_id, person.getYoutubeURL(), person.getWebsite());

		// person language

		// DB.execute("DELETE FROM PERSON_LANGUAGE WHERE PERSON_ID = '#'",
		// person.getUsername());
		if (person.getLanguages().size() == 0) {
			return;
		}
		for (Language lang : person.getLanguages()) {
			Integer id = DB.generateId("PERSON_LANGUAGE");
			DB.execute("INSERT INTO PERSON_LANGUAGE VALUES(#, '#', #)", id.toString(), person.getUsername(),
					lang.getId().toString());
		}
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
			return showCard;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;

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
			return ratings;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;

	}
	public static boolean existsByUsername(String username) {
        return DB.valueExist("PERSON", "ID", username);
	}
	public static boolean existsByEmail(String email) {
        return DB.valueExist("PERSON", "EMAIL", email);
	}
	public static String  getPasswordByUsername(String username) {
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
		if(DB.valueExist("Student", "ID", username)) {
			return "Student";
		}
		else if(DB.valueExist("Teacher", "ID", username)) {
			return "Teacher";
		}
		else if(DB.valueExist("Admin", "ID", username)) {
			return "Admin";
		}
		return "";
	}
	
//	Mehedi
	public static void update(Person person) {
		if(person.getCard() != null) {
			CreditCard card = person.getCard();
			if(card.getId()==null) {
				Integer id = DB.generateId("CREDIT_CARD");
				DB.execute("INSERT INTO CREDIT_CARD(ID, CARD_NO, NAME_ON_CARD, EXPIRE_DATE) VALUES(#, '#', '#', #)", id.toString(), card.getCardNo(), card.getNameOnCard(), ToolKit.JDateToDDate(card.getExpireDate()));
				person.getCard().setId(id);
			}
			else {
				DB.execute("UPDATE CREDIT_CARD SET CARD_NO='#', NAME_ON_CARD='#', EXPIRE_DATE=# WHERE ID=#", card.getCardNo(), card.getNameOnCard(),ToolKit.JDateToDDate(card.getExpireDate()), card.getId().toString());				
			}
		}
		if(person.getPhoto() != null) {
//			CreditCard card = person.getCard();
//			if(card.getId()==null) {
//				Integer id = DB.generateId("CREDIT_CARD");
//				DB.executeQuery("INSERT INTO CREDIT_CARD(ID, CARD_NO, NAME_ON_CARD, EXPIRE_DATE) VALUES(#, '#', '#', #)", id.toString(), card.getCardNo(), card.getNameOnCard(), ToolKit.JDateToDDate(card.getExpireDate()));
//			}
//			else {
//				DB.executeQuery("UPDATE CREDIT_CARD SET CARD_NO='#', NAME_ON_CARD='#', EXPIRE_DATE=# WHERE ID=#", card.getCardNo(), card.getNameOnCard(),ToolKit.JDateToDDate(card.getExpireDate()), card.getId().toString());				
//			}
		}
		
		DB.execute(""
				+ "UPDATE PERSON "
				+ "SET "
				+ "FIRST_NAME = '#',"
				+ "LAST_NAME = '#',"
				+ "DOB = #,"
				+ "INSTITUTION = '#',"
				+ "FB_URL = '#',"
				+ "LINKEDIN_URL = '#',"
				+ "ABOUT = '#',"
				+ "COUNTRY_ID = #,"
				+ "PHOTO_ID = #, "
				+ "CARD_ID = #,"
				+ "YOUTUBE_URL = '#',"
				+ "WEBSITE = '#' "
				+ "WHERE ID = '#'",
				person.getFirstName(),
				person.getLastName(),
				ToolKit.JDateToDDate(person.getDob()),
				person.getInstitution(),
				person.getFbURL(),
				person.getLinkedInURL(),
				person.getAbout(),
				person.getCountry().getId().toString(),
				(person.getPhoto() == null ? "NULL" : person.getPhoto().getId().toString()),
				(person.getCard() == null ? "NULL" : person.getCard().getId().toString()),
				person.getYoutubeURL(),
				person.getWebsite(),
				person.getUsername()
				);
		DB.execute("DELETE PERSON_LANGUAGE WHERE PERSON_ID = '#'", person.getUsername());
		System.out.println(person.getLanguages());
		if(person.getLanguages().size()>0) {
			for (Language lang : person.getLanguages()) {
				Integer id = DB.generateId("PERSON_LANGUAGE");
				DB.execute("INSERT INTO PERSON_LANGUAGE VALUES(#, '#', #)", id.toString(), person.getUsername(),
						lang.getId().toString()); 
			}
		}
	}
}
