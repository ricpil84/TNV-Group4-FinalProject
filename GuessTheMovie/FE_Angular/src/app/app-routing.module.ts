import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CommentiComponent } from './components/comment/create-comment/create-comment.component';
import { DeleteCommentComponent } from './components/comment/delete-comment/delete-comment.component';
import { ListCommentsComponent } from './components/comment/get-comment/get-comment.component';
import { LoginComponent } from './components/login/login.component';
import { GetRatingComponent } from './components/rating/get-rating/get-rating.component';
import { GetFavouriteMoviesComponent } from './components/favourites/get-favourite-movies/get-favourite-movies.component';
import { CreateFavouriteMovieComponent } from './components/favourites/create-favourite-movie/create-favourite-movie.component';
import { DeleteFavouriteMovieComponent } from './components/favourites/delete-favourite-movie/delete-favourite-movie.component';
import { SignupComponent } from './components/login/register/signup.component';
import { GetMovieDetailComponent } from './components/get-movie-detail/get-movie-detail.component';
import { GameComponent } from './components/game/game.component';
import { InsertRatingComponent } from './components/rating/insert-rating/insert-rating.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/login/logout/logout.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'comments/create', component: CommentiComponent},
    { path: 'comments/:userId/:movieId', component: ListCommentsComponent},
    { path: 'comments/delete/:commentId', component: DeleteCommentComponent},
    { path: 'login', component: LoginComponent},
    { path: 'logout', component: LogoutComponent},
    { path: 'register', component: SignupComponent},
    { path: 'rating', component: InsertRatingComponent},
    { path: 'rating/get', component: GetRatingComponent},
    { path: 'favourites', component: GetFavouriteMoviesComponent},
    { path: 'favourites/create', component: CreateFavouriteMovieComponent}, 
    { path: 'favourites/delete', component: DeleteFavouriteMovieComponent},
    { path: 'movie/details/:movieId', component: GetMovieDetailComponent},
    { path: 'game', component: GameComponent },
    { path:'', redirectTo: 'home', pathMatch: 'full'}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }