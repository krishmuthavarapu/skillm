import { Component, OnInit } from '@angular/core';
import {CafApiService} from '../../caf-api.service';
import { Caf } from '../../caf';


@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {

  constructor(private cafapiservice: CafApiService) { }

  ngOnInit() {
  }

}
