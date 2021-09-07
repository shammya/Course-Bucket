package com.course.bucket.files;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.security.SecureRandom;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.course.bucket.Global;
import com.course.bucket.course.Course;
import com.course.bucket.database.DB;
import com.course.bucket.tools.ToolKit;

@Service
public class FileStorageService {

	private final Path fileStorageLocation;
		
	@Autowired
	public FileStorageService(FileStorageProperties fileStorageProperties) {
		System.out.println(fileStorageProperties.getUploadDir());
		this.fileStorageLocation = Paths.get(fileStorageProperties.getUploadDir()).toAbsolutePath().normalize();
		
		try {
			Files.createDirectories(this.fileStorageLocation);
			
		}catch(Exception ex) {
			throw new FileStorageException("Could not create the directory to upload");
		}
	}
	
	private static final String AB = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	private static final String publicKey = "TjErja";
	private static final String privateKey = "JRyFyk";
	private static final Integer keyPosition = 13;
	private static final Integer typePosition = 29;
	private static final Integer extPosition = 46;
	private static final Integer randomStrSize = 60;
	private static SecureRandom rnd = new SecureRandom();

	String randomString(){
	   StringBuilder sb = new StringBuilder(randomStrSize);
	   for(int i = 0; i < randomStrSize; i++)
	      sb.append(AB.charAt(rnd.nextInt(AB.length())));
	   return sb.toString();
	}
	
	public static String encodeFileName(String name,String extension,String type, boolean secure) {
		if(type.equalsIgnoreCase("message")) type = "picture";
		StringBuilder sb = new StringBuilder(name);
		
		// Extension build
		StringBuilder builder = new StringBuilder(extension);
		builder.insert(1, extension.length());
		sb.insert(extPosition, builder.toString());
		
		// Type build
		builder = new StringBuilder(type.toLowerCase());
		builder.insert(2, type.length());
		sb.insert(typePosition, builder.toString());
		
		// key build
	    if(secure) {
		    sb.insert(keyPosition, privateKey);
	    }
	    else {
	 	   sb.insert(keyPosition, publicKey);
	    }
	    System.out.println(sb.toString());
	    return sb.toString();
	}
	public static String decodeFileName(String link, boolean secure) {
		
		StringBuilder sb = new StringBuilder(link);
		if((secure && sb.substring(keyPosition,keyPosition+ privateKey.length()).equals(privateKey)) || 
				(!secure && sb.substring(keyPosition, keyPosition+publicKey.length()).equals(publicKey))) {
			
			//	Extracting key
			sb.delete(keyPosition, keyPosition+(secure?privateKey.length():publicKey.length()));
			
			//	Extracting type
			String size = sb.substring(typePosition+2, typePosition+3);
			sb.delete(typePosition+2, typePosition+3);
			String type = sb.substring(typePosition, typePosition+Integer.parseInt(size));
			sb.delete(typePosition, typePosition+Integer.parseInt(size));
			
			size = sb.substring(extPosition+1, extPosition+2);
			sb.delete(extPosition+1, extPosition+2);
			String extension = sb.substring(extPosition, extPosition+Integer.parseInt(size));
			sb.delete(extPosition, extPosition+Integer.parseInt(size));
			
			String fileName = type + "/" + sb.toString() + "." + extension;
			System.out.println("Extracting...");
			System.out.println(fileName);
			
			return fileName;
		}
		return "";
	}
	
	public static void deleteFile(String link) {
		boolean secure = link.contains("pv");
		String fileName = "";
		if(secure) fileName = link.replace(Global.HOST + "/pv/", link);
		else fileName = link.replace(Global.HOST + "/pb/", link);
		String decodedName = decodeFileName(fileName, secure);
		if(decodedName == "") return;

		File file = new File("/upload/"+decodedName);
		file.delete();
		System.out.println(decodedName + " is deleted");
	}
	
//	function to store the file
	public String storeFile(MultipartFile file, String type, boolean secure) {
		String extension = FilenameUtils.getExtension(file.getOriginalFilename().toString());
		System.out.println(extension);
		String randomStr = randomString();
		String generatedName = randomStr+"."+extension;
		
		Path targetLocation = null;
		switch(type.toLowerCase()) {
		case "message":
		case "picture":
			targetLocation = this.fileStorageLocation.resolve("picture/");
			break;
			case "video":
				targetLocation = this.fileStorageLocation.resolve("video/");
				break;
			case "pdf":
				targetLocation = this.fileStorageLocation.resolve("pdf/");
				break;
		}
		System.out.println("targetLocation: "+targetLocation.toString());
		File newFile = null;
		try {
			newFile = new File(targetLocation.toString() +"/" +generatedName);
			while(newFile.exists()) {
				randomStr = randomString();
				generatedName = randomStr+"."+extension;
				newFile = new File(targetLocation.toString() +"/" +generatedName);
			}
		}
		catch(Exception ex){}
		System.out.println(generatedName);
		try {
			System.out.println("Location: "+targetLocation);
			System.out.println("File name: "+file.getInputStream());
			Files.copy(file.getInputStream(), Path.of(targetLocation+"/"+generatedName), StandardCopyOption.REPLACE_EXISTING);
//			File renamedFile = new File(targetLocation.toString());
//			renamedFile.renameTo(newFile);
			System.out.println(encodeFileName(randomStr,extension, type, secure));
			return encodeFileName(randomStr, extension, type, secure);
		}catch(IOException ex) {
			throw new FileStorageException("Could not store file" + ". Please try again!",ex);
		}
	}
	
	public boolean authenticateFile(String fileName) {
		ResultSet rs = DB.executeQuery(""
				+ "SELECT COURSE_ID, IS_PREVIEW\r\n"
				+ "FROM FILES F, LECTURE L, WEEK W\r\n"
				+ "WHERE \r\n"
				+ "F.ID = L.FILE_ID AND\r\n"
				+ "W.ID = L.WEEK_ID AND\r\n"
				+ "CONTENT = '#'", "http://localhost:8800/resources/pv/"+fileName);
		try {
			if(rs.next()) {
				if(ToolKit.DBoolToJBool(rs.getString("IS_PREVIEW"))) {
					return true;
				}
				return Course.authenticateForCourseContent(ToolKit.getCurrentUserName(), rs.getInt("COURSE_ID"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;
	}
	
//	function to load the file
	public Resource loadFileAsResource(String fileName, boolean secure) {
		try {
			String decodedName = decodeFileName(fileName, secure);
			if(decodedName == "") return null;
			Path filePath = this.fileStorageLocation.resolve(decodedName).normalize();
			Resource resource = new UrlResource(filePath.toUri());
			if(resource.exists()) {
				return resource;
			}else {
				throw new MyFileNotFoundException("File not found " + fileName);
			}
		}catch(MalformedURLException ex) { 
			throw new MyFileNotFoundException("File not found " + fileName);
		}
	}
}