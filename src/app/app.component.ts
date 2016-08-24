import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { AlienService } from './shared/services/aliens.service';
import { OccupationService } from './shared/services/occupation.service';
import { ColonistService } from './shared/services/colonist.service';
import { EncoutersService } from './shared/services/encouters.service';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [AlienService, OccupationService, ColonistService, EncoutersService],
})
export class AppComponent {

  constructor(alienService: AlienService, occupationService: OccupationService, colonistService: EncoutersService, encoutersService: ColonistService){
  	console.log(alienService);
  	console.log(occupationService);
  	console.log(colonistService);
  	console.log(encoutersService);
  };
}


