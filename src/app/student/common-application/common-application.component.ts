import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CafApiService } from '../../caf-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MustMatch } from '../../helpers/mustMatch';
import { HttpClientModule,HttpClient, HttpParams } from '@angular/common/http';
import { Caf } from 'src/app/caf';


@Component({
  selector: 'app-common-application',
  templateUrl: './common-application.component.html',
  styleUrls: ['./common-application.component.scss']
})
export class CommonApplicationComponent implements OnInit {
  CommonApplicationForm: FormGroup;
  submitted = false;
  returnUrl: string;
  // selectedPolicy: Caf = { id : null , number:null, amount: null};
  caf: Caf[];

  constructor(private router: Router,private route:ActivatedRoute,private formBuilder: FormBuilder,private http: HttpClient,private cafapiservice: CafApiService) { }

  ngOnInit() {
    this.CommonApplicationForm = this.formBuilder.group({
      username: ['', Validators.required],
      number: ['', Validators.required],
      passing_year: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      qualification: ['', Validators.required],
      course_interested: ['', Validators.required],
      city: ['', Validators.required],
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }
  // convenience getter for easy access to form fields
  get f() { return this.CommonApplicationForm.controls; }
  posts: any;

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.CommonApplicationForm.invalid) {
      return;
    }
  //   this.cafapiservice.createPolicy(form.value).subscribe((caf:Caf)=>{
  //     console.log("Data submitted",caf)
  // });

      this.cafapiservice.createStudent(this.CommonApplicationForm.value).subscribe((caf: Caf)=>{
      console.log("Policy created, ", caf);
      this.router.navigate([this.returnUrl]);
    });
  
    // let params = new HttpParams();
    // var fd:FormData=new FormData()
    // fd.append('username', this.CommonApplicationForm.value.username);
    // fd.append('number', this.CommonApplicationForm.value.number);
    // fd.append('passing_year', this.CommonApplicationForm.value.passing_year);
    // fd.append('email', this.CommonApplicationForm.value.email);
    // fd.append('qualification', this.CommonApplicationForm.value.qualification);
    // fd.append('course_interested', this.CommonApplicationForm.value.course_interested);
    // fd.append('city', this.CommonApplicationForm.value.city);

    // this.http.post('http://localhost/laravel57/public/api/adduserdetails', 
    //  fd
    // ).subscribe(
    //   res => {
    //     const response = res.toString();
    // }
    //   );

   
  

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.CommonApplicationForm.value, null, 4));
  }
   // Initialize params Object
  

onReset() {
  this.submitted = false;
  this.CommonApplicationForm.reset();
}
}


