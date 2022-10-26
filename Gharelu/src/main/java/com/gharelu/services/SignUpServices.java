package com.gharelu.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.gharelu.bean.UserSignUp;
import com.gharelu.dao.SignUpRepository;

@Repository
public class SignUpServices {
	@Autowired
	private SignUpRepository signUpRepo;
	
	public UserSignUp saveUser(UserSignUp user) {
		UserSignUp result = signUpRepo.save(user);
		return result;
	}
	
	public UserSignUp getUserByEmail(String email, String password) {
//		 UserSignUp result = signUpRepo.getById(email);
		UserSignUp result = signUpRepo.findByEmail(email, password);
		return result;
	}

}
