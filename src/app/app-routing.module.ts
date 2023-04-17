import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainCoreComponent} from "./modules/core/pages/main/main-core.component";
import {MainCoursesComponent} from "./modules/courses/pages/main/main-courses.component";
import {AboutUsComponent} from "./modules/core/pages/about-us/about-us.component";
import {ContactsComponent} from "./modules/core/pages/contacts/contacts.component";

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
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'contacts',
        component: ContactsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
