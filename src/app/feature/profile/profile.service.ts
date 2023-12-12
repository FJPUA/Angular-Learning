import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map, of } from 'rxjs';
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

  public get(id: string): Observable<ProfileModel | undefined>{
    return this.httpClient.get<ProfileModel[]>(this.jsonDataUrl)
      .pipe(
        map((models:ProfileModel[]) => models.find(x => x.id === id))
      );
  }

  public update(profile:ProfileModel) : Observable<boolean> {
    //act like it is updating things
    return this.httpClient.get<ProfileModel[]>(this.jsonDataUrl)
      .pipe(
        map((models:ProfileModel[]) => models.find(x => x.id === profile.id) !== undefined)
      )
  }
}
