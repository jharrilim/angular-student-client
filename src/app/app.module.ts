import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from 'ng-sidebar';
import { RoutingModule } from './routing/routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StudentsComponent } from './components/students/students.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
import { AddCourseModalComponent } from './components/courses/add-course-modal/add-course-modal.component';

import { CourseService } from './services/course.service';
import { StudentService } from './services/student.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    StudentsComponent,
    CoursesComponent,
    HomeComponent,
    AddCourseModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    SidebarModule.forRoot(),
    HttpClientModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CourseService,
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
