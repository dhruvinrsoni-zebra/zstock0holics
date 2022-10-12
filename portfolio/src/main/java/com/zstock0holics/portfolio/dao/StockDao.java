package com.zstock0holics.portfolio.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.zstock0holics.portfolio.entity.Stock;
import com.zstock0holics.portfolio.entity.User;
import com.zstock0holics.portfolio.entity.UserStock;

@Repository
public class StockDao {
	List<Stock> stocks = new ArrayList<>();
	List<UserStock> userStock = new ArrayList<>();
	
	public StockDao() {
		User u = new User(1, "DVGB", "DVGB@zebra.com", null, 1000, 10);
		Stock zebra = new Stock(2, "zebra", "zebra", 1000000, 1000.00, 995.00);
		Stock icici = new Stock(3, "icici bank", "icici", 1000000, 1000.00, 995.00);
		Stock hdfc = new Stock(4, "hdfc bank", "hdfc", 1000000, 1000.00, 995.00);
		Stock ibm = new Stock(5, "ibm soft", "ibm", 1000000, 1000.00, 995.00);
		Stock hp = new Stock(6, "hp ststems", "hp", 1000000, 1000.00, 995.00);
		Stock tata = new Stock(7, "tata sons", "tatas", 1000000, 1000.00, 995.00);
		
		stocks.add(zebra);
		stocks.add(icici);
		stocks.add(hdfc);
		stocks.add(ibm);
		stocks.add(hp);
		stocks.add(tata);
		
		UserStock us1 = new UserStock(1, zebra, u, 100, 1000);
		UserStock us2 = new UserStock(1, icici, u, 100, 1000);
		UserStock us3 = new UserStock(1, hdfc, u, 100, 1000);
		UserStock us4 = new UserStock(1, ibm, u, 100, 1000);
		UserStock us5 = new UserStock(1, hp, u, 100, 1000);
		UserStock us6 = new UserStock(1, tata, u, 100, 1000);
		userStock.add(us1);
		userStock.add(us2);
		userStock.add(us3);
		userStock.add(us4);
		userStock.add(us5);
		userStock.add(us6);
	}
	
	public List<Stock> getStock() {
		return stocks;
	}
	
	public List<UserStock> getUserStock() {
		return userStock;
	}
	
	
}
