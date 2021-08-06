package com.course.bucket.authentication;
import java.util.Set;

import com.course.bucket.person.Person.AccountType;

//import javax.validation.constraints.*;
 
public class SignupRequest {
//    @NotBlank
//    @Size(min = 3, max = 20)
    private String username;
 
//    @NotBlank
//    @Size(max = 50)
//    @Email
    private String email;
    
    private String accountType;
    
//    @NotBlank
//    @Size(min = 6, max = 40)
    private String password;
  
    public String getUsername() {
        return username;
    }
 
    public void setUsername(String username) {
        this.username = username;
    }
 
    public String getEmail() {
        return email;
    }
 
    public void setEmail(String email) {
        this.email = email;
    }
 
    public String getPassword() {
        return password;
    }
 
    public void setPassword(String password) {
        this.password = password;
    }
    
    public String getAccountType() {
      return this.accountType;
    }
    
    public void setAccountType(String accountType) {
      this.accountType = accountType;
    }
}