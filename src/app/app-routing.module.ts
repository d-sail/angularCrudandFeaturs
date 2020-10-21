import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { ObservableOperatorComponent } from './observable-operator/observable-operator.component';
import { ChessDoardComponent } from './chess-doard/chess-doard/chess-doard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateEmployeesComponent } from './employees/create-employees/create-employees.component';
import { NotesListComponent } from './notesApp/notes-list/notes-list.component';
import { CreateNotesComponent } from './notesApp/create-notes/create-notes.component';
import { RxjsSbujectComponent } from './observable-operator/rxjs-sbuject/rxjs-sbuject.component';
import { CreateEmployeeCanDeactivateGuardServiceGuard } from './routeGuards/create-employee-can-deactivate-guard-service.guard';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'employees', component: EmployeeListComponent },
  {path: 'create', component: CreateEmployeesComponent, canDeactivate: [CreateEmployeeCanDeactivateGuardServiceGuard]},
  {path: 'employeeById/:id', component: EmployeeDetailsComponent },
  {path: 'obsOper', component: ObservableOperatorComponent},
  {path: 'subject/:id/:name', component: RxjsSbujectComponent},
  {path: 'chess', component: ChessDoardComponent },
  {path: 'notes', component: NotesListComponent },
  {path: 'createNotes', component: CreateNotesComponent},
  {path: 'update/:id', component: CreateNotesComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
