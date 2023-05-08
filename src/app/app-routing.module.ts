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
import {AdminPanelComponent} from "./modules/admin/pages/admin-panel/admin-panel.component";
import {AdminGuard} from "./guards/admin.guard";
import {ExcelL1Component} from "./modules/courses/pages/excel/excel-l1/excel-l1.component";
import {ExcelL2Component} from "./modules/courses/pages/excel/excel-l2/excel-l2.component";
import {ExcelL3Component} from "./modules/courses/pages/excel/excel-l3/excel-l3.component";
import {ExcelL4Component} from "./modules/courses/pages/excel/excel-l4/excel-l4.component";
import {ExcelT1Component} from "./modules/courses/pages/excel/excel-t1/excel-t1.component";
import {ExcelP1Component} from "./modules/courses/pages/excel/excel-p1/excel-p1.component";

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
      },
      {
        path: 'courses/c5/l1',
        component: ExcelL1Component,
        canActivate: [AuthGuard],
      },
      {
        path: 'courses/c5/l2',
        component: ExcelL2Component,
        canActivate: [AuthGuard],
      },
      {
        path: 'courses/c5/l3',
        component: ExcelL3Component,
        canActivate: [AuthGuard],
      },
      {
        path: 'courses/c5/l4',
        component: ExcelL4Component,
        canActivate: [AuthGuard],
      },
      {
        path: 'courses/c5/t1',
        component: ExcelT1Component,
        canActivate: [AuthGuard],
      },
      {
        path: 'courses/c5/p1',
        component: ExcelP1Component,
        canActivate: [AuthGuard],
      },
      {
        path: 'admin-panel',
        component: AdminPanelComponent,
        canActivate: [AdminGuard],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
