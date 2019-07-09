import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './helpers/mustMatch';
import { HttpClientModule,HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'skill-monks';
  router: string;
  constructor(private _router: Router){

    this.router = _router.url; 
}
}
