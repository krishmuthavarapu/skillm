import { Component, OnInit } from '@angular/core';
import { CafApiService } from '../../caf-api.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
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
  submitted = false;
  returnUrl: string;

  constructor(private router: Router, private route: ActivatedRoute, private cafapiservice: CafApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  
    this.getStudents(this.route.snapshot.params['id']);
    this.route.params.subscribe( params => console.log(params.id));
    this.EditCommonApplicationForm = this.formBuilder.group({
      'username' :['', Validators.required],
      'number' :['', Validators.required],
      'passing_year' :['', Validators.required],
      'email' :['', Validators.required],
      'qualification' :['', Validators.required],
      'course_interested' :['', Validators.required],
      'city' :['', Validators.required],

    });
  }
  getStudents(id){    
    this.cafapiservice.getStudents(id).subscribe(data =>{
      this.id= data.id;
      console.log(data[0].username);

      this.EditCommonApplicationForm.setValue({
          'username':data[0].username,
          'number':data[0].number,
          'passing_year':data[0].passing_year,
          'email':data[0].email,
          'qualification':data[0].qualification,
          'course_interested':data[0].course_interested,
          'city':data[0].city

      });
      // console.log(id);
    });
  }
  
  onSubmit() {
 
    this.submitted = true;

    // stop here if form is invalid
    if (this.EditCommonApplicationForm.invalid) {
      return;
    }
    this.EditCommonApplicationForm.value.id = this.id;
    console.log(this.id);
   //   this.cafapiservice.createPolicy(form.value).subscribe((caf:Caf)=>{
  //     console.log("Data submitted",caf)
  // });

      this.cafapiservice.updateStudent(this.EditCommonApplicationForm.value).subscribe((caf: Caf)=>{
      console.log("Policy created, ", caf);
      this.router.navigate([this.returnUrl]);
    });
  }


}