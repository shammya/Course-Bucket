package com.course.bucket;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.course.bucket.database.DB;

@SpringBootApplication
public class BucketApplication {


	public static void main(String[] args) {
		SpringApplication.run(BucketApplication.class, args);
		DB.startConnection();
		System.err.println("ok course bucket");
//		String[] sam = new String[2];
//		func(sam);
//		System.out.println(sam[0]+sam[1]);
	}
	
//	public static void func(String[] str) {
//		str[0]="shammya";
//		str[1] = "mehedi";


}
