import { TODO_JPA_API_URL } from './../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }
  PortfolioURL: 'http://localhost:9081/zstock0holics/userStock';
  StockURL: 'http://localhost:9080/zstock0holics/stock';

  retrieveAllTodos(username) {
    // return this.http.get<any[]>(`${TODO_JPA_API_URL}/users/${username}/todos`);
    // return [
    //   {
    //     "stockId": 2,
    //     "stockName": "zebra",
    //     "stockSymbol": "zebra",
    //     "stockQuantity": 1000000,
    //     "currentPrice": 1000.0,
    //     "closingPrice": 995.0
    //   },
    //   {
    //     "stockId": 3,
    //     "stockName": "icici bank",
    //     "stockSymbol": "icici",
    //     "stockQuantity": 1000000,
    //     "currentPrice": 1000.0,
    //     "closingPrice": 995.0
    //   },
    //   {
    //     "stockId": 4,
    //     "stockName": "hdfc bank",
    //     "stockSymbol": "hdfc",
    //     "stockQuantity": 1000000,
    //     "currentPrice": 1000.0,
    //     "closingPrice": 995.0
    //   },
    //   {
    //     "stockId": 5,
    //     "stockName": "ibm soft",
    //     "stockSymbol": "ibm",
    //     "stockQuantity": 1000000,
    //     "currentPrice": 1000.0,
    //     "closingPrice": 995.0
    //   },
    //   {
    //     "stockId": 6,
    //     "stockName": "hp ststems",
    //     "stockSymbol": "hp",
    //     "stockQuantity": 1000000,
    //     "currentPrice": 1000.0,
    //     "closingPrice": 995.0
    //   },
    //   {
    //     "stockId": 7,
    //     "stockName": "tata sons",
    //     "stockSymbol": "tatas",
    //     "stockQuantity": 1000000,
    //     "currentPrice": 1000.0,
    //     "closingPrice": 995.0
    //   }
    // ]
    return []
  }

  retrieveALLSTOCKS(){
    return this.http.get<any[]>(`${this.StockURL}`);
    // return [
    //   {
    //     "stockId": 2,
    //     "stockName": "zebra",
    //     "stockSymbol": "zebra",
    //     "stockQuantity": 1000000,
    //     "currentPrice": 1000.0,
    //     "closingPrice": 995.0
    //   },
    //   {
    //     "stockId": 3,
    //     "stockName": "icici bank",
    //     "stockSymbol": "icici",
    //     "stockQuantity": 1000000,
    //     "currentPrice": 1000.0,
    //     "closingPrice": 995.0
    //   },
    //   {
    //     "stockId": 4,
    //     "stockName": "hdfc bank",
    //     "stockSymbol": "hdfc",
    //     "stockQuantity": 1000000,
    //     "currentPrice": 1000.0,
    //     "closingPrice": 995.0
    //   },
    //   {
    //     "stockId": 5,
    //     "stockName": "ibm soft",
    //     "stockSymbol": "ibm",
    //     "stockQuantity": 1000000,
    //     "currentPrice": 1000.0,
    //     "closingPrice": 995.0
    //   },
    //   {
    //     "stockId": 6,
    //     "stockName": "hp ststems",
    //     "stockSymbol": "hp",
    //     "stockQuantity": 1000000,
    //     "currentPrice": 1000.0,
    //     "closingPrice": 995.0
    //   },
    //   {
    //     "stockId": 7,
    //     "stockName": "tata sons",
    //     "stockSymbol": "tatas",
    //     "stockQuantity": 1000000,
    //     "currentPrice": 1000.0,
    //     "closingPrice": 995.0
    //   }
    // ]
  }

  retrieveMyStocks(){
    return this.http.get<any[]>(`${this.PortfolioURL}`);
    // return [
    //   {
    //     "userStockId": 1,
    //     "stock": {
    //       "stockId": 2,
    //       "stockName": "zebra",
    //       "stockSymbol": "zebra",
    //       "stockQuantity": 1000000,
    //       "currentPrice": 1000.0,
    //       "closingPrice": 995.0
    //     },
    //     "user": {
    //       "userId": 1,
    //       "name": "DVGB",
    //       "email": "DVGB@zebra.com",
    //       "password": null,
    //       "portfoliAmount": 1000.0,
    //       "currentAmount": 10.0
    //     },
    //     "quantity": 100,
    //     "avg": 1000.0
    //   },
    //   {
    //     "userStockId": 1,
    //     "stock": {
    //       "stockId": 3,
    //       "stockName": "icici bank",
    //       "stockSymbol": "icici",
    //       "stockQuantity": 1000000,
    //       "currentPrice": 1000.0,
    //       "closingPrice": 995.0
    //     },
    //     "user": {
    //       "userId": 1,
    //       "name": "DVGB",
    //       "email": "DVGB@zebra.com",
    //       "password": null,
    //       "portfoliAmount": 1000.0,
    //       "currentAmount": 10.0
    //     },
    //     "quantity": 100,
    //     "avg": 1000.0
    //   },
    //   {
    //     "userStockId": 1,
    //     "stock": {
    //       "stockId": 4,
    //       "stockName": "hdfc bank",
    //       "stockSymbol": "hdfc",
    //       "stockQuantity": 1000000,
    //       "currentPrice": 1000.0,
    //       "closingPrice": 995.0
    //     },
    //     "user": {
    //       "userId": 1,
    //       "name": "DVGB",
    //       "email": "DVGB@zebra.com",
    //       "password": null,
    //       "portfoliAmount": 1000.0,
    //       "currentAmount": 10.0
    //     },
    //     "quantity": 100,
    //     "avg": 1000.0
    //   },
    //   {
    //     "userStockId": 1,
    //     "stock": {
    //       "stockId": 5,
    //       "stockName": "ibm soft",
    //       "stockSymbol": "ibm",
    //       "stockQuantity": 1000000,
    //       "currentPrice": 1000.0,
    //       "closingPrice": 995.0
    //     },
    //     "user": {
    //       "userId": 1,
    //       "name": "DVGB",
    //       "email": "DVGB@zebra.com",
    //       "password": null,
    //       "portfoliAmount": 1000.0,
    //       "currentAmount": 10.0
    //     },
    //     "quantity": 100,
    //     "avg": 1000.0
    //   },
    //   {
    //     "userStockId": 1,
    //     "stock": {
    //       "stockId": 6,
    //       "stockName": "hp ststems",
    //       "stockSymbol": "hp",
    //       "stockQuantity": 1000000,
    //       "currentPrice": 1000.0,
    //       "closingPrice": 995.0
    //     },
    //     "user": {
    //       "userId": 1,
    //       "name": "DVGB",
    //       "email": "DVGB@zebra.com",
    //       "password": null,
    //       "portfoliAmount": 1000.0,
    //       "currentAmount": 10.0
    //     },
    //     "quantity": 100,
    //     "avg": 1000.0
    //   },
    //   {
    //     "userStockId": 1,
    //     "stock": {
    //       "stockId": 7,
    //       "stockName": "tata sons",
    //       "stockSymbol": "tatas",
    //       "stockQuantity": 1000000,
    //       "currentPrice": 1000.0,
    //       "closingPrice": 995.0
    //     },
    //     "user": {
    //       "userId": 1,
    //       "name": "DVGB",
    //       "email": "DVGB@zebra.com",
    //       "password": null,
    //       "portfoliAmount": 1000.0,
    //       "currentAmount": 10.0
    //     },
    //     "quantity": 100,
    //     "avg": 1000.0
    //   }
    // ]
  }

  

  // deleteTodo(username, id){
  //   return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  // }

  // retrieveTodo(username, id){
  //   return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  // }

  // updateTodo(username, id, todo){
  //   return this.http.put(
  //         `${TODO_JPA_API_URL}/users/${username}/todos/${id}`
  //               , todo);
  // }

  // createTodo(username, todo){
  //   return this.http.post(
  //             `${TODO_JPA_API_URL}/users/${username}/todos`
  //               , todo);
  // }

}
