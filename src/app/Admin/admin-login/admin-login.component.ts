import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Router} from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

   constructor(private http:HttpClient ,private router:Router) { }

  ngOnInit(): void {
  }

  LoginForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    pwd : new FormControl("",[Validators.required,Validators.minLength(8)])

  });
  loginSubmit(){
    console.log(this.LoginForm);
    
      let  body={
        name:this.name.value,
        password:this.pwd.value
      
      }
      console.log(body)
         this.http.post("http://localhost:8080/log/login",body).subscribe ((data)=>{
          
          console.log(data);
          alert('success');
          this.router.navigateByUrl('dashboard');
      },
      (error) => {
        console.log(error);
          alert('Invalid Username or Password');
      }
      );

  }
  get name(){
    return this.LoginForm.get("name") as FormControl;
  }
  get pwd(){
    return this.LoginForm.get("pwd") as FormControl;
  }
}



