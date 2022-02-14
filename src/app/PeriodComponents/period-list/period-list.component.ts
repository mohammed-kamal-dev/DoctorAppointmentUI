import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Period } from 'src/app/Models/Period/period.model';
import { RepositoryService } from 'src/app/shared/services/repository.service';

@Component({
  selector: 'app-period-list',
  templateUrl: './period-list.component.html',
  styleUrls: ['./period-list.component.sass']
})
export class PeriodListComponent implements OnInit {

  constructor(private router: Router,private repo: RepositoryService) { }

  public result: Period[];
  public id: string;

  public period : Period;

  ngOnInit(): void {
    this.getAllPeriods();
  }

  goToForm(){
    this.router.navigate(['/period/form']);
  }

  details(id){
    this.router.navigate([`/period/details/${id}`]);
  }

  public redirectToUpdatePage = (id) => { 
    this.router.navigate([`/period/update/${id}`]);
  }

  public getAllPeriods = () => {
    let apiAddress: string = "api/Periods";
    this.repo.getData(apiAddress)
    .subscribe(res => {
      this.result = res as Period[];
    })
  }

  deletePeriod(id){
    this.getPeriodById(id);
  }

  private getPeriodById = (id) => {
    const periodByIdUrl: string = `api/periods/${id}`;
    this.repo.getData(periodByIdUrl)
      .subscribe(res => {
        this.period = res as Period;
      });

      this.delete(this.period.id);
  }
  public redirectToPeriodList = () => {
    this.router.navigate(['/period']);
  }

  public delete = (id) => {
    const deleteUrl: string = `api/periods/${id}`;
    this.repo.delete(deleteUrl)
      .subscribe(res => {
        console.log(res);
      });

      this.redirectToPeriodList();
  }
}
  
