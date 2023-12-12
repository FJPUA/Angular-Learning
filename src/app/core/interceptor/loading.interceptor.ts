import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, delay, finalize } from 'rxjs';
import { LoadingService } from '../loading/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.method !== 'GET') {
      return next.handle(request);
    }
    
    this.loadingService.onLoading(); 

    //add a delay to mimic slow loading in API calls
    return next.handle(request)
    .pipe(delay(1000))
    .pipe(finalize(()=> {
      this.loadingService.onLoadingComplete();
    }));
  }
}
