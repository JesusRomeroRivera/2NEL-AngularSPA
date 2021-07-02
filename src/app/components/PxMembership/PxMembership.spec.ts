import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PxMembershipComponent } from './PxMembership.component';

describe('PxMembershipComponent', () => {
  let component: PxMembershipComponent;
  let fixture: ComponentFixture<PxMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PxMembershipComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PxMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
