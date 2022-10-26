import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './views/create/create.component';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full'},
   { path: 'home', component: HomeComponent},
   { path: 'criar', component: CreateComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
