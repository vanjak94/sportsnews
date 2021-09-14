package com.vanjakrstonosic.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vanjakrstonosic.app.model.NewsArticle;
import com.vanjakrstonosic.app.repository.NewsArticleRepository;

@Service
public class NewsArticleService {

	@Autowired
	private NewsArticleRepository newsArticleRepository;

	public List<NewsArticle> findAll() {
		return newsArticleRepository.findAll();
	}

	public List<NewsArticle> findByFilter(String category, String query) {
		return newsArticleRepository.findByFilter(category, query);
	}

	public NewsArticle findOne(Long id) {
		return newsArticleRepository.findById(id).orElseThrow();
	}

	public NewsArticle save(NewsArticle newsArticle) {
		return newsArticleRepository.save(newsArticle);
	}
}
