import { Injectable } from '@angular/core';
import { IPosts } from '../model';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostsService{
	postsUrl = 'http://fourth.academy.red/wp-json/wp/v2/posts';

	constructor(private http:Http){};

	getPosts(): Promise<IPosts> {
    return this.http.get(this.postsUrl)
                    .toPromise()
                    .then(response => response.json())
                    .catch(this.handleError);
	}

	private handleError(error: any): Promise<void> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
