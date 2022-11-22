(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _list_todos_list_todos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-todos/list-todos.component */ "./src/app/list-todos/list-todos.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// welcome 
var routes = [
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    // { path: 'home/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
    { path: 'myStocks', component: _list_todos_list_todos_component__WEBPACK_IMPORTED_MODULE_1__["ListTodosComponent"] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_0__["LogoutComponent"] },
    // { path: 'todos/:id', component: TodoComponent, canActivate:[RouteGuardService] },
    { path: '**', component: _error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-welcome></app-welcome>-->\r\n\r\n<!-- <app-login></app-login> -->\r\n<!--\r\n<div>Component Content</div>-->\r\n\r\n<app-menu></app-menu>\r\n\r\n<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todo';
        this.message = 'Welcome to zStockOholics';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: API_URL, TODO_JPA_API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TODO_JPA_API_URL", function() { return TODO_JPA_API_URL; });
var API_URL = "http://localhost:8080";
var TODO_JPA_API_URL = "http://localhost:8080/jpa";


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _service_http_http_intercepter_basic_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/http/http-intercepter-basic-auth.service */ "./src/app/service/http/http-intercepter-basic-auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _list_todos_list_todos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list-todos/list-todos.component */ "./src/app/list-todos/list-todos.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"],
                _list_todos_list_todos_component__WEBPACK_IMPORTED_MODULE_10__["ListTodosComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_13__["LogoutComponent"],
                _todo_todo_component__WEBPACK_IMPORTED_MODULE_14__["TodoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _service_http_http_intercepter_basic_auth_service__WEBPACK_IMPORTED_MODULE_0__["HttpIntercepterBasicAuthService"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{errorMessage}}"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
        this.errorMessage = 'An Error Occured! Contact Support at *** - ***';
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width:100%;\r\n    height: 40px;\r\n    background-color: #222222;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLDBCQUEwQjtDQUM3QiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n    <div class=\"container\">\r\n        <span class=\"text-muted\">All Rights Reserved 2022 hackOholics</span>\r\n    </div>\r\n\r\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/list-todos/list-todos.component.css":
/*!*****************************************************!*\
  !*** ./src/app/list-todos/list-todos.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span{\r\n    margin:10px\r\n}\r\n\r\n.head1{\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC10b2Rvcy9saXN0LXRvZG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxrQkFBa0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9saXN0LXRvZG9zL2xpc3QtdG9kb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW57XHJcbiAgICBtYXJnaW46MTBweFxyXG59XHJcblxyXG4uaGVhZDF7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/list-todos/list-todos.component.html":
/*!******************************************************!*\
  !*** ./src/app/list-todos/list-todos.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1> My Stocks </h1>\r\n\r\n<!-- <div class=\"alert alert-success\" *ngIf='message'>{{message}}</div> -->\r\n\r\n<div class=\"container\">\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr [ngClass]=\"head1\">\r\n        <div>\r\n          <span><div>Stock Name</div><small>Quantity</small></span>\r\n          <span><div>Current Price</div><small>Change</small></span>\r\n         </div>\r\n         <div>\r\n          <span>Average</span>\r\n          <span>Current Value</span>\r\n          <span>Unrealized P&L</span>\r\n         </div>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <!--   for (Todo todo: todos) {  -->\r\n              <tr *ngFor=\"let todo of allStocks\">\r\n                <td>\r\n                  <div>\r\n                  <span><div>{{todo.stock.stockName}}</div><small>QTY: {{todo.quantity}}</small></span>\r\n                  <span><div>{{todo.stock.currentPrice}}</div>\r\n                    <small>{{todo.stock.currentPrice - todo.stock.closingPrice}}</small></span>\r\n                 </div>\r\n                 <div>\r\n                  <span>{{todo.avg}}</span>\r\n                  <span>{{todo.stock.currentPrice * todo.quantity}}</span>\r\n                  <span>{{(todo.avg - todo.stock.currentPrice)*todo.quantity}}</span>\r\n                 </div>\r\n\r\n                </td>\r\n              </tr>\r\n      <!-- } -->\r\n    </tbody>\r\n\r\n  </table>\r\n\r\n  <!-- <div class=\"row\">\r\n      <button (click)=\"addTodo()\" class=\"btn btn-success\">Add</button>\r\n  </div> -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/list-todos/list-todos.component.ts":
/*!****************************************************!*\
  !*** ./src/app/list-todos/list-todos.component.ts ***!
  \****************************************************/
/*! exports provided: Todo, ListTodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTodosComponent", function() { return ListTodosComponent; });
/* harmony import */ var _service_data_todo_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../service/data/todo-data.service */ "./src/app/service/data/todo-data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Todo = /** @class */ (function () {
    function Todo(id, description, done, targetDate) {
        this.id = id;
        this.description = description;
        this.done = done;
        this.targetDate = targetDate;
    }
    return Todo;
}());

var ListTodosComponent = /** @class */ (function () {
    // = [
    //   new Todo(1, 'Learn to Dance', false, new Date()),
    //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
    //   new Todo(3, 'Visit India', false, new Date())
    //   // {id : 1, description : },
    //   // {id : 2, description : ''},
    //   // {id : 3, description : 'Visit India'}
    // ]
    // todo = {
    //     id : 1,
    //     description: 'Learn to Dance'
    // }
    function ListTodosComponent(todoService, router) {
        this.todoService = todoService;
        this.router = router;
    }
    ListTodosComponent.prototype.ngOnInit = function () {
        this.refreshTodos();
    };
    // refreshTodos(){
    //   this.todoService.retrieveALLSTOCKS().subscribe(
    //     response => {
    //       console.log(response);
    //       this.todos = response;
    //     }
    //   )
    // }
    ListTodosComponent.prototype.refreshTodos = function () {
        var _this = this;
        this.todoService.retrieveMyStocks().subscribe(function (response) {
            console.log(response);
            _this.allStocks = response;
        });
        console.log(this.allStocks[0]);
    };
    // deleteTodo(id) {
    //   console.log(`delete todo ${id}` )
    //   this.todoService.deleteTodo('in28minutes', id).subscribe (
    //     response => {
    //       console.log(response);
    //       this.message = `Delete of Todo ${id} Successful!`;
    //       this.refreshTodos();
    //     }
    //   )
    // }
    ListTodosComponent.prototype.updateTodo = function (id) {
        console.log("update " + id);
        // this.router.navigate(['todos',id])
    };
    ListTodosComponent.prototype.addTodo = function () {
        // this.router.navigate(['todos',-1])
    };
    ListTodosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-todos',
            template: __webpack_require__(/*! ./list-todos.component.html */ "./src/app/list-todos/list-todos.component.html"),
            styles: [__webpack_require__(/*! ./list-todos.component.css */ "./src/app/list-todos/list-todos.component.css")]
        }),
        __metadata("design:paramtypes", [_service_data_todo_data_service__WEBPACK_IMPORTED_MODULE_0__["TodoDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListTodosComponent);
    return ListTodosComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<H1>Login!</H1>\r\n\r\n<div class=\"container\">\r\n  <div class=\"alert alert-warning\" *ngIf='invalidLogin'>{{errorMessage}}</div>\r\n\r\n  <div>\r\n    User Name : <input type=\"text\" name=\"username\" [(ngModel)]=\"username\">\r\n    Password  : <input type=\"password\" name=\"password\" [(ngModel)]=\"password\">\r\n\r\n    <!-- User Name : {{username}} -->\r\n\r\n    <!-- <button (click)=handleLogin() class=\"btn btn-success\">Login</button> -->\r\n    <!-- <button (click)=handleBasicAuthLogin() class=\"btn btn-success\">Login</button> -->\r\n    <button (click)=handleJWTAuthLogin() class=\"btn btn-success\">Login</button>\r\n    \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _service_basic_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../service/basic-authentication.service */ "./src/app/service/basic-authentication.service.ts");
/* harmony import */ var _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../service/hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    //Router
    //Angular.giveMeRouter
    //Dependency Injection
    function LoginComponent(router, hardcodedAuthenticationService, basicAuthenticationService) {
        this.router = router;
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
        this.basicAuthenticationService = basicAuthenticationService;
        this.username = 'in28minutes';
        this.password = 'dummy';
        this.errorMessage = 'Invalid Credentials';
        this.invalidLogin = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.handleLogin = function () {
        // console.log(this.username);
        //if(this.username==="in28minutes" && this.password === 'dummy') {
        if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
            //Redirect to Welcome Page
            this.router.navigate(['']);
            this.invalidLogin = false;
        }
        else {
            this.invalidLogin = true;
        }
    };
    LoginComponent.prototype.handleBasicAuthLogin = function () {
        var _this = this;
        // console.log(this.username);
        //if(this.username==="in28minutes" && this.password === 'dummy') {
        this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['']);
            _this.invalidLogin = false;
        }, function (error) {
            console.log(error);
            _this.invalidLogin = true;
        });
    };
    LoginComponent.prototype.handleJWTAuthLogin = function () {
        var _this = this;
        this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['']);
            _this.invalidLogin = false;
        }, function (error) {
            console.log(error);
            _this.invalidLogin = true;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_1__["HardcodedAuthenticationService"],
            _service_basic_authentication_service__WEBPACK_IMPORTED_MODULE_0__["BasicAuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<H1>You are logged out</H1>\r\n<div class=\"container\">\r\n  Thank You For Using Our Application.\r\n</div>"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../service/hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(hardcodedAuthenticationService) {
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.hardcodedAuthenticationService.logout();
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_0__["HardcodedAuthenticationService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\r\n        <div><a routerLink=\"/\" class=\"navbar-brand\">\r\n            zStockOholics</a></div>\r\n\r\n        <ul class=\"navbar-nav\">\r\n            <li><a routerLink=\"/\" class=\"nav-link\">Home</a></li>\r\n            <li><a routerLink=\"/myStocks\" class=\"nav-link\">myStocks</a></li>\r\n        </ul>\r\n\r\n        <ul class=\"navbar-nav navbar-collapse justify-content-end\">\r\n                <li><a *ngIf=\"!hardcodedAuthenticationService.isUserLoggedIn()\" routerLink=\"/login\" class=\"nav-link\">Login</a></li>\r\n                <li><a *ngIf=\"hardcodedAuthenticationService.isUserLoggedIn()\" routerLink=\"/logout\" class=\"nav-link\">Logout</a></li>\r\n        </ul>\r\n    </nav>\r\n</header>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../service/hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    //isUserLoggedIn: boolean = false;
    function MenuComponent(hardcodedAuthenticationService) {
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        //this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_0__["HardcodedAuthenticationService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/service/basic-authentication.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/service/basic-authentication.service.ts ***!
  \*********************************************************/
/*! exports provided: TOKEN, AUTHENTICATED_USER, BasicAuthenticationService, AuthenticationBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN", function() { return TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATED_USER", function() { return AUTHENTICATED_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAuthenticationService", function() { return BasicAuthenticationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationBean", function() { return AuthenticationBean; });
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TOKEN = 'token';
var AUTHENTICATED_USER = 'authenticaterUser';
var BasicAuthenticationService = /** @class */ (function () {
    function BasicAuthenticationService(http) {
        this.http = http;
    }
    BasicAuthenticationService.prototype.executeJWTAuthenticationService = function (username, password) {
        return this.http.post(_app_constants__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + "/authenticate", {
            username: username,
            password: password
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, "Bearer " + data.token);
            return data;
        }));
        //console.log("Execute Hello World Bean Service")
    };
    BasicAuthenticationService.prototype.executeAuthenticationService = function (username, password) {
        var basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: basicAuthHeaderString
        });
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + "/basicauth", { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
        }));
        //console.log("Execute Hello World Bean Service")
    };
    BasicAuthenticationService.prototype.getAuthenticatedUser = function () {
        return sessionStorage.getItem(AUTHENTICATED_USER);
    };
    BasicAuthenticationService.prototype.getAuthenticatedToken = function () {
        if (this.getAuthenticatedUser())
            return sessionStorage.getItem(TOKEN);
    };
    BasicAuthenticationService.prototype.isUserLoggedIn = function () {
        var user = sessionStorage.getItem(AUTHENTICATED_USER);
        return !(user === null);
    };
    BasicAuthenticationService.prototype.logout = function () {
        sessionStorage.removeItem(AUTHENTICATED_USER);
        sessionStorage.removeItem(TOKEN);
    };
    BasicAuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BasicAuthenticationService);
    return BasicAuthenticationService;
}());

var AuthenticationBean = /** @class */ (function () {
    function AuthenticationBean(message) {
        this.message = message;
    }
    return AuthenticationBean;
}());



/***/ }),

/***/ "./src/app/service/data/todo-data.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/data/todo-data.service.ts ***!
  \***************************************************/
/*! exports provided: TodoDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDataService", function() { return TodoDataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoDataService = /** @class */ (function () {
    function TodoDataService(http) {
        this.http = http;
    }
    TodoDataService.prototype.retrieveAllTodos = function (username) {
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
        return [];
    };
    TodoDataService.prototype.retrieveALLSTOCKS = function () {
        var StockURL = 'http://localhost:9080/zstock0holics/stock';
        return this.http.get("" + StockURL);
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
    };
    TodoDataService.prototype.retrieveMyStocks = function () {
        var PortfolioURL = 'http://localhost:9081/zstock0holics/userStock';
        return this.http.get("" + PortfolioURL);
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
    };
    TodoDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], TodoDataService);
    return TodoDataService;
}());



/***/ }),

/***/ "./src/app/service/hardcoded-authentication.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/service/hardcoded-authentication.service.ts ***!
  \*************************************************************/
/*! exports provided: HardcodedAuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardcodedAuthenticationService", function() { return HardcodedAuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HardcodedAuthenticationService = /** @class */ (function () {
    function HardcodedAuthenticationService() {
    }
    HardcodedAuthenticationService.prototype.authenticate = function (username, password) {
        //console.log('before ' + this.isUserLoggedIn());
        if (username === "in28minutes" && password === 'dummy') {
            sessionStorage.setItem('authenticaterUser', username);
            //console.log('after ' + this.isUserLoggedIn());
            return true;
        }
        return false;
    };
    HardcodedAuthenticationService.prototype.isUserLoggedIn = function () {
        var user = sessionStorage.getItem('authenticaterUser');
        return !(user === null);
    };
    HardcodedAuthenticationService.prototype.logout = function () {
        sessionStorage.removeItem('authenticaterUser');
    };
    HardcodedAuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HardcodedAuthenticationService);
    return HardcodedAuthenticationService;
}());



/***/ }),

/***/ "./src/app/service/http/http-intercepter-basic-auth.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/service/http/http-intercepter-basic-auth.service.ts ***!
  \*********************************************************************/
/*! exports provided: HttpIntercepterBasicAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpIntercepterBasicAuthService", function() { return HttpIntercepterBasicAuthService; });
/* harmony import */ var _basic_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../basic-authentication.service */ "./src/app/service/basic-authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpIntercepterBasicAuthService = /** @class */ (function () {
    function HttpIntercepterBasicAuthService(basicAuthenticationService) {
        this.basicAuthenticationService = basicAuthenticationService;
    }
    HttpIntercepterBasicAuthService.prototype.intercept = function (request, next) {
        // let username = 'in28minutes'
        // let password = 'dummy'
        //let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
        var basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
        var username = this.basicAuthenticationService.getAuthenticatedUser();
        if (basicAuthHeaderString && username) {
            request = request.clone({
                setHeaders: {
                    Authorization: basicAuthHeaderString
                }
            });
        }
        return next.handle(request);
    };
    HttpIntercepterBasicAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_basic_authentication_service__WEBPACK_IMPORTED_MODULE_0__["BasicAuthenticationService"]])
    ], HttpIntercepterBasicAuthService);
    return HttpIntercepterBasicAuthService;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.css":
/*!*****************************************!*\
  !*** ./src/app/todo/todo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-invalid:not(form) {\r\n    border-left: 5px solid red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7Q0FDOUIiLCJmaWxlIjoic3JjL2FwcC90b2RvL3RvZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy1pbnZhbGlkOm5vdChmb3JtKSB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/todo/todo.component.html":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<H1>Todo</H1>\r\n\r\n<div class=\"container\">\r\n  <div class=\"alert alert-warning\" *ngIf=\"todoForm.dirty && todoForm.invalid\">Enter valid values</div>\r\n  <div class=\"alert alert-warning\" *ngIf=\"todoForm.dirty && targetDate.invalid\">Enter valid Target Date</div>\r\n  <div class=\"alert alert-warning\" *ngIf=\"todoForm.dirty && description.invalid\">Enter atleast 5 characters in Description</div>\r\n  \r\n  <form (ngSubmit)=\"!todoForm.invalid && saveTodo()\" #todoForm=\"ngForm\">\r\n    <fieldset class=\"form-group\">\r\n      <label>Description</label>\r\n      <input type=\"text\" #description=\"ngModel\" \r\n            [(ngModel)]=\"todo.description\" class=\"form-control\" \r\n                name=\"description\" required=\"required\" minlength=\"5\">\r\n    </fieldset>\r\n\r\n    <fieldset class=\"form-group\">\r\n        <label>Target Date</label>\r\n        <input type=\"date\" #targetDate=\"ngModel\"\r\n        [ngModel]=\"todo.targetDate | date:'yyyy-MM-dd' \"\r\n        (ngModelChange)=\"todo.targetDate = $event\"\r\n        class=\"form-control\" name=\"targetDate\" required=\"required\" >\r\n    </fieldset>\r\n\r\n    <button type=\"submit\" class=\"btn btn-success\">Save</button>\r\n  </form>  \r\n</div>"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_data_todo_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../service/data/todo-data.service */ "./src/app/service/data/todo-data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list_todos_list_todos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../list-todos/list-todos.component */ "./src/app/list-todos/list-todos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoComponent = /** @class */ (function () {
    function TodoComponent(todoService, route, router) {
        this.todoService = todoService;
        this.route = route;
        this.router = router;
    }
    TodoComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.todo = new _list_todos_list_todos_component__WEBPACK_IMPORTED_MODULE_3__["Todo"](this.id, '', false, new Date());
        // if(this.id!=-1) {
        //   this.todoService.retrieveTodo('in28minutes', this.id)
        //       .subscribe (
        //         data => this.todo = data
        //       )
        // }
    };
    TodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.css */ "./src/app/todo/todo.component.css")]
        }),
        __metadata("design:paramtypes", [_service_data_todo_data_service__WEBPACK_IMPORTED_MODULE_1__["TodoDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1> ALL Stocks </h1>\r\n\r\n<!-- <div class=\"alert alert-success\" *ngIf='message'>{{message}}</div> -->\r\n\r\n<div class=\"container\">\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <!-- <th>Name</th> -->\r\n        <th>Symbol</th>\r\n        <th>Quantity</th>\r\n        <th>Current Price</th>\r\n        <th>Closing Price</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <!--   for (Todo todo: todos) {  -->\r\n              <tr *ngFor=\"let todo of allStocks\">\r\n                <td>{{todo.stockId}}</td>\r\n                <!-- <td>{{todo.stockName}}</td> -->\r\n                <td><div>{{todo.stockSymbol}}</div><small>({{todo.stockName}})</small></td>\r\n                <td>{{todo.stockQuantity}}</td>\r\n                <td>{{todo.currentPrice}}</td>\r\n                <td>{{todo.closingPrice}}</td>\r\n              </tr>\r\n      <!-- } -->\r\n    </tbody>\r\n\r\n  </table>\r\n\r\n  <!-- <div class=\"row\">\r\n      <button (click)=\"addTodo()\" class=\"btn btn-success\">Add</button>\r\n  </div> -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent, Class1, Class2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Class1", function() { return Class1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Class2", function() { return Class2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data_todo_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../service/data/todo-data.service */ "./src/app/service/data/todo-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//package com.in28minutes.springboot.web;
//import org.springframework.boot.SpringApplication;
 //'./app.component';
//import { AppComponent } from '../app.component';

//@ComponentScan(
//      value = "com.in28minutes.springboot.web")
var WelcomeComponent = /** @class */ (function () {
    //String message = "Some Welcome Message"
    //public SpringBootFirstWebApplication() {	
    //ActivatedRoute
    function WelcomeComponent(todoService) {
        this.todoService = todoService;
    }
    // void init() {
    WelcomeComponent.prototype.ngOnInit = function () {
        //COMPILATION ERROR this.message = 5
        //console.log(this.message)
        // console.log(this.route.snapshot.params['name'])
        // this.name = this.route.snapshot.params['name'];
        this.refreshTodos();
    };
    WelcomeComponent.prototype.refreshTodos = function () {
        var _this = this;
        // this.allStocks = this.todoService.retrieveALLSTOCKS();
        this.todoService.retrieveALLSTOCKS().subscribe(function (response) {
            console.log(response);
            _this.allStocks = response;
        });
        console.log(this.allStocks[0]);
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        })
        //public class SpringBootFirstWebApplication implements SomeInterface{
        ,
        __metadata("design:paramtypes", [_service_data_todo_data_service__WEBPACK_IMPORTED_MODULE_1__["TodoDataService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());

var Class1 = /** @class */ (function () {
    function Class1() {
    }
    return Class1;
}());

var Class2 = /** @class */ (function () {
    function Class2() {
    }
    return Class2;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ds3741\Downloads\todo (2)\todo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map