import { NgModule } from '@angular/core';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileSearchComponent } from './profile-search/profile-search.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    ProfileSearchComponent,
    ProfileEditComponent,
    ProfileComponent
  ],
  imports: [
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
