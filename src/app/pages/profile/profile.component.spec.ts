import { ComponentFixture, TestBed} from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    TestBed.configureTestingModule({
        declarations: [ ProfileComponent ],
        schemas: [NO_ERRORS_SCHEMA]
      })
      .compileComponents();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});