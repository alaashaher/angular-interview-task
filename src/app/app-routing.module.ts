import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component'
import { from } from 'rxjs';
import { AuthGuard } from './Shared/auth/auth-guard.service';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'LoginComponent', component: LoginComponent },
  { path :'dashboard', component: DashboardComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }