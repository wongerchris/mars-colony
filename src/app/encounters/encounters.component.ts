import { Component } from '@angular/core';
import { Encounter } from '../shared/model';
import { EncountersService } from '../shared/services/encounters.service';

@Component({
  moduleId: module.id,
  selector: 'app-encounters',
  templateUrl: 'encounters.component.html',
  styleUrls: ['encounters.component.css']
})
export class EncountersComponent {

	public encounters: Encounter[];

  constructor(
  	private encounterService: EncountersService

  	) { 

  	encounterService.getEncounters().then( encounters => this.encounters = encounters)

  }
}
