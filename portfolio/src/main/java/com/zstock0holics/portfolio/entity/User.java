package com.zstock0holics.portfolio.entity;

import java.util.Arrays;
import java.util.Objects;

public class User {
//	@id
	private int userId;
	private String name;
	private String email;
	private char[] password;
	private double portfoliAmount;
	private double currentAmount;
	
	public User() {
		// TODO Auto-generated constructor stub
	}

	public User(int userId, String name, String email, char[] password, double portfoliAmount, double currentAmount) {
		super();
		this.userId = userId;
		this.name = name;
		this.email = email;
		this.password = password;
		this.portfoliAmount = portfoliAmount;
		this.currentAmount = currentAmount;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public char[] getPassword() {
		return password;
	}

	public void setPassword(char[] password) {
		this.password = password;
	}

	public double getPortfoliAmount() {
		return portfoliAmount;
	}

	public void setPortfoliAmount(double portfoliAmount) {
		this.portfoliAmount = portfoliAmount;
	}

	public double getCurrentAmount() {
		return currentAmount;
	}

	public void setCurrentAmount(double currentAmount) {
		this.currentAmount = currentAmount;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + Arrays.hashCode(password);
		result = prime * result + Objects.hash(currentAmount, email, name, portfoliAmount, userId);
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		return Double.doubleToLongBits(currentAmount) == Double.doubleToLongBits(other.currentAmount)
				&& Objects.equals(email, other.email) && Objects.equals(name, other.name)
				&& Arrays.equals(password, other.password)
				&& Double.doubleToLongBits(portfoliAmount) == Double.doubleToLongBits(other.portfoliAmount)
				&& userId == other.userId;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", name=" + name + ", email=" + email + ", password="
				+ Arrays.toString(password) + ", portfoliAmount=" + portfoliAmount + ", currentAmount=" + currentAmount
				+ "]";
	}
	
	
}
