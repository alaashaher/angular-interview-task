import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component'
import { from } from 'rxjs';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'LoginComponent', component: LoginComponent },
  { path :'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }