import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '../appoinment';
import { AppoinmentService } from '../appoinment.service';

@Component({
  selector: 'app-create-appoinment',
  templateUrl: './create-appoinment.component.html',
  styleUrls: ['./create-appoinment.component.css']
})
export class CreateAppoinmentComponent implements OnInit {

  appointment:Appointment=new Appointment();

  constructor(private appointmentService: AppoinmentService,
  private router:Router){}

  ngOnInit(): void {
  }

  saveAppointment(){
    this.appointmentService.createAppointment(this.appointment).subscribe(data => {
      console.log(data);
      this.goToAppointmentList();
    },
    error => console.log(error));
  }

  goToAppointmentList(){
    this.router.navigate(['/Appointment']);
  }

  onSubmit(){
    console.log(this.appointment);
    this.saveAppointment();
  }

}
