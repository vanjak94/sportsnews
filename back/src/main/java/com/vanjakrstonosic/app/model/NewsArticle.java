package com.vanjakrstonosic.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class NewsArticle {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false, unique = true)
	private String title;
	@Column(nullable = false)
	private String body;
	@Column(nullable = false)
	private Long createdById;
	// @Column(nullable = false)
	// TODO inject
	private User createdBy;
	@Column(nullable = false)
	private String category; // TODO: foreign key

	public NewsArticle() {
		super();
	}

	public NewsArticle(Long id, String title, String body, Long createdById, User createdBy, String category) {
		super();
		this.id = id;
		this.title = title;
		this.body = body;
		this.createdById = createdById;
		this.createdBy = createdBy;
		this.category = category;
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

	public User getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(User createdBy) {
		this.createdBy = createdBy;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
}
