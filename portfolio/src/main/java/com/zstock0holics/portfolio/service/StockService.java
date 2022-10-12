package com.zstock0holics.portfolio.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zstock0holics.portfolio.dao.StockDao;
import com.zstock0holics.portfolio.entity.Stock;
import com.zstock0holics.portfolio.entity.UserStock;

@Service
public class StockService {
	
	@Autowired
	StockDao stockDao;
	public List<Stock> getStock() {
		return stockDao.getStock();
	}
	
	public List<UserStock> getUserStock() {
		return stockDao.getUserStock();
	}
}
