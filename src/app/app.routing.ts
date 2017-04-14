import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./Components/dashboard/dashboard.component";
import {AboutComponent} from "./Components/about/about.component";

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: '**', redirectTo: ''
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRouting { }
