import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeService } from './services/employee.service';
import { HomeComponent } from './home/home.component';
import { ObservableOperatorComponent } from './observable-operator/observable-operator.component';
import { ChessDoardComponent } from './chess-doard/chess-doard/chess-doard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateEmployeesComponent } from './employees/create-employees/create-employees.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HomeComponent,
    ObservableOperatorComponent,
    ChessDoardComponent,
    PageNotFoundComponent,
    CreateEmployeesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
