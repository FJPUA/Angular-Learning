import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { ProfileModel } from '../model/profile.model';
import { Router } from '@angular/router';
import { ROUTING_TOKEN } from 'src/app/shared/enum/base-routing.enum';

@Component({
  selector: 'app-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.scss']
})
export class ProfileSearchComponent implements OnInit {
  profiles: ProfileModel[] | undefined;
  private routeLink : typeof ROUTING_TOKEN = ROUTING_TOKEN;

  constructor(private profileService: ProfileService, private router: Router){

  }

  ngOnInit(): void {
    this.profileService.getList().subscribe((res)=> {
      this.profiles = res;
    });
  }

  onSelectProfile(id: string): void{
    this.router.navigate([`${this.routeLink.PROFILE}` , id]);
  }
}
