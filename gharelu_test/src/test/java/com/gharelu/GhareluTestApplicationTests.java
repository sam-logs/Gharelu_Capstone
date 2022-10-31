package com.gharelu;

import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import com.gharelu.dao.SignUpRepository;
import com.gharelu.bean.UserSignUp;
 
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
@SpringBootTest
class GhareluTestApplicationTests {
	
    @Autowired
    private TestEntityManager entityManager;
     
	@Autowired
	private SignUpRepository repo;
	
	@Test
	void contextLoads() {
		System.out.println("Test cases Running");
	}
	
	@Test
	public void testCreateUser() {
	    UserSignUp user = new UserSignUp();
	    user.setEmail("suraj@gmail.com");
	    user.setName("Suraj");
	    user.setPhone("7654982345");
	    user.setPassword("Ravi@123");
	     
	    UserSignUp savedUser = repo.save(user);
	     
	    UserSignUp existUser = entityManager.find(UserSignUp.class, savedUser.getEmail());
	     
	    assertThat(user.getEmail()).isEqualTo(existUser.getEmail());
	     
	}

}
