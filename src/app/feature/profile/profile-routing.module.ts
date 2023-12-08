import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileSearchComponent } from './profile-search/profile-search.component';

const routes: Routes = [
  {path:'', component: ProfileSearchComponent},
  {path:':id', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
