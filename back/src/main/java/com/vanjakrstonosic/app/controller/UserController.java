package com.vanjakrstonosic.app.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.vanjakrstonosic.app.dto.UserDTO;
import com.vanjakrstonosic.app.model.User;
import com.vanjakrstonosic.app.service.UserService;

@Controller
@RequestMapping(path = "/api/users")
public class UserController {
	@Autowired
	UserService userService;

	@GetMapping(value = "/")
	public ResponseEntity<List<UserDTO>> findAll() {
		List<User> users = userService.findAll();
		List<UserDTO> usersDTO = new ArrayList<>();
		for(User user : users) {
			usersDTO.add(new UserDTO(user));
		}
		return new ResponseEntity<List<UserDTO>>(usersDTO, HttpStatus.OK);

	}

	@GetMapping(value="/{id}")
	public ResponseEntity<UserDTO> findOne(@PathVariable("id") Long id) {
		User user = userService.findOne(id);

		if(user == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<UserDTO>(new UserDTO(user), HttpStatus.OK);
	}

	@PostMapping(value="/")
	public ResponseEntity<UserDTO> saveUser(@RequestBody UserDTO userDTO) {
		User user = new User();

		user.setAdmin(userDTO.isAdmin());
		user.setName(userDTO.getName());
		user.setUsername(userDTO.getUsername());

		user = userService.save(user);

		return new ResponseEntity<>(new UserDTO(user), HttpStatus.CREATED);
	}

	@PutMapping(value="/{id}")
	public ResponseEntity<UserDTO> saveUser(@PathVariable("id") Long id, @RequestBody UserDTO userDTO) {
		User user = userService.findOne(id);

		user.setAdmin(userDTO.isAdmin());
		user.setName(userDTO.getName());
		user.setUsername(userDTO.getUsername());

		user = userService.save(user);

		return new ResponseEntity<>(new UserDTO(user), HttpStatus.CREATED);
	}

}
