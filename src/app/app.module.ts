import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeService } from './services/employee.service';
import { HomeComponent } from './home/home.component';
import { ObservableOperatorComponent } from './observable-operator/observable-operator.component';
import { ChessDoardComponent } from './chess-doard/chess-doard/chess-doard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateEmployeesComponent } from './employees/create-employees/create-employees.component';
import { NotesListComponent } from './notesApp/notes-list/notes-list.component';
import { CreateNotesComponent } from './notesApp/create-notes/create-notes.component';
import { FilterPipe } from './pipes/filter.pipe';
import { RxjsSbujectComponent } from './observable-operator/rxjs-sbuject/rxjs-sbuject.component';
import { DropdownDirective } from './customDirectives/dropdown.directive';
import { CreateEmployeeCanDeactivateGuardServiceGuard } from './routeGuards/create-employee-can-deactivate-guard-service.guard';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HomeComponent,
    ObservableOperatorComponent,
    ChessDoardComponent,
    PageNotFoundComponent,
    CreateEmployeesComponent,
    NotesListComponent,
    CreateNotesComponent,
    FilterPipe,
    RxjsSbujectComponent,
    DropdownDirective,
    EmployeeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [EmployeeService, CreateEmployeeCanDeactivateGuardServiceGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
