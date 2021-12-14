import { PipeModule } from './../shared/component/pipe/app-pipe.module';
import { StarModule } from './../shared/component/star/star.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CourseInfoComponent } from './course-info.component';
import { NgModule } from "@angular/core";
import { CoursesComponent } from "./courses.component";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    PipeModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CoursesComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      }
    ])
  ]
})
export class CourseModule {

}
