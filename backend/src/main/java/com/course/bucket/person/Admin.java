package com.course.bucket.person;

import com.course.bucket.database.DB;

public class Admin extends Person{

    
    public Admin(String username) {
        super(username);
        
    }
    
    public static boolean exist(String username) {
        return DB.valueExist("ADMIN", "ID", username);
    }
}
