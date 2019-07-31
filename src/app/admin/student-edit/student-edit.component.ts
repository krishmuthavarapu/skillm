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
  caf: Caf[];
  student: any={};
  submitted = false;
  returnUrl: string;

  constructor(private router: Router, private route: ActivatedRoute, private cafapiservice: CafApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  
    this.getStudents(this.route.snapshot.params['id']);
    this.route.params.subscribe( params => console.log(params.id));
    this.EditCommonApplicationForm = this.formBuilder.group({
      id :['', Validators.required],
      username:['', Validators.required],
      number :['', Validators.required],
      passing_year :['', Validators.required],
      email :['', [Validators.required, Validators.email]],
      qualification :['', Validators.required],
      course_interested :['', Validators.required],
      city :['', Validators.required],

    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }
  getStudents(id){    
    this.cafapiservice.getStudents(id).subscribe(data =>{
      this.id= data[0];
      console.log(data[0].username);

      this.EditCommonApplicationForm.setValue({
          id :data[0].id,
          username:data[0].username,
          number:data[0].number,
          passing_year:data[0].passing_year,
          email:data[0].email,
          qualification:data[0].qualification,
          course_interested:data[0].course_interested,
          city:data[0].city

      });
      // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'a-student',{queryParams: { updated: 'true' } };
      // console.log(id);
    });
  }
  
  onSubmit() {
 
    this.submitted = true;
    if (this.EditCommonApplicationForm.invalid) {
      return;
    }
      this.cafapiservice.updateStudent(this.EditCommonApplicationForm.value).subscribe((caf: Caf)=>{
      console.log("Policy Updated, ", caf);
      this.router.navigate(['a-student'], {queryParams: { updated: 'true' } });
    });
  }

  onReset() {
    this.submitted = false;
    this.EditCommonApplicationForm.reset();
  }
}