package com.course.bucket.course;


import java.util.ArrayList;
import java.util.Date;

import com.course.bucket.category.Category;
import com.course.bucket.courseextra.PromoCode;
import com.course.bucket.courseextra.Property;
import com.course.bucket.courseextra.Review;
import com.course.bucket.language.Language;
import com.course.bucket.person.Teacher;


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
    //Files imageFile;
    Category mainCategory;
    Category subCategory;

    ArrayList<Language> languages;
    ArrayList<Property> properties;
    Double rating;
    ArrayList<Review> reveiws;

    Integer numOfStudents;
    String[] prerequisitives;
    String[] outcomes;

    ArrayList<Week> weeks;
//    CourseContent content;
//    Media promotionalVideo;
    String level;
    PromoCode promo;

    public Course() {

    }	
    public Course(Integer id) {

    }
//
//    public Course(Integer id) {
//        this.id = id;
//        ResultSet rs = DB.executeQuery("SELECT * FROM COURSE WHERE ID = #", id.toString());
//        try {
//            if (!rs.next()) {
//                return;
//            }
//            title = rs.getString("TITLE");
//            subTitle = rs.getString("SUBTITLE");
//            mainPrice = rs.getDouble("PRICE");
//            off = rs.getDouble("OFFER");
//            publishDate = rs.getTimestamp("PUBLISH_DATE");
//        
//            isApproved = ToolKit.DBoolToJBool(rs.getString("IS_APPROVED"));
//            teacher = new Teacher(rs.getString("TEACHER_ID"));
//            teacherName = teacher.getFirstName();
//            teacherUsername = teacher.getUsername();
//            imageFile = new Files(rs.getInt("COVER_ID"));
//            subCategory = new Category(rs.getInt("CATEGORY_ID"));
//            mainCategory = subCategory.getParent();
//
//            languages = Language.getLanguages(this);
//            properties = Property.getProperties(this);
//
//            description = rs.getString("DESCRIPTION");
////            Rating will be added
////            Review will be added
//            if (rs.getString("OUTCOMES") != null) {
//                outcomes = rs.getString("OUTCOMES").split("><");
//            } else {
//                outcomes = new String[0];
//            }
//            if (rs.getString("PREREQUISITES") != null) {
//                prerequisitives = rs.getString("PREREQUISITES").split("><");
//            } else {
//                prerequisitives = new String[0];
//            }
//            rs.close();
//        } catch (SQLException ex) {
//            Logger.getLogger(Course.class.getName()).log(Level.SEVERE, null, ex);
//        }
//    }
//
//    public Course(String title, String subTitle, String description, Double price, Files cover, Category subCategory) {
//        this.id = DB.generateId("COURSE");
//        this.title = title;
//        this.subTitle = subTitle;
//        this.description = description;
//        this.mainPrice = price;
//        this.imageFile = cover;
//        this.subCategory = subCategory;
//        this.mainCategory = subCategory.getParent();
//        this.publishDate = ToolKit.getCurTime();
//        this.isApproved = false;
//        this.teacher = GLOBAL.TEACHER;
//        this.properties = new ArrayList<Property>();
//
//        DB.execute(
//                "INSERT INTO COURSE(ID, TITLE, SUBTITLE, DESCRIPTION, PRICE, PUBLISH_DATE, IS_APPROVED, TEACHER_ID, COVER_ID, CATEGORY_ID)"
//                + "VALUES(#, '#', '#', '#', #, #, '#', '#', #, #)",
//                id.toString(), title, subTitle, description, price.toString(), ToolKit.JDateToDDate(publishDate), ToolKit.JBoolToDBool(isApproved),
//                teacher.getUsername().toString(), imageFile.getId().toString(), subCategory.getId().toString()
//        );
//    }
////    public String getTeacherUserame() {
////        return teacherUsername;
////    }
//    
//    
//    public String getTeacherName() {
//        return teacherName;
//    }
//
    public Integer getId() {
        return id;
    }
//
//    public String getTitle() {
//        return title;
//    }
//
//    public String getSubTitle() {
//        return subTitle;
//    }
//
//    public void setSubTitle(String subTitle) {
//        if (this.subTitle.equals(subTitle)) {
//            return;
//        }
//        this.subTitle = subTitle;
//        DB.execute("UPDATE COURSE SET SUBTITLE = '#' WHERE ID = #", subTitle, id.toString());
//    }
//
//    public Double getRating() {
//        return CourseRating.getValue(this);
//    }
//
//    public Teacher getTeacher() {
//        return teacher;
//    }
//
//    public void setTeacher(Teacher teacher) {
//        this.teacher = teacher;
//    }
//
//    public String[] getPrerequisitive() {
//        return prerequisitives;
//    }
//
//    public void setPrerequisitive(String requisitive) {
//        this.prerequisitives = requisitive.split("><", 0);
//        DB.execute("UPDATE COURSE SET PREREQUISITES = '#' WHERE ID = #", requisitive, id.toString());
//    }
//
//    public ArrayList<Review> getReveiws() {
//        return reveiws;
//    }
//
//    public void setReveiws(ArrayList<Review> reveiws) {
//        this.reveiws = reveiws;
//    }
//
//    public ArrayList<Property> getProperties() {
//        return properties;
//    }
//
//    public void setProperties(ArrayList<Property> properties) {
//        this.properties = properties;
//    }
//
//    public Category getSubCategory() {
//        return subCategory;
//    }
//
//    public void setSubCategory(Category subCategory) {
//        if (this.subCategory != null) {
//            if (this.subCategory.equals(subCategory)) {
//                return;
//            }
//        }
//        this.subCategory = subCategory;
//        this.mainCategory = subCategory.getParent();
//        DB.execute("UPDATE COURSE SET CATEGORY_ID = # WHERE ID = #", subCategory.getId().toString(), id.toString());
//    }
//
//    public void setTitle(String title) {
//        if (this.title.equals(title)) {
//            return;
//        }
//        this.title = title;
//        DB.execute("UPDATE COURSE SET TITLE = '#' WHERE ID = #", title, id.toString());
//    }
//
//    public Integer getNumOfStudents() {
//        try {
//            ResultSet rs = DB.executeQuery("SELECT COUNT(*) FROM PURCHASE_HISTORY WHERE COURSE_ID = #", id.toString());
//            rs.next();
//            Integer value = rs.getInt("COUNT(*)");
//            rs.close();
//            return value;
//        } catch (SQLException ex) {
//            Logger.getLogger(Course.class.getName()).log(Level.SEVERE, null, ex);
//        }
//        return 0;
//    }
//
//    public void setNumOfStudents(Integer numOfStudents) {
//        this.numOfStudents = numOfStudents;
//    }
//
//    public Double getMainPrice() {
//        return mainPrice;
//    }
//
//    public void setMainPrice(Double mainPrice) {
//        if (this.mainPrice != null) {
//            if (this.mainPrice.equals(mainPrice)) {
//                return;
//            }
//        }
//        this.mainPrice = mainPrice;
//        DB.execute("UPDATE COURSE SET PRICE = # WHERE ID = #", mainPrice.toString(), id.toString());
//    }
//
//    public Double getOff() {
//        return off;
//    }
//
//    public void setOff(Double off) {
//        if (this.off != null) {
//            if (this.off.equals(off)) {
//                return;
//            }
//        }
//        this.off = off;
//        DB.execute("UPDATE COURSE SET OFFER = # WHERE ID = #", off.toString(), id.toString());
//    }
//
//    public Category getMainCategory() {
//        return mainCategory;
//    }
//
//    public Date getCreateDate() {
//        return publishDate;
//    }
//
//    public Date getLastUpdate() {
//        return lastUpdate;
//    }
//
//    public void setLastUpdate(Date lastUpdate) {
//        this.lastUpdate = lastUpdate;
//        DB.execute("UPDATE COURSE SET LAST_UPDATE = # WHERE ID = #", ToolKit.JDateToDDate(lastUpdate), id.toString());
//    }
//
//    public ArrayList<Language> getLanguages() {
//        return languages;
//    }
//
//    public void setLanguages(ArrayList<Language> languages) {
//        if (this.languages != null) {
//            if (this.languages.equals(languages)) {
//                return;
//            }
//        }
//        this.languages = languages;
//        deleteCourseLanguage();
//        for (Language lang : languages) {
//            Integer id = DB.generateId("COURSE_LANGUAGE");
//            DB.execute("INSERT INTO COURSE_LANGUAGE VALUES(#, '#', #)", id.toString(), this.id.toString(), lang.getId().toString());
//        }
//    }
//
//    public String[] getOutcomes() {
//        return outcomes;
//    }
//
//    public void setOutcomes(String outcome) {
//        this.outcomes = outcome.split("><", 0);
//        DB.execute("UPDATE COURSE SET OUTCOMES = '#' WHERE ID = #", outcome, id.toString());
//    }
//
//    public String getDescription() {
//        return description;
//    }
//
//    public void setDescription(String description) {
//        if (this.description.equals(description)) {
//            return;
//        }
//        this.description = description;
//        DB.execute("UPDATE COURSE SET DESCRIPTION = '#' WHERE ID = #", description, id.toString());
//    }
//
//    public Files getCourseImage() {
//        return imageFile;
//    }
//
//    public void setCourseImage(Files imageFile) {
//        this.imageFile = imageFile;
//        DB.execute("UPDATE COURSE SET COVER_ID = # WHERE ID = #", imageFile.getId().toString(), id.toString());
//    }
//
//    public Date getPublishDate() {
//        return publishDate;
//    }
//
//    public void setPublishDate(Date publishDate) {
//        this.publishDate = publishDate;
//    }
//
//    public boolean isIsApproved() {
//        return isApproved;
//    }
//
//    public void setIsApproved(boolean isApproved) {
//        this.isApproved = isApproved;
//    }
//
//    public String[] getPrerequisitives() {
//        return prerequisitives;
//    }
//
//    public void setPrerequisitives(String[] prerequisitives) {
//        this.prerequisitives = prerequisitives;
//    }
//
//    public ArrayList<Week> getWeeks() {
//        return weeks;
//    }
//
//    public void setWeeks(ArrayList<Week> weeks) {
//        this.weeks = weeks;
//    }
//
//    public void addProperty(Property property) {
//        properties.add(property);
//    }
//
//    public void deleteCourseLanguage() {
//        DB.execute("DELETE FROM COURSE_LANGUAGE WHERE COURSE_ID = #", id.toString());
//    }
//
//    public void delete() {
//        deleteCourseLanguage();
//        for (Property property : properties) {
//            property.delete();
//        }
//        // Delete FAQs
//        for (Week week : weeks) {
//            week.delete();
//        }
//        FAQ.delete(this);
//        Review.delete(this);
//        CourseRating.delete(this);
//        PurchaseHistory.delete(this);
//        DB.execute("DELETE FROM COURSE WHERE ID = #", id.toString());
//        imageFile.delete();
//    }
//
//    public static ArrayList<Course> getApprovedCourses() {
//        ArrayList<Course> apCourses = new ArrayList<Course>();
//        String sql = "SELECT ID FROM COURSE WHERE IS_APPROVED = 'T' ORDER BY PUBLISH_DATE DESC";
//        ResultSet rs = DB.executeQuery(sql);
//        try {
//            while (rs.next()) {
//                int id = Integer.valueOf(rs.getString("ID"));
//                Integer ID = new Integer(id);
//                apCourses.add(new Course(ID));
//            }
//            rs.close();
//        } catch (SQLException ex) {
//            Logger.getLogger(Course.class.getName()).log(Level.SEVERE, null, ex);
//        }
//        return apCourses;
//    }
//
//    public void loadAllData() {
//        weeks = Week.getWeeks(this);
//        reveiws = Review.getList(this);
//    }
//
//    public Double getCurrentPrice() {
//        return getMainPrice() - getMainPrice() * getOff() / 100.0;
//    }
//
//    public Integer getNumOfRating() {
//        try {
//            ResultSet rs = DB.executeQuery("SELECT COUNT(*) FROM RATING WHERE COURSE_ID = #", id.toString());
//            rs.next();
//            Integer value = rs.getInt("COUNT(*)");
//            rs.close();
//            return value;
//        } catch (SQLException ex) {
//            Logger.getLogger(Course.class.getName()).log(Level.SEVERE, null, ex);
//        }
//        return 0;
//    }
//
//    public Integer getRatingOf(Student student) {
//        ResultSet rs = DB.executeQuery("SELECT VALUE FROM RATING WHERE COURSE_ID = # AND STUDENT_ID = '#'", id.toString(), student.getUsername());
//        try {
//            if (rs.next()) {
//                Integer value = rs.getInt("VALUE");
//                rs.close();
//                return value;
//            }
//            rs.close();
//        } catch (SQLException ex) {
//            Logger.getLogger(Course.class.getName()).log(Level.SEVERE, null, ex);
//        }
//        return 0;
//    }
//
//    public boolean isBoughtBy(Student student) {
//        try {
//            ResultSet rs = DB.executeQuery("SELECT * FROM PURCHASE_HISTORY WHERE COURSE_ID = # AND STUDENT_ID = '#'", id.toString(), student.getUsername());
//            if (rs.next()) {
//                rs.close();
//                return true;
//            }
//        } catch (SQLException ex) {
//            Logger.getLogger(Course.class.getName()).log(Level.SEVERE, null, ex);
//        }
//        return false;
//    }
//
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
//
//    public Integer getNumOfLectures() {
//        try {
//            ResultSet rs = DB.executeQuery("SELECT COUNT(*) FROM LECTURE WHERE WEEK_ID = ANY(SELECT ID FROM WEEK WHERE COURSE_ID = #)", id.toString());
//            rs.next();
//            Integer value = rs.getInt("COUNT(*)");
//            rs.close();
//            return value;
//        } catch (SQLException ex) {
//            Logger.getLogger(Course.class.getName()).log(Level.SEVERE, null, ex);
//        }
//        return 0;
//    }
//
//    public static ArrayList<Course> getUnapprovedCourses() {
//        ArrayList<Course> apCourses = new ArrayList<Course>();
//        String sql = "SELECT ID FROM COURSE WHERE IS_APPROVED = 'F'ORDER BY PUBLISH_DATE DESC";
//        ResultSet rs = DB.executeQuery(sql);
//        try {
//            while (rs.next()) {
//                int id = Integer.valueOf(rs.getString("ID"));
//                Integer ID = new Integer(id);
//                apCourses.add(new Course(ID));
//            }
//            rs.close();
//        } catch (SQLException ex) {
//            Logger.getLogger(Course.class.getName()).log(Level.SEVERE, null, ex);
//        }
////        System.out.println("inside unapproved course : total course = " + apCourses.size());
//        return apCourses;
//    }
//
//    public static void approveCourse(Integer id) {
//        String sql = "UPDATE COURSE SET IS_APPROVED = 'T' WHERE ID = #";
//        DB.execute(sql, id.toString());
//    }
//
//    public static void unapproveCourse(Integer id) {
//        String sql = "UPDATE COURSE SET IS_APPROVED = 'F' WHERE ID = #";
//        DB.execute(sql, id.toString());
//    }
//    
//    public static ArrayList<Course> getList(Category category){
//        ArrayList<Course> list = new ArrayList();
//        try {
//            ResultSet rs = DB.executeQuery("SELECT ID FROM COURSE WHERE IS_APPROVED = 'T' AND CATEGORY_ID = ANY(SELECT ID FROM CATEGORY WHERE PARENT_ID = # OR ID = #) AND IS_APPROVED = 'T'", category.getId().toString(), category.getId().toString());
//            while(rs.next()){
//                list.add(new Course(rs.getInt("ID")));
//            }
//            rs.close();
//        } catch (SQLException ex) {
//            Logger.getLogger(Course.class.getName()).log(Level.SEVERE, null, ex);
//        }
//        return list;
//    }
//
//    public static ArrayList<Course> searchCourse(String sql) {
//        ArrayList<Course> courses = new ArrayList<Course>();
//        ResultSet rs;
//        try {
//            rs = DB.executeQuery(sql);
//            while (rs.next()) {
//                Integer id = new Integer(rs.getString("ID"));
//                courses.add(new Course(id));
//            }
//             rs.close();
//        } catch (SQLException ex) {
//            Logger.getLogger(Course.class.getName()).log(Level.SEVERE, null, ex);
//        }
//        return courses;
//    }
//    
//    private static ArrayList<Course> getList(String sql){
//        ArrayList<Course> list = new ArrayList<Course>();
//        try{
//            ResultSet rs = DB.executeQuery(sql);
//            while (rs.next()) {
//                list.add(new Course(rs.getInt("ID")));
//            }
//            rs.close();
//        } catch (SQLException ex) {
//            Logger.getLogger(Course.class.getName()).log(Level.SEVERE, null, ex);
//        }
//        return list;
//    }
//    
//    public static ArrayList<Course> getBestSellerCourse() {
//        return getList("SELECT ID, NUM_OF_STUDENT(ID) NUM FROM COURSE WHERE IS_APPROVED = 'T' ORDER BY NUM DESC");
//    }
//    
//    public static ArrayList<Course> getMostReivewedCourse(){
//        return getList("SELECT ID, GET_REVIEW(ID) NUM FROM COURSE WHERE IS_APPROVED = 'T' ORDER BY NUM DESC");
//    }
//    
//    public static ArrayList<Course> getNewReleasedCourse(){
//        return getList("SELECT ID FROM COURSE WHERE IS_APPROVED = 'T' ORDER BY PUBLISH_DATE DESC");
//    }
//    
//    public static ArrayList<Course> getMostDiscountCourse(){
//        return getList("SELECT ID FROM COURSE WHERE IS_APPROVED = 'T' ORDER BY OFFER DESC");
//    }
//    
//    public static ArrayList<Course> getFreeCourse(){
//        return getList("SELECT ID FROM COURSE WHERE IS_APPROVED = 'T' AND (PRICE - PRICE*OFFER/100) = 0 ORDER BY PUBLISH_DATE DESC");
//    }
//    
	public Teacher getTeacher() {
		// TODO Auto-generated method stub
		return null;
	}
    

}
