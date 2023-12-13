import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingInterceptor } from './core/interceptor/loading.interceptor';
import { HomeComponent } from './feature/home/home.component';
import { NotFoundComponent } from './feature/not-found/not-found.component';
import { TokenInterceptor } from './core/interceptor/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi:true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
