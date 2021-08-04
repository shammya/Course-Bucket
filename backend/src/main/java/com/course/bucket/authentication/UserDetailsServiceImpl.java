package com.course.bucket.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.course.bucket.database.DB;
import com.course.bucket.person.Person;



@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		if(!DB.valueExist("PERSON", "ID", username)) {
			new UsernameNotFoundException("User Not Found with username: " + username);
		}
		Person user = new Person(username);
		return UserDetailsImpl.build(user);
	}

}