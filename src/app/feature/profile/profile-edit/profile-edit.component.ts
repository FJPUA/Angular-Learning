import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProfileModel } from '../model/profile.model';
import { ROUTING_TOKEN } from 'src/app/shared/enum/base-routing.enum';
import { ProfileService } from '../profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from 'src/app/core/loading/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit, OnDestroy {
  profile: ProfileModel;
  private id!:string;
  private routeToken: typeof ROUTING_TOKEN = ROUTING_TOKEN;
  private subs: Subscription = new Subscription;

  constructor(private profileService: ProfileService, public loadingService: LoadingService, private route: ActivatedRoute, private router: Router){
    this.id=this.route.snapshot.params["id"];
    this.subs.add(
      this.loadingService.isLoading$.subscribe((res)=> {})
    );
  }

  ngOnInit(): void {
    this.profileService.get(this.id).subscribe((res)=> {
      this.profile = res;
    });
  }

  onClickSave() {
    this.profileService.update(this.profile).subscribe((res)=> {
      this.router.navigate([`${this.routeToken.PROFILE}`, this.profile.id]);
    });
  }

  onClickCancel() {
    
  }

  ngOnDestroy(): void {
      this.subs.unsubscribe();
  }
}
