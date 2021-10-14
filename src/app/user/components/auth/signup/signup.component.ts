import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';
import { Register } from 'src/app/user/models/register';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   register:Register=new Register();
  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
  }

  registerSubmit(){
    console.log(JSON.stringify(this.register))

    
    
  
  }

}



