import { WelcomeDataService } from './../service/data/welcome-data.service';
import { ActivatedRoute } from '@angular/router';
//package com.in28minutes.springboot.web;

//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';//'./app.component';
//import { AppComponent } from '../app.component';
import { TodoDataService } from './../service/data/todo-data.service';
import { Router } from '@angular/router';

//@ComponentScan(
//      value = "com.in28minutes.springboot.web")
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//public class SpringBootFirstWebApplication implements SomeInterface{
export class WelcomeComponent implements OnInit {

  // message = 'Some Welcome Message'
  // welcomeMessageFromService:string
  // name = ''
  
  allStocks: any[]
  //String message = "Some Welcome Message"
  
  //public SpringBootFirstWebApplication() {	

  //ActivatedRoute
  constructor(
    private todoService:TodoDataService) { 

  }

  // void init() {
  ngOnInit(){
    //COMPILATION ERROR this.message = 5
    //console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    // this.name = this.route.snapshot.params['name'];
    this.refreshTodos();
    
  }
  refreshTodos(){
    this.allStocks = this.todoService.retrieveALLSTOCKS();
    console.log(this.allStocks[0])
  }

  // getWelcomeMessage() {
  //   //console.log(this.service.executeHelloWorldBeanService());
    
  //   this.service.executeHelloWorldBeanService().subscribe(
  //     response => this.handleSuccessfulResponse(response),
  //     error => this.handleErrorResponse(error)
  //   );
    
  //   //console.log('last line of getWelcomeMessage')

  //   //console.log("get welcome message");
  // }

  // getWelcomeMessageWithParameter() {
  //   //console.log(this.service.executeHelloWorldBeanService());
    
  //   this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
  //     response => this.handleSuccessfulResponse(response),
  //     error => this.handleErrorResponse(error)
  //   );
    
  //   //console.log('last line of getWelcomeMessage')

  //   //console.log("get welcome message");
  // }


  // handleSuccessfulResponse(response){
  //   this.welcomeMessageFromService = response.message
  //   //console.log(response);
  //   //console.log(response.message);
  // }

  // handleErrorResponse(error) {
  //   //console.log(error);
  //   //console.log(error.error);
  //   //console.log(error.error.message);
  //   this.welcomeMessageFromService = error.error.message
  // }
}

export class Class1 {

}

export class Class2 {
  
}