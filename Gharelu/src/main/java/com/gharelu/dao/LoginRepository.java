package com.gharelu.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gharelu.bean.UserLogin;

public interface LoginRepository extends JpaRepository<UserLogin, String> {

}
