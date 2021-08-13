package com.course.bucket.tools;



import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.concurrent.TimeUnit;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import com.course.bucket.person.Person;


public class ToolKit {

    public final static double NULL = -99999999.99;


    public static String dateFormatDB() {
        return "yyyy-mm-dd hh24:mi:ss";
    }

    public static String dateFormatJAVA() {
        return "yyyy-MM-dd HH:mm:ss";
    }

    public static String getCurTimeDB() {
        DateFormat df = new SimpleDateFormat(dateFormatJAVA());
        Date dateobj = new Date();
        return "TO_DATE('" + df.format(dateobj) + "', '" + dateFormatDB() + "')";
    }

    public static Date getCurTime() {
        return new Date();
    }

    public static String JDateToDDate(Date date) {
        SimpleDateFormat df = new SimpleDateFormat(dateFormatJAVA());
        return "TO_DATE('" + df.format(date) + "', '" + dateFormatDB() + "')";
    }

    public static Date makeDateForJAVA(java.sql.Date date) {
        Date jDate = date;
        return jDate;
    }

    public static Date localDateToDate(LocalDate lDate) {
        Instant instant = Instant.from(lDate.atStartOfDay(ZoneId.systemDefault()));
        return Date.from(instant);
    }
    
    public static LocalDate DateToLocalDate(Date date) {
        return Instant.ofEpochMilli(date.getTime()).atZone(ZoneId.systemDefault()).toLocalDate();
    }
    
    public static String makeDateStructured(Date date, String structure){
        DateFormat dateFormat = new SimpleDateFormat(structure);  
        String strDate = dateFormat.format(date).toString();  
        return strDate;
    }
    
    public static String makeDateStructured(LocalDate date, String structure){
        DateFormat dateFormat = new SimpleDateFormat(structure);  
        String strDate = dateFormat.format(date);  
        return strDate;
    }
    
    public static long dateBetween(Date date1, Date date2){
        LocalDate d1 = DateToLocalDate(date1);
        LocalDate d2 = DateToLocalDate(date2);
        Duration diff = Duration.between(d1.atStartOfDay(), d2.atStartOfDay());
        return diff.toDays();
    }



    public static boolean isValidString(String str) {
        char[] ch = str.toCharArray();
        int len = str.length();
        for (int i = 0; i < len; i++) {
            if (ch[i] == '\\' || ch[i] == '\"' || ch[i] == '\'' || ch[i] == ';') {
                return false;
            }
        }
        return true;
    }
    public static boolean isSpaceMiddle(String str)
    {
        char[] ch = str.toCharArray();
        int len = str.length();
        for (int i = 0; i < len; i++) {
            if(ch[i]==' ')
                return true;
        }
        return false;
    }
    

    
    public static boolean isOnlyCharacter(String s) {
        if(s==null || s.isEmpty()) return true;
        for (char c : s.toCharArray()) {
            if (Character.isDigit(c)) {
                return false;
            }
        }
        return true;
    }
    
    public static boolean isOnlyNumber(String s) {
        if(s==null || s.isEmpty()) return true;
        for (char c : s.toCharArray()) {
            if (!Character.isDigit(c)) {
                return false;
            }
        }
        return true;
    }
    
    public static String JBoolToDBool(boolean b){
        return (b ? "T" : "F");
    }
    
    public static boolean DBoolToJBool(String b){
        return (b.equals("T") ? true : false);
    }
    
  
    public static String DoubleToString(Double value){
        return DoubleToString(value, 2);
    }
    
    public static String DoubleToString(Double value, int precision){
        return String.format(String.format("%." + precision + "f", value), value);
    }
    
    public static void print(Object text){
        System.out.println("");
        System.out.println("");
        System.out.println("");
        System.err.println("Error message is showing : ");
        System.err.println(text.toString());
        System.out.println("");
        System.out.println("");
        System.out.println("");
    }


    
    public static long getDifferenceDays(Date d1, Date d2) {
        long diff = d2.getTime() - d1.getTime();
        return TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS);
    }
    public static LocalDate dateToLocalDate(Date date) {
    	LocalDate localDate = date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
    	return localDate;
    }
    
    public static String getCurrentUserName()
    {
		UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return userDetails.getUsername();
		
    }
}