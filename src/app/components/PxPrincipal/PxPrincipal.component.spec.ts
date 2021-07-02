import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PxPrincipalComponent } from './PxPrincipal.component';

describe('PxPrincipalComponent', () => {
  let component: PxPrincipalComponent;
  let fixture: ComponentFixture<PxPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PxPrincipalComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PxPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
