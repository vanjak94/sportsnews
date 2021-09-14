package com.vanjakrstonosic.app.service;


import java.util.ArrayList;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.vanjakrstonosic.app.repository.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	UserService userService;

	@Autowired
	UserRepository userRepository;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		com.vanjakrstonosic.app.model.User user = this.userRepository.findByUsername(username);

		if (user == null) {
			throw new UsernameNotFoundException(username);
		}

		User.UserBuilder userBuilder = org.springframework.security.core.userdetails.User.withUsername(username).password(user.getPassword());

		if (user.isAdmin()) {
			userBuilder = userBuilder.authorities("USER", "ADMIN");
		} else {
			userBuilder = userBuilder.authorities("USER");
		}

		return userBuilder.build();
	}
}
