import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PxListComponent } from './PxList.component';

describe('PxListComponent', () => {
  let component: PxListComponent;
  let fixture: ComponentFixture<PxListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PxListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});