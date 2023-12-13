import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTING_TOKEN } from './shared/enum/base-routing.enum';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { HomeComponent } from './feature/home/home.component';
import { NotFoundComponent } from './feature/not-found/not-found.component';
import { LoginGuard } from './core/guard/login.guard';
import { LogoutGuard } from './core/guard/logout.guard';

const routes: Routes = [
  { path : '', component: HomeComponent, canActivate: [LoginGuard],
    children: [
      {  path : ROUTING_TOKEN.DASHBOARD, component: DashboardComponent},
      {  path : ROUTING_TOKEN.PROFILE, loadChildren:() => import('src/app/feature/profile/profile.module').then(m => m.ProfileModule)}
  ]},
  { path: ROUTING_TOKEN.LOGIN, loadChildren:() => import('src/app/feature/login/login.module').then(m => m.LoginModule), canActivate: [LogoutGuard]},
  { path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
