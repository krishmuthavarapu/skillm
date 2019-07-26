import { Component, OnInit } from '@angular/core';
import {CafApiService} from '../../caf-api.service';
import { Caf } from '../../caf';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.scss']
})
export class StudentDataComponent implements OnInit {
  students: Caf[];

  constructor(private cafapiservice:CafApiService) { }

  ngOnInit() {
    this.cafapiservice.readStudent().subscribe((students:Caf[])=>{
      this.students=students;
    });
  }
  deleteStudent(id , index){
    this.cafapiservice.deleteStudent(id).subscribe((students:Caf)=>{
       console.log("Student data deleted, ",students);
       this.students.splice(index, 1)
    });
  }

}
