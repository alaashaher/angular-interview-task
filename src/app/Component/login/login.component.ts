import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../Providers/authentication-service'
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
    private router:Router
  ) { }
  
  Userform = new FormGroup({
    email: new FormControl('', Validators.required),
    passwords: new FormControl('', Validators.required),
  })
  ngOnInit() {
  }
  onSubmit(formValue , event: Event){
    
    event.preventDefault();
    if (this.Userform.valid) {
      this.authenticationService.userLogin(formValue.email, formValue.passwords).subscribe(
        res => {
          console.log(res)
            //let error:number= res["error"];

            if(res.token!=""){

              //let result: any[] = res["data"];
              let token: any = res.token;
              //let user_token: any = result["user_token"];

              

              //this.cookieService.set( 'first_name', first_name );
              this.cookieService.set( 'user_token', token );

              
             // this.toastr.success(' Welcome ',' ');
             // this.toastr.success('Hello world!', 'Toastr fun!');


              this.router.navigate(['/dashboard']).then(() => {
            });
            }else{
              this.toastr.error(' ', 'Username or password is incorrect');
            }
      
          });
     }else{
      this.toastr.warning('Please fill out all fields correctly', 'Toastr fun!');

     }
    
     

    
  }
}
