import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCoursesComponent } from './pages/main/main-courses.component';
import { CourseComponent } from './components/course/course.component';
import {CoreRoutingModule} from "../core/core-routing.module";



@NgModule({
  declarations: [
    MainCoursesComponent,
    CourseComponent
  ],
  exports: [
    MainCoursesComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoursesModule { }
