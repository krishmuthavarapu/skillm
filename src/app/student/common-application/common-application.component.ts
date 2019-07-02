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
      acceptTerms: [false, Validators.requiredTrue]
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
    let Params = new HttpParams();
    // Begin assigning parameters
    Params = Params.append('username', this.CommonApplicationForm.value.username);
    Params = Params.append('number', this.CommonApplicationForm.value.number);
    Params = Params.append('passing_year', this.CommonApplicationForm.value.passing_year);
    Params = Params.append('email', this.CommonApplicationForm.value.email);
    Params = Params.append('qualification', this.CommonApplicationForm.value.qualification);
    Params = Params.append('course_interested', this.CommonApplicationForm.value.course_interested);
    Params = Params.append('city', this.CommonApplicationForm.value.city);

    return this.http.get('http://localhost/angular/post.php'
    ,{  
    params: { params: Params }
    }).subscribe(data => {
      this.posts = data;
      // show data in console
      console.log(this.posts);
      });

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.CommonApplicationForm.value, null, 4));
  }
   // Initialize Params Object
  

onReset() {
  this.submitted = false;
  this.CommonApplicationForm.reset();
}
}


