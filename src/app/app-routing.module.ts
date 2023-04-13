import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainCoreComponent} from "./modules/core/pages/main/main-core.component";
import {MainCoursesComponent} from "./modules/courses/pages/main/main-courses.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MainCoreComponent
      },
      {
        path: 'courses',
        component: MainCoursesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
