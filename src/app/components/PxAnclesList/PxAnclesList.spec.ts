import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { PxAnclesListComponent } from './PxAnclesList.component';

describe('PxAnclesList', () => {
  let component: PxAnclesListComponent;
  let fixture: ComponentFixture<PxAnclesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PxAnclesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PxAnclesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    TestBed.configureTestingModule({
        declarations: [ PxAnclesListComponent ],
        schemas: [NO_ERRORS_SCHEMA]
      })
      .compileComponents();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});