package com.gharelu.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.gharelu.bean.UserSignUp;

public interface SignUpRepository extends CrudRepository<UserSignUp, String> {
	 @Query("SELECT u FROM registration u WHERE u.email =?1 AND u.password =?2")
	    public UserSignUp findByEmail(String email, String password);

}
