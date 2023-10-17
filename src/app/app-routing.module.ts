import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieAddComponent } from './components/movie-add/movie-add.component';
import { MoviesComponent } from './components/movies/movies.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ActionComponent } from './components/genre/action/action.component';
import { ThrillerComponent } from './components/genre/thriller/thriller.component';
import { ComedyComponent } from './components/genre/comedy/comedy.component';
import { HorrorComponent } from './components/genre/horror/horror.component';
import { RomanceComponent } from './components/genre/romance/romance.component';
import { UsersComponent } from './components/users/users.component';
import { AuthComponent } from './components/auth/auth.component';
import { UserAddComponent } from './components/user-add/user-add.component';


const routes: Routes = [
  {path: "",redirectTo: "home",pathMatch: "full"},
  {path: 'home', component: DashboardComponent },
  {path: 'add', component: MovieAddComponent},
  {path: 'movies-list', component: MoviesComponent},
  {path:'genre/romance', component:RomanceComponent},
  {path: 'genre/action', component:ActionComponent},
  {path: 'genre/thriller', component:ThrillerComponent},
  {path: 'genre/comedy', component:ComedyComponent},
  {path: 'genre/horror', component:HorrorComponent},
  {path: 'users', component:UsersComponent},
  {path:'adduser', component:UserAddComponent},
  {path: 'login', component:AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
