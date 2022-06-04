import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appoinment';
import { AppoinmentService } from '../appoinment.service';

@Component({
  selector: 'app-appoinment-list',
  templateUrl: './appoinment-list.component.html',
  styleUrls: ['./appoinment-list.component.css']
})
export class AppoinmentListComponent implements OnInit {

  appointment:Appointment[] | undefined;
  constructor(private appointmentService: AppoinmentService ) { }

  ngOnInit(): void {
    this.getappointment()
  }


  private getappointment(){
    this.appointmentService.getAppointmentList().subscribe(data=> {
      this.appointment=data;
    });
  }

}
