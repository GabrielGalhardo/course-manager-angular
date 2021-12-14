
import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import CourseService from './course.service';

@Component({
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  filtredCourses: Course[] = [];
  _courses: Course[] = [];
  _filterBy: string = "";

  constructor(private courseService: CourseService) { }
  ngOnInit(): void {
    this.retriveAll();
  }
  retriveAll(): void {
    this.courseService.retriveAll().subscribe({
      next: courses => {
        this._courses = courses
        this.filtredCourses = this._courses;
      },
      error: err => console.log(err),
    })
  };
  deleteById(courseId: number): void {
    this.courseService.deleteById(courseId).subscribe({
      next: () => {
        console.log('Deletado com sucesso')
        this.retriveAll()
      },
      error: err => console.log('Error', err)
    });
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filtredCourses = this._courses.filter((course: Course) => course.code.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1 || course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
  }
  get filter() {
    return this._filterBy
  }

}
