import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainCoreComponent} from "./modules/core/pages/main/main-core.component";
import {MainCoursesComponent} from "./modules/courses/pages/main/main-courses.component";
import {AboutUsComponent} from "./modules/core/pages/about-us/about-us.component";
import {ContactsComponent} from "./modules/core/pages/contacts/contacts.component";
import {SkypeL1Component} from "./modules/courses/pages/skype/skype-l1/skype-l1.component";
import {ViberL1Component} from "./modules/courses/pages/viber/viber-l1/viber-l1.component";
import {WindowsL1Component} from "./modules/courses/pages/windows/windows-l1/windows-l1.component";
import {WindowsL2Component} from "./modules/courses/pages/windows/windows-l2/windows-l2.component";
import {WindowsT1Component} from "./modules/courses/pages/windows/windows-t1/windows-t1.component";
import {WordL1Component} from "./modules/courses/pages/word/word-l1/word-l1.component";
import {WordT1Component} from "./modules/courses/pages/word/word-t1/word-t1.component";
import {WordP1Component} from "./modules/courses/pages/word/word-p1/word-p1.component";
import {AuthGuard} from "./guards/auth.guard";

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
      },
      {
        path: 'courses/c1/l1',
        component: SkypeL1Component,
        canActivate: [AuthGuard],
      },
      {
        path: 'courses/c2/l1',
        component: ViberL1Component,
        canActivate: [AuthGuard],
      },
      {
        path: 'courses/c3/l1',
        component: WindowsL1Component,
        canActivate: [AuthGuard],
      },
      {
        path: 'courses/c3/l2',
        component: WindowsL2Component,
        canActivate: [AuthGuard],
      },
      {
        path: 'courses/c3/t1',
        component: WindowsT1Component,
        canActivate: [AuthGuard],
      },
      {
        path: 'courses/c4/l1',
        component: WordL1Component,
        canActivate: [AuthGuard],
      },
      {
        path: 'courses/c4/t1',
        component: WordT1Component,
        canActivate: [AuthGuard],
      },
      {
        path: 'courses/c4/p1',
        component: WordP1Component,
        canActivate: [AuthGuard],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
