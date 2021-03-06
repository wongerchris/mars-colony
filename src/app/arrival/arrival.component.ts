import { Component } from '@angular/core';
import { Colonist, IOccupation, Encounter } from '../shared/model';
import { ColonistService } from '../shared/services/colonist.service';
import { OccupationService } from '../shared/services/occupation.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-arrival',
  templateUrl: 'arrival.component.html',
  styleUrls: ['arrival.component.css']
})


export class ArrivalComponent {
	NO_OCCUPATION_SELECTED = `(none)`;

	public occupations: IOccupation[];
	public colonist: Colonist;

  constructor(
  	private router: Router,
  	private colonistService: ColonistService,
  	private occupationService: OccupationService
  	) {
  	this.colonist = new Colonist('','',this.NO_OCCUPATION_SELECTED,'');
  	occupationService.getOccupation().then(jobs => this.occupations = jobs);

  	 }

     onSubmit(){
       this.colonistService.newColonist(this.colonist).then(colonist => {
          sessionStorage.setItem('colonist', colonist.id);
          this.router.navigate(['/encounters']);
       }).catch(error =>{
         //TODO:Handle error
       });
     }

     get noOccupation(){
    return this.colonist.job_id === this.NO_OCCUPATION_SELECTED;
    }

  

}
