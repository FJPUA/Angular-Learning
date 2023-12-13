import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { AuthModel } from './model/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authModel: AuthModel;
  
  private _isLogin: boolean = false;
  private _token: string;

  constructor() { }

  //property get
  public get token() {
    return this._token;
  }

  public get isLogin() {
    return this._isLogin;
  }

  public isAuthenticated() : Observable<boolean>{
    return of(this._isLogin);
  }

  public login(userName:string, password:string): Observable<string> {
    this._isLogin = userName !== undefined && password !== undefined;
    //on login assume that this would return a token
    return of('is a token').pipe(map((res)=> this._token = res));
  }

  public logout(): Observable<boolean> {
    this._isLogin = false;
    return of(!this._isLogin).pipe(map(()=> this._token = null));
  }
}
