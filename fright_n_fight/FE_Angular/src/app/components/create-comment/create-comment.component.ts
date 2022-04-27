import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comments } from 'src/app/models/comments';
import { BackendApiService } from 'src/app/service/backend-api.service';
import { MovieApiService } from 'src/app/service/movie-api.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CommentiComponent implements OnInit {

  movie_id: number = 0;
  
  constructor (private backendAPIService: BackendApiService, public tokenStorageService: TokenStorageService,
  activatedRoute: ActivatedRoute, public movieAPIService: MovieApiService) {
    this.movie_id = +activatedRoute.snapshot.params['movie_id'];
   }

  ngOnInit(): void {
  }

  createComment(comment: NgForm) {
    let userId: number = this.tokenStorageService.getUserId();
    let firstComment: Partial<Comments> ={user_id: userId, movie_id: this.movie_id, comment: comment.value.comment};
    this.backendAPIService.createComment(firstComment).subscribe({ 
    next: () => console.log('comment created'),
    error: () => console.log('error')
  });
  }
}
