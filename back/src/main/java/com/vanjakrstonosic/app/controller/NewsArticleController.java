package com.vanjakrstonosic.app.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.authentication.configuration.EnableGlobalAuthentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.vanjakrstonosic.app.dto.NewsArticleDTO;
import com.vanjakrstonosic.app.dto.UserDTO;
import com.vanjakrstonosic.app.model.NewsArticle;
import com.vanjakrstonosic.app.model.User;
import com.vanjakrstonosic.app.service.NewsArticleService;
import com.vanjakrstonosic.app.service.UserService;

@Controller
@RequestMapping("/api/news-articles")
public class NewsArticleController {
	@Autowired
	NewsArticleService newsArticleService;
	@Autowired
	UserService userService;

	@GetMapping("")
	public ResponseEntity<List<NewsArticleDTO>> findByFilter(@RequestParam(required = false) String query,
			@RequestParam(required = false) String category) {
		if (query == null) {
			query = "";
		}
		if (category == null) {
			category = "";
		}
		List<NewsArticle> newsArticles = newsArticleService.findByFilter(category, query);
		List<NewsArticleDTO> newsArticleDtos = new ArrayList<>();
		for (NewsArticle newsArticle : newsArticles) {
			User createdBy = this.userService.findOne(newsArticle.getCreatedById());
			NewsArticleDTO dto = new NewsArticleDTO(newsArticle, new UserDTO(createdBy));
			newsArticleDtos.add(dto);
		}
		return new ResponseEntity<List<NewsArticleDTO>>(newsArticleDtos, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<NewsArticleDTO> findOne(@PathVariable("id") Long id) {
		NewsArticle article = newsArticleService.findOne(id);

		if (article == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		User createdBy = userService.findOne(article.getCreatedById());

		return new ResponseEntity<NewsArticleDTO>(new NewsArticleDTO(article, new UserDTO(createdBy)), HttpStatus.OK);
	}

	@PostMapping("")
	@PreAuthorize("hasAnyRole('ADMIN', 'USER')")
	public ResponseEntity<NewsArticleDTO> saveArticle(@RequestBody NewsArticleDTO NewsArticleDTO,
			@AuthenticationPrincipal() Object principal) {
		NewsArticle newsArticle = new NewsArticle();

		newsArticle.setTitle(NewsArticleDTO.getTitle());
		newsArticle.setBody(NewsArticleDTO.getBody());
		newsArticle.setCategory(NewsArticleDTO.getCategory());
		newsArticle.setCreatedAt(new Date());

		User createdBy = this.userService.findByUsername(((UserDetails) principal).getUsername());
		newsArticle.setCreatedBy(createdBy);

		newsArticle = newsArticleService.save(newsArticle);

		return new ResponseEntity<>(new NewsArticleDTO(newsArticle, new UserDTO(createdBy)), HttpStatus.CREATED);
	}
}
