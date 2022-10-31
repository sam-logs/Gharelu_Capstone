package com.gharelu.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class UserSignUp {
	@Id
	private String email;
	@Column(nullable = false, length = 64)
	private String name;
	@Column(nullable = false, length = 64)
	private String phone;
	@Column(nullable = false, length = 64)
	private String password;

	public UserSignUp() {
		super();
	}

	public UserSignUp(String email, String name, String phone, String password) {
		super();
		this.email = email;
		this.name = name;
		this.phone = phone;
		this.password = password;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
