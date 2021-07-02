import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PxButtonComponent } from './PxButton.component';

describe('PxButtonComponent', () => {
  let component: PxButtonComponent;
  let fixture: ComponentFixture<PxButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PxButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});