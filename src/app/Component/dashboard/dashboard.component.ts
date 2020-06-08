import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../Providers/dashboard-service'
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private cookieService: CookieService,
    private dashboardService: DashboardService,
    private router:Router
  ) { }
  Users :any[];
  ngOnInit() {
    this.GetUserData();
  }
  GetUserData() {
    this.dashboardService.GetUsers().subscribe(
      res => {
       // console.log(res.data);
        this.Users = res.data;
      });
  }
  logout() {
    this.cookieService.delete('user_token');
      this.router.navigate(['/LoginComponent']).then(() => {});
  }
}
