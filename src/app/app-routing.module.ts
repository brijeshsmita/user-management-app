import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { ListUserComponent } from "./list-user/list-user.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeComponent } from './employee/employee.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HobbyComponent } from './hobby/hobby.component';
import { CareerComponent } from './career/career.component';
import { CalculatorComponent } from './calculator/calculator.component';

// Each route maps a URL path to a component
const routes: Routes = [

  // This route specifies the route to redirect to if the path
  // is empty. In our case we are redirecting to /home 
  // pathMatch property value can be full or prefix. For now we 
  // will set it to full as we want to do a full match
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'add-emp', component: EmployeeComponent },
  {path:'calculator',component:CalculatorComponent},
  {
    //path: 'search-user/:name', component: SearchComponent
  
    path: 'about-us/:id', component: AboutUsComponent
    ,    // this is the component with the <router-outlet> in the template
    children: [//child route
      {
        path: 'career', // child route path
        component: CareerComponent  // child route component that the router renders
      },
      {
        path: 'hobby',
        component: HobbyComponent // another child route component that the router renders
      }]
  },//parameterized routes
  { path: 'register', component: RegisterComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  // {path : '', component : LoginComponent}, // or  
  { path: '**', component: HomeComponent },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
