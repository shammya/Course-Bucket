package com.course.bucket.authentication;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

//import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.course.bucket.Global;
import com.course.bucket.database.DB;
import com.course.bucket.person.Person;
import com.course.bucket.person.Student;
import com.course.bucket.person.Teacher;
import com.course.bucket.tools.ToolKit;
import com.course.bucket.person.Person.AccountType;


@CrossOrigin(origins = Global.HOST)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;

	@PostMapping("/validity-email/{email}")
	public ResponseEntity<?> emailValidity(@PathVariable(value="email") String email) {
		if (Person.existsByEmail(email)) {
			return ResponseEntity.ok(new MessageResponse(true));
		}
		return ResponseEntity.ok(new MessageResponse(false));
	}
	@PostMapping("/validity-username/{username}")
	public ResponseEntity<?> usernameValidity(@PathVariable(value="username") String username) {	
		if (Person.existsByUsername(username)) {
			return ResponseEntity.ok(new MessageResponse(true));
		}
		return ResponseEntity.ok(new MessageResponse(false));
	}
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
		if(!Person.existsByUsername(loginRequest.getUsername())) {
			return ResponseEntity.ok(new MessageResponse("Username is not found !!! Try again."));
		}
		String passFromDB = Person.getPasswordByUsername(loginRequest.getUsername());
		if(!encoder.matches(loginRequest.getPassword(), passFromDB)) {
			return ResponseEntity.ok(new MessageResponse("Incorrect Password !!! Try again."));
		}
		String token = jwtUtils.generateJwtToken(loginRequest.getUsername());
		return ResponseEntity.ok(new JwtResponse(token, loginRequest.getUsername()));
	}
	@PostMapping("/register-student/{eduStatusId}")
	public ResponseEntity<?> registerStudent(@PathVariable(value="eduStatusId") Integer eduStatusId, @RequestBody Person student){
		student.setPassword(encoder.encode(student.getPassword()));
		Student.createNewStudent(student, eduStatusId);
		
		String token = jwtUtils.generateJwtToken(student.getUsername());
		return ResponseEntity.ok(new JwtResponse(token, student));
	}
	@PostMapping("/register-teacher/{designationId}")
	public ResponseEntity<?> registerTeacher(@PathVariable(value="designationId") Integer designationId, @RequestBody Person teacher){
		teacher.setPassword(encoder.encode(teacher.getPassword()));
		Teacher.createNewTeacher(teacher, designationId);

		String token = jwtUtils.generateJwtToken(teacher.getUsername());
		return ResponseEntity.ok(new JwtResponse(token, teacher));
	}
	@PostMapping("/request-password-change/{username}")
	public ResponseEntity<?> requestPasswordChange(@PathVariable(value="username") String username,@RequestBody Date dob){
		Date dbDate = DB.getDate("PERSON","ID",username,"DOB");
		String dobStr = new SimpleDateFormat("yyyy-MM-dd").format(dob);
		if(!Person.existsByUsername(username)) {
			return ResponseEntity.ok(new MessageResponse("Username is not found !!! Try again."));
		}
		if(dobStr.equals(dbDate.toString())) {
			return ResponseEntity.ok(new MessageResponse(true));
		}
		return ResponseEntity.ok(new MessageResponse("Date of birth mismatch"));
	}
	@PostMapping("/password-change")
	public ResponseEntity<?> passwordChange(@RequestBody LoginRequest lr){
		DB.update("Person", "ID", lr.getUsername(), "Password", encoder.encode(lr.getPassword())); 
		return ResponseEntity.ok(new MessageResponse(false));
	}
//	@GetMapping("/valid-session")
//	@PreAuthorize("hasRole('Teacher') or hasRole('TEACHER') or hasRole('ROLE_Teacher')")
//	public ResponseEntity<?> isValidSession(){
//		return ResponseEntity.ok(new MessageResponse(true));
//	}
//	@PostMapping("/query")
//	public void query(@RequestBody String sql) {
//		DB.execute(sql);
//	}
}
