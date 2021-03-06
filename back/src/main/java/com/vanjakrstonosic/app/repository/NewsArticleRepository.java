package com.vanjakrstonosic.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

import com.vanjakrstonosic.app.model.NewsArticle;

@Repository
public interface NewsArticleRepository extends JpaRepository<NewsArticle, Long> {
	// izvuci ili po kategoriji ili po pretrazi ili po oba zajedno
	@Query("SELECT U FROM NewsArticle U WHERE"
			+ "(:category != '' AND :query != '' AND category = :category AND ((LOWER(U.title) LIKE LOWER(concat('%', concat(:query, '%'))) OR LOWER(U.category) LIKE LOWER(concat('%', concat(:query, '%'))) OR LOWER(U.body) LIKE LOWER(concat('%', concat(:query, '%'))))))"
			+ "OR (:category = '' AND :query != '' AND (:query != '' AND ((LOWER(U.title) LIKE LOWER(concat('%', concat(:query, '%'))) OR LOWER(U.category) LIKE LOWER(concat('%', concat(:query, '%'))) OR LOWER(U.body) LIKE LOWER(concat('%', concat(:query, '%')))))))"
			+ "OR (:category != '' AND :query = '' AND category = :category)" + "OR (:category = '' AND :query = '')")
	List<NewsArticle> findByFilter(@Param("category") String category, @Param("query") String query);
}
