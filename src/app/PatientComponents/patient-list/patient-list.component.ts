import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.sass']
})
export class PatientListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToForm(){
    this.router.navigate(['/patient/form']);
  }

}
