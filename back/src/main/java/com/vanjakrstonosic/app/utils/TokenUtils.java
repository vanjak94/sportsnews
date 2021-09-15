package com.vanjakrstonosic.app.utils;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.vanjakrstonosic.app.model.User;
import com.vanjakrstonosic.app.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class TokenUtils {
	@Value("${token.secret}")
	private String secret;

	@Value("${token.expiration}")
	private Long expiration;

	@Autowired
	UserService userService;

	private Claims getClaims(String token) {
		Claims claims = null;
		try {
			claims = Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
		} catch (Exception e) {
		}
		return claims;
	}

	private boolean isExpired(String token) {
		try {
			return getClaims(token).getExpiration().before(new Date(System.currentTimeMillis()));
		} catch (Exception e) {
		}
		return true;
	}

	public String getUsername(String token) {
		String username = null;

		try {
			username = Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getSubject();
		} catch (Exception e) {
		}

		return username;
	}

	public boolean validateToken(String token, UserDetails userDetails) {
		String tokenUsername = getUsername(token);
		String userDetailsUsername = userDetails.getUsername();
		if (!tokenUsername.equals(userDetailsUsername)) {
			return false;
		}
		User user = this.userService.findByUsername(tokenUsername);
		return user != null && user.getIsActive();
	}

	public String generateToken(UserDetails userDetails) {
		String token = Jwts.builder()
			.setSubject(userDetails.getUsername())
			.setIssuedAt(new Date())
			.setExpiration(new Date(System.currentTimeMillis() + expiration * 1000))
			.signWith(SignatureAlgorithm.HS512, secret).compact();

		return token;
	}
}
