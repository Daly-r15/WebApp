import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { post } from '../post.component';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  posts: post[] = [];
  selectedPost?: post;
  

  constructor(private postService: PostService) { }
  
  

  ngOnInit(): void {
    this.getPosts();
  }

  onSelect(post: post): void {
    this.selectedPost = post
  }
  
  getPosts(): void {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

}
