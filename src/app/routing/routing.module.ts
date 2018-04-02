import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { StudentsComponent } from '../students/students.component';
import { CoursesComponent } from '../courses/courses.component';

const routes: Routes = [
  { path: 'Profile', component: ProfileComponent },
  { path: 'Students', component: StudentsComponent },
  { path: 'Courses', component: CoursesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
