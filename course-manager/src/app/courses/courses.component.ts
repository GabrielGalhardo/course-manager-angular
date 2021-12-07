
import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import  CourseService  from './course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];
  constructor(private courseService: CourseService) {}
  ngOnInit(): void {
    this.courses = this.courseService.retriveAll();
  }

}
