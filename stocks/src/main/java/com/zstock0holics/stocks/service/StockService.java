package com.zstock0holics.stocks.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zstock0holics.stocks.dao.StockDao;
import com.zstock0holics.stocks.entity.Stock;

@Service
public class StockService {
	
	@Autowired
	StockDao stockDao;
	
	public List<Stock> getStock() {
		return stockDao.getStock();
	}
	
}
