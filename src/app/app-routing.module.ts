import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SelectionComponent } from './student/selection/selection.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonApplicationComponent } from './student/common-application/common-application.component';
import { StudentDataComponent } from './admin/student-data/student-data.component';
import { StudentEditComponent } from './admin/student-edit/student-edit.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'selection',component:SelectionComponent},
  {path:'caf', component:CommonApplicationComponent},
  {path:'a-student', component:StudentDataComponent},
  {path:'student-edit/:id',component:StudentEditComponent,data: {title: 'Edit Student'}},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
