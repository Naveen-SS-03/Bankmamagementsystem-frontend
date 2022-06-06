import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fromEventPattern } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {

 
book : any;
repeatPass : String ='none';
  constructor(private http:HttpClient) { }

  ngOnInit():void{
  }
  registrationform = new FormGroup({
    userId: new FormControl(""),
    name: new FormControl("",[Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*'),
    ]),
    
    role: new FormControl(""),
    pwd: new FormControl("",[Validators.required,Validators.minLength(8)]),
  });

 registerSubmit(){

  let  body={
    userId:this.userId.value,
    name:this.name.value,
    role:this.role.value,
    password:this.pwd.value,
    
  }
  
    // console.log(this.registrationform.value);
    console.log(body);
     this.http.post("http://localhost:8080/log/user",body).subscribe ((data)=>console.log(data));
  //console.log(this.registrationform.value);
 }

 get name():FormControl{
   return this.registrationform.get("name") as FormControl;
 }
 get userId():FormControl{
  return this.registrationform.get("userId") as FormControl;
}
 get role(){
  return this.registrationform.get("role") as FormControl;
}
get pwd(){
  return this.registrationform.get("pwd") as FormControl;
}

}