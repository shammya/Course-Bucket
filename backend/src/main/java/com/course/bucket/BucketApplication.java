package com.course.bucket;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.course.bucket.database.DB;
import com.course.bucket.files.FileStorageProperties;


@EnableConfigurationProperties({
	FileStorageProperties.class
})
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
