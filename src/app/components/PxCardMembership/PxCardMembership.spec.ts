import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PxCardMembershipComponent } from './PxCardMembership.component';

describe('PxCardMembershipComponent', () => {
  let component: PxCardMembershipComponent;
  let fixture: ComponentFixture<PxCardMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PxCardMembershipComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PxCardMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
