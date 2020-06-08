import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../Providers/authentication-service'
import { AlertService } from '../../Providers/Alert-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private cookieService: CookieService  ,
    public toastr: ToastrService,
    private authenticationService: AuthenticationService,
    private router:Router,
    private alertService: AlertService
  ) { }
  
  Userform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    passwords: new FormControl('', Validators.required),
  })
  submitted = false;
  emailerror = false;
  passworderror = false;
  ngOnInit() {
  }
  onSubmit(formValue , event: Event){
    this.submitted = true;
    (document.querySelector('.alert') as HTMLElement).style.display = 'none';
    if(formValue.email == "") {
      (document.querySelector('.emailerror') as HTMLElement).style.display = 'block';
    }
    else {
      (document.querySelector('.emailerror') as HTMLElement).style.display = 'none';
    }
    if(formValue.passwords == "") {
      (document.querySelector('.passworderror') as HTMLElement).style.display = 'block';

    }
    else {
      (document.querySelector('.passworderror') as HTMLElement).style.display = 'none';
    }
    event.preventDefault();
    if (this.Userform.valid) {
      
      this.authenticationService.userLogin(formValue.email, formValue.passwords).subscribe(
        res => {

            if(res.token!=""){

              let token: any = res.token;

              this.cookieService.set( 'user_token', token );

              this.router.navigate(['/dashboard']).then(() => {
              });
            }else{
            }
      
          },
          err => {
            (document.querySelector('.alert') as HTMLElement).style.display = 'block';
          },
          
          );
     }else{
     // this.toastr.warning('Please fill out all fields correctly', 'Toastr fun!');

     }    
  }
}
