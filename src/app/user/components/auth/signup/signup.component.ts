import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';
import { Register } from 'src/app/user/models/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   register:Register=new Register();
   error:any={}
  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  registerSubmit(){
    console.log(JSON.stringify(this.register))
    console.log(this.register)
    this.authService.register(this.register).subscribe(res=>{
      console.log(JSON.stringify(res))
      this.router.navigate(['user/login'])
    }, err=>{
      console.log(JSON.stringify(err))
      this.error=err.error;
      console.log(this.error);
      
    })

    
    
  
  }

}



