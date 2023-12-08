import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTING_TOKEN } from './shared/enum/base-routing.enum';
import { DashboardComponent } from './feature/dashboard/dashboard.component';

const routes: Routes = [
  { path : '', children: [
    {  path : ROUTING_TOKEN.DASHBOARD, component: DashboardComponent},
    {  path : ROUTING_TOKEN.PROFILE, loadChildren:() => import('src/app/feature/profile/profile.module').then(m => m.ProfileModule)}
  ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
