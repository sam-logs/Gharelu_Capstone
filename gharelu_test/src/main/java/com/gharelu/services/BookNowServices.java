package com.gharelu.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.gharelu.bean.BookNow;
import com.gharelu.dao.BookNowRepository;

@Repository
public class BookNowServices {
	@Autowired
	private BookNowRepository bookNowRepo;
	
	public BookNow saveData(BookNow bookingData) {
		BookNow result = bookNowRepo.save(bookingData);
		return result;
	}
}
