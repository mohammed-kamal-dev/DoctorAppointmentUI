import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.sass']
})
export class AppointmentListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToForm(){
    this.router.navigate(['/appointment/form']);
  }

  details(){
    this.router.navigate(['/appointment/details']);
  }

}
