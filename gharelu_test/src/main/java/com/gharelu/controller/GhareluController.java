package com.gharelu.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RestController;

import com.gharelu.bean.UserSignUp;
import com.gharelu.services.SignUpServices;

@Controller
public class GhareluController {
	@Autowired
	private SignUpServices service;
	
	@GetMapping("")
	public String getIndex() {
		System.out.println("In index page");
		return "index";
	}
	
	@GetMapping("/signUp")
	public String getSignUp(Model model) {
		System.out.println("In signup page");
		model.addAttribute("userSignUp", new UserSignUp());
		return "signUp";
	}
	
	@PostMapping("/register")
	public String processRegister(UserSignUp userSignUp) {
	    BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	    String encodedPassword = passwordEncoder.encode(userSignUp.getPassword());
	    userSignUp.setPassword(encodedPassword);
		
		service.saveUser(userSignUp);
	     
	    return "sucess";
	}
	
	@GetMapping("/login")
	public String getLogin() {
		System.out.println("In Login page");
		return "login";
	}
	
	@PostMapping("/loginUser")
	public String authenticateUser(HttpServletRequest request, Model m) {
		System.out.println("Matching Login Data");
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		UserSignUp user  = service.getUserByEmail(email,password);
		if(user == null) {
			return "error";
		}
		return "index";
	}
	
	@GetMapping("/contact")
	public String getContact() {
		System.out.println("In Contact page");
		return "contact";
	}
	
	@GetMapping("/sucess")
	public String getSuces() {
		System.out.println("In Sucess page");
		return "sucess";
	}
	
	@GetMapping("/error")
	public String getError() {
		System.out.println("In Error page");
		return "error";
	}
	
	@GetMapping("/loginFailure")
	public String getLoginFailure() {
		System.out.println("In Login Failure page");
		return "loginFailure";
	}
	
	@GetMapping("/logout")
	public String getLogout() {
		System.out.println("In Logout page");
		return "logout";
	}

}
