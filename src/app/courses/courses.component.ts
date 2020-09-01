import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

techScience=['Mathematics','Physics','Chemistry','Biology'];
artScience=['Art History',"World History",'Grammar','Storytelling'];
testPrep=['LSAT','GMAT','MCAT','NCLEX-RN'];
added=[];
  constructor() { }
  addCourse(addedCourse:string){
this.added.push(addedCourse);
console.log("new course is added");
  }

  ngOnInit() {
  }

}
