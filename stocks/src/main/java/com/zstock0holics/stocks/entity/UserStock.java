package com.zstock0holics.stocks.entity;

import java.util.Objects;

import org.springframework.stereotype.Component;

@Component	
public class UserStock {
//	@id
	private int userStockId;
	
//	; - fk
//	@OneToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "stockId", referencedColumnName = "stockId")
	private Stock stock;
	
//	@OneToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "userId", referencedColumnName = "userId")
	private User user;
	private int quantity;
	private double avg;
	
	public UserStock() {
		super();
	}

	public UserStock(int userStockId, Stock stock, User user, int quantity, double avg) {
		super();
		this.userStockId = userStockId;
		this.stock = stock;
		this.user = user;
		this.quantity = quantity;
		this.avg = avg;
	}

	public int getUserStockId() {
		return userStockId;
	}

	public void setUserStockId(int userStockId) {
		this.userStockId = userStockId;
	}

	public Stock getStock() {
		return stock;
	}

	public void setStock(Stock stock) {
		this.stock = stock;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getAvg() {
		return avg;
	}

	public void setAvg(double avg) {
		this.avg = avg;
	}

	@Override
	public int hashCode() {
		return Objects.hash(avg, quantity, stock, user, userStockId);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		UserStock other = (UserStock) obj;
		return Double.doubleToLongBits(avg) == Double.doubleToLongBits(other.avg) && quantity == other.quantity
				&& Objects.equals(stock, other.stock) && Objects.equals(user, other.user)
				&& userStockId == other.userStockId;
	}

	@Override
	public String toString() {
		return "UserStock [userStockId=" + userStockId + ", stock=" + stock + ", user=" + user + ", quantity="
				+ quantity + ", avg=" + avg + "]";
	}

}
