import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.sass']
})
export class DoctorListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToForm(){
    this.router.navigate(['/patient/form']);
  }

}
