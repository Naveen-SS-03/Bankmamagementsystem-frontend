import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  book : any;
  repeatPass : String ='none';
    constructor(private http:HttpClient) { }
  

  ngOnInit(): void {
  }
  registrationform = new FormGroup({
    userId: new FormControl(""),
    name: new FormControl("",[Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*'),
    ]),
    
    email: new FormControl("",[Validators.required,Validators.email]),
    pwd: new FormControl("",[Validators.required,Validators.minLength(8)]),
    rpwd: new FormControl("")
  });

 registerSubmit(){

  let  body={
    userId:this.userId.value,
    name:this.name.value,
    email:this.email.value,
    password:this.pwd.value,
    
  }
   if(this.pwd.value == this.rpwd.value){
     console.log(body);
     this.http.post("http://localhost:8081/user/createUser",body).subscribe ((data)=>console.log(data));
   }else{
     this.repeatPass = 'inline'
     console.log("error");
   }
  //console.log(this.registrationform.value);
 }
 get userId():FormControl{
  return this.registrationform.get("userId") as FormControl;
}
 get name():FormControl{
   return this.registrationform.get("name") as FormControl;
 }

 get email(){
  return this.registrationform.get("email") as FormControl;
}
get pwd(){
  return this.registrationform.get("pwd") as FormControl;
}
get rpwd(){
  return this.registrationform.get("rpwd") as FormControl;
}

}
