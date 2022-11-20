package com.zstock0holics.stocks.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zstock0holics.stocks.entity.Stock;
import com.zstock0holics.stocks.service.StockService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class StockController {
	
	@Autowired
	StockService stockService;
	
	@GetMapping("stock")
	public List<Stock> get() {
		return stockService.getStock();
	}
}
