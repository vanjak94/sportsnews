package com.vanjakrstonosic.app.dto;

import com.vanjakrstonosic.app.model.Category;

public class CategoryDTO
 {
	private String name;

  public CategoryDTO() {
    super();
  }

  public CategoryDTO(Category category) {
    super();
    this.name = category.getName();
  }

  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
}
