import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { ObservableOperatorComponent } from './observable-operator/observable-operator.component';
import { ChessDoardComponent } from './chess-doard/chess-doard/chess-doard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateEmployeesComponent } from './employees/create-employees/create-employees.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'employees', component: EmployeeListComponent },
  {path: 'create', component: CreateEmployeesComponent},
  {path: 'obsOper', component: ObservableOperatorComponent},
  {path: 'chess', component: ChessDoardComponent },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
