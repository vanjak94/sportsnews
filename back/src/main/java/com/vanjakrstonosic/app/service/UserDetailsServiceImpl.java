package com.vanjakrstonosic.app.service;

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

		User.UserBuilder userBuilder = User.withUsername(username).password(user.getPassword());

		if (user.getIsAdmin()) {
			userBuilder = userBuilder.roles("USER", "ADMIN");
		} else {
			userBuilder = userBuilder.roles("USER");
		}

		return userBuilder.build();
	}
}
