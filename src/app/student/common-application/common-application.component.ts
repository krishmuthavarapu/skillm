import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../helpers/mustMatch';
import { HttpClientModule,HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-common-application',
  templateUrl: './common-application.component.html',
  styleUrls: ['./common-application.component.scss']
})
export class CommonApplicationComponent implements OnInit {
  CommonApplicationForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private http: HttpClient) { }

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
    // let params = new HttpParams();
    var fd:FormData=new FormData()
    // Begin assigning parameters
    fd.append('username', this.CommonApplicationForm.value.username);
    fd.append('number', this.CommonApplicationForm.value.number);
    fd.append('passing_year', this.CommonApplicationForm.value.passing_year);
    fd.append('email', this.CommonApplicationForm.value.email);
    fd.append('qualification', this.CommonApplicationForm.value.qualification);
    fd.append('course_interested', this.CommonApplicationForm.value.course_interested);
    fd.append('city', this.CommonApplicationForm.value.city);

    this.http.post('http://localhost/angular/post.php'
    , 
     fd
    ).subscribe(
      res => {
        const response = res.toString();
    }
      );

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.CommonApplicationForm.value, null, 4));
  }
   // Initialize params Object
  

onReset() {
  this.submitted = false;
  this.CommonApplicationForm.reset();
}
}


