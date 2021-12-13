
import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import  CourseService  from './course.service';

@Component({
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

filtredCourses: Course[] = [];
  _courses: Course[] = [];

  _filterBy: string = "";
  constructor(private courseService: CourseService) {}
  ngOnInit(): void {
    this._courses = this.courseService.retriveAll();
    this.filtredCourses = this._courses
  }
  set filter(value: string){
    this._filterBy = value;
    this.filtredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase())> -1)
  }
  get filter(){
    return this._filterBy
  }

}
