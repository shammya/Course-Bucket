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
		
	}

}
