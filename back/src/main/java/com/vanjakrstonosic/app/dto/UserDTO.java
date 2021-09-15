package com.vanjakrstonosic.app.dto;

import com.vanjakrstonosic.app.model.User;

public class UserDTO {
	private Long id;
	private String username;
	private String password;
	private String name;
	private boolean isAdmin;
	private boolean isActive;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean getIsAdmin() {
		return isAdmin;
	}

	public void setIsAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}

	public boolean getIsActive() {
		return isActive;
	}

	public void setIsActive(boolean isActive) {
		this.isActive = isActive;
	}

	public UserDTO() {
		super();
	}

	public UserDTO(User user) {
		this.id = user.getId();
		this.username = user.getUsername();
		this.name = user.getName();
		this.isAdmin = user.getIsAdmin();
		this.isActive = user.getIsActive();
	}

}
