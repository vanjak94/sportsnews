package com.vanjakrstonosic.app.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class NewsArticle {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private String title;
	@Column(nullable = false, columnDefinition = "text")
	private String body;
	@Column(nullable = false, insertable = false, updatable = false)
	private Long createdById;
	@ManyToOne
	@JoinColumn(name = "createdById")
	private User createdBy;
	@Column(nullable = false)
	private String category;
	@Column(nullable = false)
	private Date createdAt;

	public NewsArticle() {
		super();
	}

	public NewsArticle(Long id, String title, String body, Long createdById, User createdBy, String category, Date createdAt) {
		super();
		this.id = id;
		this.title = title;
		this.body = body;
		this.createdById = createdById;
		this.createdBy = createdBy;
		this.category = category;
		this.createdAt = createdAt;
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

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
}
