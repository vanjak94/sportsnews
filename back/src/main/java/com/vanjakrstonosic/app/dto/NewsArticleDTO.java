package com.vanjakrstonosic.app.dto;

import com.vanjakrstonosic.app.model.NewsArticle;

public class NewsArticleDTO {
	private Long id;

	private String title;
	private String body;
	private Long createdById;
	private UserDTO createdBy;
	private String category;

	public NewsArticleDTO() {
		super();
	}

	public NewsArticleDTO(NewsArticle newsArticle, UserDTO createdBy) {
		super();
		this.id = newsArticle.getId();
		this.title = newsArticle.getTitle();
		this.body = newsArticle.getBody();
		this.createdById = newsArticle.getCreatedById();
		this.createdBy = createdBy;
		this.category = newsArticle.getCategory();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public Long getCreatedById() {
		return createdById;
	}

	public void setCreatedById(Long createdById) {
		this.createdById = createdById;
	}

	public UserDTO getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(UserDTO createdBy) {
		this.createdBy = createdBy;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
}
