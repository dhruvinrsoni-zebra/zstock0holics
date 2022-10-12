package com.zstock0holics.portfolio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zstock0holics.portfolio.entity.Stock;
import com.zstock0holics.portfolio.entity.UserStock;
import com.zstock0holics.portfolio.service.StockService;

@RestController(value="zstocks")
public class StockController {

	@Autowired
	StockService stockService;
	
	@GetMapping
	public String welcome() {
		
		return "welcome two z stocks";
	}
	
	@GetMapping("stock")
	public List<Stock> get() {
		return stockService.getStock();
	}
	
	@GetMapping("userStock")
	public List<UserStock> getUserStock() {
		return stockService.getUserStock();
	}
}
