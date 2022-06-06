import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ReturnStatement,Text } from '@angular/compiler';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient ,private router:Router) { }

  ngOnInit(): void {
  }

  LoginForm = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.email]),
    pwd : new FormControl("",[Validators.required,Validators.minLength(8)])

  });
  loginSubmit(){
    console.log(this.LoginForm);
    
      let  body={
        email:this.email.value,
        password:this.pwd.value
      
      }
      console.log(body)
         this.http.post("http://localhost:8080/user/.....",body).subscribe ((data)=>{
          
          if (data=="plese check password"){
            alert("plese check password")
              
          }else{
            this.router.navigateByUrl('dashboard')
          }
        });
      

  }
  get email(){
    return this.LoginForm.get("email") as FormControl;
  }
  get pwd(){
    return this.LoginForm.get("pwd") as FormControl;
  }
}


