import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { ProfileModel } from './model/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private jsonDataUrl = 'assets/sample-data.json';
  constructor(private httpClient: HttpClient) { }


  public getList(): Observable<ProfileModel[]> {
    return this.httpClient.get<ProfileModel[]>(this.jsonDataUrl);
  }
}
