import { ComponentFixture, TestBed} from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { StartupsComponent } from './startups.component';

describe('StartupsComponent', () => {
  let component: StartupsComponent;
  let fixture: ComponentFixture<StartupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    TestBed.configureTestingModule({
        declarations: [ StartupsComponent ],
        schemas: [NO_ERRORS_SCHEMA]
      })
      .compileComponents();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});