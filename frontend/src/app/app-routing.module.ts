import { TodoComponent } from './todo/todo.component';
import { RouteGuardService } from './service/route-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

// welcome 
const routes: Routes = [
  { path: '', component: WelcomeComponent  },//canActivate, RouteGuardService
  { path: 'login', component: LoginComponent },
  // { path: 'home/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
  { path: 'myStocks', component: ListTodosComponent},
  { path: 'logout', component: LogoutComponent},
  // { path: 'todos/:id', component: TodoComponent, canActivate:[RouteGuardService] },

  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
