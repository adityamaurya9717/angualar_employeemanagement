import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
       login:any={}
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  loginSubmit(){
    console.log(this.login.email,this.login.password)
    this.authService.login(this.login.email,this.login.password)
    .subscribe((d)=>{
      console.log(d)
      localStorage.setItem("token",d.token)
      this.router.navigate(['/dashboard/user-dashboard']);
    },(err)=>{
      console.log(err)
    })
  }

}
