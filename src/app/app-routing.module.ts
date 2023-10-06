import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProjectsComponent } from './projects/projects.component';
import { TeamComponent } from './team/team.component';
import { ServicesComponent } from './services/services.component';
import { BoqsystemComponent } from './boqsystem/boqsystem.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'projects',component:ProjectsComponent},
   {path:'team',component:TeamComponent},
  {path:'services',component:ServicesComponent}, 
  {path:'boqsystem',component:BoqsystemComponent},
  {path:'signin',component:SigninComponent},
  {path:'dashboard',component:DashboardComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
