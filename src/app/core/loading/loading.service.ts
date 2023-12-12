import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private isLoading: boolean = false;
  private Loading : Subject<boolean> = new Subject<boolean>();

  isLoading$ = this.Loading.asObservable();

  constructor() { 
    
  }

  onLoading() {
    this.isLoading = true;
    this.Loading.next(this.isLoading);
  }

  onLoadingComplete(){
    this.isLoading = false;
    this.Loading.next(this.isLoading);
  }
}
