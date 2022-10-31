package com.gharelu.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.gharelu.bean.UserSignUp;

public interface SignUpRepository extends JpaRepository<UserSignUp, String> {
    @Query("SELECT u FROM UserSignUp u WHERE u.email = ?1")
    public UserSignUp findByEmail(@Param("email")  String email);

}
