import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface post {
    id: number;
    post: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './post.componet.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  
  
  constructor(private route: ActivatedRoute) { }
  
  

  ngOnInit(): void {
  }

}