import { Component, OnInit } from '@angular/core';
import {CafApiService} from '../../caf-api.service';
import { Caf } from '../../caf';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.scss']
})
export class StudentDataComponent implements OnInit {
  students: Caf[];
  infoMessage = '';
  constructor(private cafapiservice:CafApiService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.cafapiservice.readStudent().subscribe((students:Caf[])=>{
      this.students=students;
    });
    this.route.queryParams
    .subscribe(params => {
      if(params.updated !== undefined && params.updated === 'true') {
          this.infoMessage = 'Values Updated Succesfully';
      }
    });
  }
  deleteStudent(id , index){
    this.cafapiservice.deleteStudent(id).subscribe((students:Caf)=>{
       console.log("Student data deleted, ",students);
       this.students.splice(index, 1)
    });
  }


}
