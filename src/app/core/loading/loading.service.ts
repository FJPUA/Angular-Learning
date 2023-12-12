import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private _isLoading: boolean = false;
  //hide the subject itself to not allow outside manipulation of this from the service
  private Loading : Subject<boolean> = new Subject<boolean>();

  //create a public variable to avoid repeat of variables of loading checker in components
  public get isLoading() {
    return this._isLoading;
  }

  //create the subject as an observable so others can subscribe and see the update
  isLoading$ = this.Loading.asObservable();

  constructor() { 
    
  }

  onLoading() {
    this._isLoading = true;
    this.Loading.next(this._isLoading);
  }

  onLoadingComplete(){
    this._isLoading = false;
    this.Loading.next(this._isLoading);
  }
}
