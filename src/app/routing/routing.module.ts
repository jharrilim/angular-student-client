import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../components/profile/profile.component';
import { StudentsComponent } from '../components/students/students.component';
import { CoursesComponent } from '../components/courses/courses.component';
import { HomeComponent } from '../components/home/home.component';
const routes: Routes = [
  { path: 'Profile', component: ProfileComponent },
  { path: 'Students', component: StudentsComponent },
  { path: 'Courses', component: CoursesComponent },
  { path: 'Home', component: HomeComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: '**', redirectTo: 'Home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
