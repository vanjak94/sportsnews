package com.vanjakrstonosic.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


import com.vanjakrstonosic.app.repository.UserRepository;
import com.vanjakrstonosic.app.service.UserService;
import com.vanjakrstonosic.app.utils.TokenUtils;
import com.vanjakrstonosic.app.dto.LoginDTO;
import com.vanjakrstonosic.app.dto.TokenDTO;

@Controller
@RequestMapping("/api")
public class LoginController {

	@Autowired
	UserDetailsService userDetailsService;

	@Autowired
	TokenUtils tokenUtils;

	@Autowired
	UserService userService;

	@Autowired
	UserRepository userRepository;

	@RequestMapping(path = "/login", method = RequestMethod.POST)
	public ResponseEntity<TokenDTO> login(@RequestBody LoginDTO loginDTO) throws Exception {

		UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(loginDTO.getUsername(), loginDTO.getPassword());
		UserDetails details = userDetailsService.loadUserByUsername(loginDTO.getUsername());

		return new ResponseEntity<TokenDTO>(new TokenDTO(tokenUtils.generateToken(details)), HttpStatus.OK);
	}


}
