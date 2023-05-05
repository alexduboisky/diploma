import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environment';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import { LessonComponent } from './modules/courses/components/lesson/lesson.component';
import { TestComponent } from './modules/courses/components/test/test.component';
import { PracticeComponent } from './modules/courses/components/practice/practice.component';
import { SkypeL1Component } from './modules/courses/pages/skype/skype-l1/skype-l1.component';
import { SafePipe } from './pipes/safe.pipe';
import { DomSanitizer } from "@angular/platform-browser";
import { ViberL1Component } from './modules/courses/pages/viber/viber-l1/viber-l1.component';
import { WindowsL1Component } from './modules/courses/pages/windows/windows-l1/windows-l1.component';
import { WindowsL2Component } from './modules/courses/pages/windows/windows-l2/windows-l2.component';
import { WindowsT1Component } from './modules/courses/pages/windows/windows-t1/windows-t1.component';
import { TestItemComponent } from './modules/courses/components/test-item/test-item.component';
import { WordL1Component } from './modules/courses/pages/word/word-l1/word-l1.component';
import { WordP1Component } from './modules/courses/pages/word/word-p1/word-p1.component';
import { WordT1Component } from './modules/courses/pages/word/word-t1/word-t1.component';
import {DatabaseService} from "./services/database.service";
import { ChatComponent } from './modules/chat/components/chat/chat.component';
import { MessageComponent } from './modules/chat/components/message/message.component';
import { AdminPanelComponent } from './modules/admin/pages/admin-panel/admin-panel.component';
import { UserListComponent } from './modules/admin/components/user-list/user-list.component';
import { UserChatComponent } from './modules/admin/components/user-chat/user-chat.component';
import { UserCoursesInfoComponent } from './modules/admin/components/user-courses-info/user-courses-info.component';
import { ChangePasscodeModalComponent } from './components/change-passcode-modal/change-passcode-modal.component';
import { FeedbackComponent } from './modules/admin/components/feedback/feedback.component';
import { PracticesComponent } from './modules/admin/components/practices/practices.component';


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
    ContactsComponent,
    LessonComponent,
    TestComponent,
    PracticeComponent,
    SkypeL1Component,
    SafePipe,
    ViberL1Component,
    WindowsL1Component,
    WindowsL2Component,
    WindowsT1Component,
    TestItemComponent,
    WordL1Component,
    WordP1Component,
    WordT1Component,
    ChatComponent,
    MessageComponent,
    AdminPanelComponent,
    UserListComponent,
    UserChatComponent,
    UserCoursesInfoComponent,
    ChangePasscodeModalComponent,
    FeedbackComponent,
    PracticesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
