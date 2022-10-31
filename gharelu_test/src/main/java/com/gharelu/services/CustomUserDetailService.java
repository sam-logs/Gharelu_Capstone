package com.gharelu.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.gharelu.bean.CustomUserDetails;
import com.gharelu.bean.UserSignUp;
import com.gharelu.dao.SignUpRepository;

public class CustomUserDetailService implements UserDetailsService {
	@Autowired
	private SignUpRepository signUpRepo;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		UserSignUp user = signUpRepo.findByEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return new CustomUserDetails(user);
	}

}
