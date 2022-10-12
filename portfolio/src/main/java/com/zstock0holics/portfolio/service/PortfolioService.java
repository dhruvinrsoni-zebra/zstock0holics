package com.zstock0holics.portfolio.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zstock0holics.portfolio.dao.PortfolioDao;
import com.zstock0holics.portfolio.entity.Stock;
import com.zstock0holics.portfolio.entity.UserStock;

@Service
public class PortfolioService {
	
	@Autowired
	PortfolioDao portfolioDao;
	
	public List<UserStock> getUserStock() {
		return portfolioDao.getUserStock();
	}
}
