package com.gharelu;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.gharelu"})
public class GhareluTestApplication {

	public static void main(String[] args) {
		SpringApplication.run(GhareluTestApplication.class, args);
		System.out.println("Project Running successfully");
	}

}
