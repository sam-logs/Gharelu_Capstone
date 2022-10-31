package com.gharelu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.gharelu.bean.BookNow;
import com.gharelu.services.BookNowServices;

@Controller
public class BookNowController {
	@Autowired
	private BookNowServices service;
	
	@GetMapping("/booknow")
	public String getBookNow(Model model) {
		System.out.println("In Book Now page");
		model.addAttribute("bookNow", new BookNow());
		return "booknow";
	}
	
	@PostMapping("/processBookNow")
	public String processBookNow(BookNow bookNow) {
		service.saveData(bookNow);
		return "order";
	}
}
