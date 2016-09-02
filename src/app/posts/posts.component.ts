import { Component, OnInit } from '@angular/core';
import { IPosts } from '../shared/model';
import { Router } from '@angular/router';
import { PostsService } from '../shared/services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'app-posts',
  templateUrl: 'posts.component.html',
  styleUrls: ['posts.component.css']
})
export class PostsComponent {

	public posts: IPosts;
  constructor(
		private router: Router,
  	private postsService: PostsService

  	) { 
  	postsService.getPosts().then( posts => this.posts = posts)
  }
}
