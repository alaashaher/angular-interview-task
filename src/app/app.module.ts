import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../app/Providers/authentication-service'
import { DashboardService } from '../app/Providers/dashboard-service'
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './Shared/auth/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: ToastrService },
    AuthenticationService,
    DashboardService,
    CookieService,
    AuthGuard,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
