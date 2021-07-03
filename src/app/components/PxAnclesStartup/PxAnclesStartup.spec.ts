import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { PxAnclesStartupComponent } from './PxAnclesStartup.component';

describe('PxAnclesStartupComponent', () => {
  let component: PxAnclesStartupComponent;
  let fixture: ComponentFixture<PxAnclesStartupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PxAnclesStartupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PxAnclesStartupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    TestBed.configureTestingModule({
        declarations: [ PxAnclesStartupComponent ],
        schemas: [NO_ERRORS_SCHEMA]
      })
      .compileComponents();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});