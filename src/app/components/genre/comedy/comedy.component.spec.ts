import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedyComponent } from './comedy.component';

describe('ComedyComponent', () => {
  let component: ComedyComponent;
  let fixture: ComponentFixture<ComedyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComedyComponent]
    });
    fixture = TestBed.createComponent(ComedyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
