import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainCoreComponent} from "./pages/main/main-core.component";

const routes: Routes = [
  { path: 'core', component: MainCoreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
