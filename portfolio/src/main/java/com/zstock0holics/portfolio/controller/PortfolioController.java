package com.zstock0holics.portfolio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zstock0holics.portfolio.entity.UserStock;
import com.zstock0holics.portfolio.service.PortfolioService;

@CrossOrigin(origins={"http://localhost:4200"})
@RestController(value="zstocks")
public class PortfolioController {

	@Autowired
	PortfolioService portfolioService;
	
	/*
	 * @GetMapping public String welcome() {
	 * 
	 * return "welcome two z stocks"; }
	 */

	@GetMapping("/zstock0holics/userStock")
	public List<UserStock> getUserStock() {
		return portfolioService.getUserStock();
	}
	
	
}
