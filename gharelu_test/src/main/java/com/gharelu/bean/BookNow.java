package com.gharelu.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class BookNow {
	@Id
	private String email;
	
	@Column(nullable = false, length = 64)
	private String name;
	
	@Column(nullable = false, length = 64)
	private String phone;
	
	@Column(nullable = false, length = 64)
	private String flat;
	
	@Column(nullable = false, length = 64)
	private String floor;
	
	@Column(nullable = false, length = 64)
	private String paymentMode;

	public BookNow() {
		super();
	}

	public BookNow(String email, String name, String phone, String flat, String floor, String paymentMode) {
		super();
		this.email = email;
		this.name = name;
		this.phone = phone;
		this.flat = flat;
		this.floor = floor;
		this.paymentMode = paymentMode;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getFlat() {
		return flat;
	}

	public void setFlat(String flat) {
		this.flat = flat;
	}

	public String getFloor() {
		return floor;
	}

	public void setFloor(String floor) {
		this.floor = floor;
	}

	public String getPaymentMode() {
		return paymentMode;
	}

	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}

}
