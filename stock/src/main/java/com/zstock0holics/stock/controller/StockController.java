package com.zstock0holics.stock.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zstock0holics.stock.entity.Stock;
import com.zstock0holics.stock.service.StockService;


@RestController
public class StockController {
	
	@Autowired
	StockService stockService;
	
	@GetMapping("stock")
	public List<Stock> get() {
		return stockService.getStock();
	}
}
