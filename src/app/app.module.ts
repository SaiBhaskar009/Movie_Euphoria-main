import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieAddComponent } from './components/movie-add/movie-add.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ThrillerComponent } from './components/genre/thriller/thriller.component';
import { RomanceComponent } from './components/genre/romance/romance.component';
import { ActionComponent } from './components/genre/action/action.component';
import { HorrorComponent } from './components/genre/horror/horror.component';
import { ComedyComponent } from './components/genre/comedy/comedy.component';
import { AuthComponent } from './components/auth/auth.component';
import { UsersComponent } from './components/users/users.component';
import { UserAddComponent } from './components/user-add/user-add.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieAddComponent,
    NavbarComponent,
    DashboardComponent,
    ThrillerComponent,
    RomanceComponent,
    ActionComponent,
    HorrorComponent,
    ComedyComponent,
    AuthComponent,
    UsersComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
