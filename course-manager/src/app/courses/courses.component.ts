import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: "Angular Forms",
        imageUrl: "/assets/images/forms.png",
        price: 99.99,
        code: "XPS-21",
        duration: 42,
        rating: 4.5,
        releaseDate: "December, 6, 2021"
      },
      {
        id: 2,
        name: "Angular HTTP",
        imageUrl: "/assets/images/http.png",
        price: 77.56,
        code: "XPS-22",
        duration: 56,
        rating: 3.5,
        releaseDate: "August, 7, 2021"
      }
    ]
  }

}
