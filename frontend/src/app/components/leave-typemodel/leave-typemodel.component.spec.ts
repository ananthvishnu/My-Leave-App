import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTypemodelComponent } from './leave-typemodel.component';

describe('LeaveTypemodelComponent', () => {
  let component: LeaveTypemodelComponent;
  let fixture: ComponentFixture<LeaveTypemodelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveTypemodelComponent]
    });
    fixture = TestBed.createComponent(LeaveTypemodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
