import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveAllocationComponent } from './leave-allocation.component';

describe('LeaveAllocationComponent', () => {
  let component: LeaveAllocationComponent;
  let fixture: ComponentFixture<LeaveAllocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveAllocationComponent]
    });
    fixture = TestBed.createComponent(LeaveAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
