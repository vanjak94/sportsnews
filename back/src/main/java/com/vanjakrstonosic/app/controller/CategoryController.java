package com.vanjakrstonosic.app.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.vanjakrstonosic.app.dto.CategoryDTO;
import com.vanjakrstonosic.app.model.Category;
import com.vanjakrstonosic.app.service.CategoryService;

@Controller
@RequestMapping(path = "/api/category")
public class CategoryController {
	@Autowired
	CategoryService categoryService;

	@GetMapping(path = "/")
	public ResponseEntity<List<CategoryDTO>> findAll() {
		List<Category> categories = categoryService.findAll();
		List<CategoryDTO> categoriesDTO = new ArrayList<>();
		for (Category category : categories) {
			categoriesDTO.add(new CategoryDTO(category));
		}
		return new ResponseEntity<List<CategoryDTO>>(categoriesDTO, HttpStatus.OK);

	}

	@PostMapping(path = "/")
	@PreAuthorize("hasAnyRole('ADMIN', 'USER')")
	public ResponseEntity<CategoryDTO> saveCategory(@RequestBody CategoryDTO categoryDTO) {
		Category category = new Category();

		category.setName(categoryDTO.getName());

		category = categoryService.save(category);

		return new ResponseEntity<>(new CategoryDTO(category), HttpStatus.CREATED);
	}
}
