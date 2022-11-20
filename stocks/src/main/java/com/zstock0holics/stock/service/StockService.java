package com.zstock0holics.stock.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zstock0holics.stock.dao.StockDao;
import com.zstock0holics.stock.entity.Stock;

@Service
public class StockService {
	
	@Autowired
	StockDao stockDao;
	
	public List<Stock> getStock() {
		return stockDao.getStock();
	}
	
}
