import { Component, OnInit } from '@angular/core';
import {CafApiService} from '../../caf-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Caf } from '../../caf';


@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {
  CommonApplicationForm: FormGroup;
  id:number;
  username:string='';
  number:string='';
  students: Caf[];
  constructor(private router: Router,private route:ActivatedRoute,private cafapiservice: CafApiService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    
    this.getStudents(this.route.snapshot.params['id']);
    this.CommonApplicationForm = this.formBuilder.group({
      // username: ['', Validators.required],
      // number: ['', Validators.required],
      // passing_year: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      // qualification: ['', Validators.required],
      // course_interested: ['', Validators.required],
      // city: ['', Validators.required],
      
      'username' :[null, Validators.required],
      'number' :[null, Validators.required],
      'passing_year' :[null, Validators.required],
      'email' :[null, Validators.required],
      'qualification' :[null, Validators.required],
      'course_interested' :[null, Validators.required],
      'city' :[null, Validators.required],
     
    });
    
  }

  getStudents(id){
    
    this.cafapiservice.getStudents(id).subscribe(data =>{
      this.id= data.id;
      console.log(this.id);
      this.CommonApplicationForm.setValue({
          username:data.username,
          number:data.number,
          passing_year:data.passing_year,
          email:data.email,
          qualification:data.qualification,
          course_interested:data.course_interested,
          city:data.city
          
      });
    });
    console.log("heyo");
  }

}
