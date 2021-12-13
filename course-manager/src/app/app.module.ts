import { ReplacePipe } from './pipe/replace.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { StarComponent } from './star/star.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error-404/error-404.component';
import { CourseInfoComponent } from './courses/course-info.component';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseInfoComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        {
          path: '', redirectTo: 'courses', pathMatch: 'full'
        },
        {
          path: 'courses', component: CoursesComponent
        },
        {
          path: 'courses/info/:id', component: CourseInfoComponent
        },
        {
          path: '**', component: Error404Component
        },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
