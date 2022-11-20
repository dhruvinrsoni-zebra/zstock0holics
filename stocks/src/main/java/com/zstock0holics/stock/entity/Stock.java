package com.zstock0holics.stock.entity;

import java.util.Objects;

public class Stock {
//	@id
	private int stockId;
	private String stockName;
	private String stockSymbol;
	private int stockQuantity;
	private double currentPrice;
	private double closingPrice;
	
	public Stock() {
		super();
	}

	public Stock(int stockId, String stockName, String stockSymbol, int stockQuantity, double currentPrice,
			double closingPrice) {
		super();
		this.stockId = stockId;
		this.stockName = stockName;
		this.stockSymbol = stockSymbol;
		this.stockQuantity = stockQuantity;
		this.currentPrice = currentPrice;
		this.closingPrice = closingPrice;
	}

	public int getStockId() {
		return stockId;
	}

	public void setStockId(int stockId) {
		this.stockId = stockId;
	}

	public String getStockName() {
		return stockName;
	}

	public void setStockName(String stockName) {
		this.stockName = stockName;
	}

	public String getStockSymbol() {
		return stockSymbol;
	}

	public void setStockSymbol(String stockSymbol) {
		this.stockSymbol = stockSymbol;
	}

	public int getStockQuantity() {
		return stockQuantity;
	}

	public void setStockQuantity(int stockQuantity) {
		this.stockQuantity = stockQuantity;
	}

	public double getCurrentPrice() {
		return currentPrice;
	}

	public void setCurrentPrice(double currentPrice) {
		this.currentPrice = currentPrice;
	}

	public double getClosingPrice() {
		return closingPrice;
	}

	public void setClosingPrice(double closingPrice) {
		this.closingPrice = closingPrice;
	}

	@Override
	public int hashCode() {
		return Objects.hash(closingPrice, currentPrice, stockId, stockName, stockQuantity, stockSymbol);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Stock other = (Stock) obj;
		return Double.doubleToLongBits(closingPrice) == Double.doubleToLongBits(other.closingPrice)
				&& Double.doubleToLongBits(currentPrice) == Double.doubleToLongBits(other.currentPrice)
				&& stockId == other.stockId && Objects.equals(stockName, other.stockName)
				&& stockQuantity == other.stockQuantity && Objects.equals(stockSymbol, other.stockSymbol);
	}

	@Override
	public String toString() {
		return "Stock [stockId=" + stockId + ", stockName=" + stockName + ", stockSymbol=" + stockSymbol
				+ ", stockQuantity=" + stockQuantity + ", currentPrice=" + currentPrice + ", closingPrice="
				+ closingPrice + "]";
	}
	
}
