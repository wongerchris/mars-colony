import { Injectable } from '@angular/core';
import { IEncounters } from '../model';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EncoutersService{
	encoutersUrl = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

	constructor(private http:Http){};

	getEncounters(): Promise<IEncounters[]> {
    return this.http.get(this.encoutersUrl)
                    .toPromise()
                    .then(response => response.json().encouters)
                    .catch(this.handleError);
	}

	private handleError(error: any): Promise<void> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}