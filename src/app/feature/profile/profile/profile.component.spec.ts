import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { ProfileService } from '../profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ProfileModel } from '../model/profile.model';
import { hasUncaughtExceptionCaptureCallback } from 'process';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let profileServiceSpy: jasmine.SpyObj<ProfileService>;
  let route: ActivatedRoute;
  let router: Router;
  const a : ProfileModel = {
    id: '1',
    birthDate: new Date('04/04/1890'),
    email: 'test@test.com',
    firstName: 'test',
    lastName: 'Test'
  };
  const routeId: string = '1234'

  beforeEach(async () => {
    const serviceSpy = jasmine.createSpyObj('ProfileService', ['get']);
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ ProfileComponent ],
      providers: [
        {provide: ProfileService, useValue: serviceSpy},
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {params: {'id': routeId}}
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    route = TestBed.inject(ActivatedRoute);
    router = TestBed.inject(Router);
    profileServiceSpy = TestBed.inject(ProfileService) as jasmine.SpyObj<ProfileService>;
    profileServiceSpy.get.and.returnValue(of(a));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to click edit', () => {
    const activatedSpy = spyOn(route.snapshot.params, 'id');
    const routerSpy = spyOn(router, 'navigate');
    component.onClickEdit();
    expect(routerSpy).toHaveBeenCalled();
    expect(routerSpy.calls.first().args[0].toString()).toContain('/edit');
    expect(routerSpy.calls.first().args[0].toString()).toContain(routeId);
  });
});
