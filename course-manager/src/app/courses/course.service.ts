import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course";

@Injectable({
  providedIn: 'root'
})
export default class CourseService {

  constructor(private httpClient: HttpClient) { }

  retriveAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>("http://localhost:3100/api/courses");
  }
  retrieveById(id: number): Observable<Course> {
    return this.httpClient.get<Course>(`http://localhost:3100/api/courses/${id}`);
  }
  save(course: Course): Observable<Course> {
    if (course.id) {
      return this.httpClient.put<Course>(`http://localhost:3100/api/courses/${course.id}`, course);
    } else {
      return this.httpClient.post<Course>("http://localhost:3100/api/courses", course);
    }
  }
  deleteById(id: number): Observable<Course> {
    return this.httpClient.delete<any>(`http://localhost:3100/api/courses/${id}`);
  }
}

