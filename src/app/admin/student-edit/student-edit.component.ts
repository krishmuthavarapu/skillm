import { Component, OnInit } from '@angular/core';
import { CafApiService } from '../../caf-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Caf } from '../../caf';


@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {
  EditCommonApplicationForm: FormGroup;
  id: number;
  // username: string = '';
  // number: string = '';
  // city: string = '';
  // course_interested: string = '';
  // qualification: string = '';
  // passing_year: string = '';
  // students: any = {};
  // caf: Caf;
  students: Caf[];
  student: any={};
  constructor(private router: Router, private route: ActivatedRoute, private cafapiservice: CafApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  
    this.getStudents(this.route.snapshot.params['id']);
    this.route.params.subscribe( params => console.log(params.id));
    this.EditCommonApplicationForm = this.formBuilder.group({
      'username' :['', Validators.required],
      'number' :['', Validators.required],
      // 'passing_year' :['', Validators.required],
      // 'email' :['', Validators.required],
      // 'qualification' :['', Validators.required],
      // 'course_interested' :['', Validators.required],
      // 'city' :['', Validators.required],

    });
  }
  getStudents(id){    
    this.cafapiservice.getStudents(id).subscribe(data =>{
      this.id= data.id;
      console.log();
      this.EditCommonApplicationForm.setValue({
          'username':data.username,
          'number':data.number,
          // 'passing_year':data.passing_year,
          // 'email':data.email,
          // 'qualification':data.qualification,
          // 'course_interested':data.course_interested,
          // 'city':data.city

      });
      console.log("hola");
    });
  }


}
