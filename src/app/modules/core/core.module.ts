import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainCoreComponent } from './pages/main/main-core.component';
import {CoreRoutingModule} from "./core-routing.module";
import {StartAuthModalComponent} from "./components/start-auth-modal/start-auth-modal.component";
import {FormsModule} from "@angular/forms";
import { ContinueAuthModalComponent } from './components/continue-auth-modal/continue-auth-modal.component';
import { TeacherAuthModalComponent } from './components/teacher-auth-modal/teacher-auth-modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainCoreComponent,
    StartAuthModalComponent,
    ContinueAuthModalComponent,
    TeacherAuthModalComponent
  ],
  exports: [
    MainCoreComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule
  ]
})
export class CoreModule { }
