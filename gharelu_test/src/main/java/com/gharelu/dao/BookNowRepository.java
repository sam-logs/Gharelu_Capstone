package com.gharelu.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gharelu.bean.BookNow;

public interface BookNowRepository extends JpaRepository<BookNow, String> {

}
