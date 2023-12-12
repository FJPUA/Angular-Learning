import { Component, OnInit } from '@angular/core';
import { ProfileModel } from '../model/profile.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../profile.service';
import { ROUTING_TOKEN } from 'src/app/shared/enum/base-routing.enum';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: ProfileModel | undefined;
  private id!:string;
  private routeToken: typeof ROUTING_TOKEN = ROUTING_TOKEN;

  constructor(private profileService: ProfileService, private route: ActivatedRoute, private router: Router){
    this.id=this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.profileService.get(this.id).subscribe((res)=> {
      this.profile = res;
    })
  }

  onClickEdit(): void {
    this.router.navigate([`${this.routeToken.PROFILE}/${this.id}/edit`]);
  }
}
