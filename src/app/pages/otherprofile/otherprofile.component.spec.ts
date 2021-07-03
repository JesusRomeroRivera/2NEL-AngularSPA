import { ComponentFixture, TestBed} from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { OtherProfileComponent } from './otherprofile.component';

describe('ProfileComponent', () => {
  let component: OtherProfileComponent;
  let fixture: ComponentFixture<OtherProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    TestBed.configureTestingModule({
        declarations: [ OtherProfileComponent ],
        schemas: [NO_ERRORS_SCHEMA]
      })
      .compileComponents();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});