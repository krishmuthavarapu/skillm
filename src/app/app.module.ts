import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SelectionComponent } from './student/selection/selection.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonApplicationComponent } from './student/common-application/common-application.component';
import { HttpClientModule } from "@angular/common/http";
import { StudentDataComponent } from './admin/student-data/student-data.component';
import { StudentEditComponent } from './admin/student-edit/student-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SelectionComponent,
    PageNotFoundComponent,
    CommonApplicationComponent,
    StudentDataComponent,
    StudentEditComponent
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
