import { Component, OnInit } from '@angular/core';
import {Post} from '../../model/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  public posts: Post[] = [];

  constructor() { }

  ngOnInit(): void {
    this.posts.push(
      {
        userId: 2,
        id: 1,
        title: 'Lorem',
        body: 'Ipsum non grat'
      }
    );
  }
}
