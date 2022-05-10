import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentiComponent } from './components/comment/create-comment/create-comment.component';
import { DeleteCommentComponent } from './components/comment/delete-comment/delete-comment.component';
import { ListCommentsComponent } from './components/comment/get-comment/get-comment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InsertRatingComponent } from './components/rating/insert-rating/insert-rating.component';
import { GetRatingComponent } from './components/rating/get-rating/get-rating.component';
import { GetFavouriteMoviesComponent } from './components/favourites/get-favourite-movies/get-favourite-movies.component';
import { CreateFavouriteMovieComponent } from './components/favourites/create-favourite-movie/create-favourite-movie.component';
import { DeleteFavouriteMovieComponent } from './components/favourites/delete-favourite-movie/delete-favourite-movie.component';
import { SignupComponent } from './components/login/register/signup.component';
import { GetMovieDetailComponent } from './components/get-movie-detail/get-movie-detail.component';
import { LoginComponent } from './components/login/login.component';
import { GameComponent } from './components/game/game.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LogoutComponent } from './components/login/logout/logout.component'
import { HomeComponent } from './components/home/home.component';
import { AddCommentRatingComponent } from './components/add-comment-rating/add-comment-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentiComponent,
    DeleteCommentComponent,
    ListCommentsComponent,
    InsertRatingComponent,
    GetRatingComponent,
    GetFavouriteMoviesComponent,
    CreateFavouriteMovieComponent,
    DeleteFavouriteMovieComponent,
    LoginComponent,
    GetMovieDetailComponent,
    GameComponent,
    SignupComponent,
    LogoutComponent,
    HomeComponent,
    AddCommentRatingComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
