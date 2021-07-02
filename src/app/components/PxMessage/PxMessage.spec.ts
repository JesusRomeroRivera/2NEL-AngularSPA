import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PxMessageComponent } from './PxMessage.component';

describe('PxButtonComponent', () => {
  let component: PxMessageComponent;
  let fixture: ComponentFixture<PxMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PxMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PxMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});