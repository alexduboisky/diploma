import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environment';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {FormsModule} from "@angular/forms";
import {FooterComponent} from "./components/footer/footer.component";
import {ContinueAuthModalComponent} from "./components/continue-auth-modal/continue-auth-modal.component";
import {HeaderComponent} from "./components/header/header.component";
import {TeacherAuthModalComponent} from "./components/teacher-auth-modal/teacher-auth-modal.component";
import {StartAuthModalComponent} from "./components/start-auth-modal/start-auth-modal.component";
import {MainCoursesComponent} from "./modules/courses/pages/main/main-courses.component";
import {MainCoreComponent} from "./modules/core/pages/main/main-core.component";
import {CourseComponent} from "./modules/courses/components/course/course.component";
import { AboutUsComponent } from './modules/core/pages/about-us/about-us.component';
import { ContactsComponent } from './modules/core/pages/contacts/contacts.component';
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./guards/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContinueAuthModalComponent,
    HeaderComponent,
    TeacherAuthModalComponent,
    StartAuthModalComponent,
    MainCoursesComponent,
    MainCoreComponent,
    CourseComponent,
    AboutUsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
