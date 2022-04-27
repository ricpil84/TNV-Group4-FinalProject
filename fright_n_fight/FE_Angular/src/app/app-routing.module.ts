import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CommentiComponent } from './components/create-comment/create-comment.component';
import { DeleteCommentComponent } from './components/delete-comment/delete-comment.component';
import { ListCommentsComponent } from './components/get-comment/get-comment.component';
import { LoginComponent } from './components/login/login.component';
import { GetRatingComponent } from './components/get-rating/get-rating.component';
import { GetFavouriteMoviesComponent } from './components/get-favourite-movies/get-favourite-movies.component';
import { CreateFavouriteMovieComponent } from './components/create-favourite-movie/create-favourite-movie.component';
import { DeleteFavouriteMovieComponent } from './components/delete-favourite-movie/delete-favourite-movie.component';
import { SignupComponent } from './components/register/signup.component';
import { GetMovieDetailComponent } from './components/get-movie-detail/get-movie-detail.component';
import { GameComponent } from './components/game/game.component';
import { InsertRatingComponent } from './components/insert-rating/insert-rating.component';


const routes: Routes = [
    { path: 'comments/create', component: CommentiComponent},
    { path: 'comments/:movie_id', component: ListCommentsComponent},
    { path: 'comments/delete/:commentId', component: DeleteCommentComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: SignupComponent},
    { path: 'rating', component: InsertRatingComponent},
    { path: 'rating/:movie_id', component: GetRatingComponent},
    { path: 'favourites', component: GetFavouriteMoviesComponent},
    { path: 'favourites/create', component: CreateFavouriteMovieComponent}, 
    { path: 'favourites/delete', component: DeleteFavouriteMovieComponent},
    { path: 'movie/details', component: GetMovieDetailComponent},
    { path: 'game', component: GameComponent },
    { path:'', redirectTo: '/', pathMatch: 'full'}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }