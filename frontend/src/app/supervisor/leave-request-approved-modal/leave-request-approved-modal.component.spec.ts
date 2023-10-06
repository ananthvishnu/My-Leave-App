import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveRequestApprovedModalComponent } from './leave-request-approved-modal.component';

describe('LeaveRequestApprovedModalComponent', () => {
  let component: LeaveRequestApprovedModalComponent;
  let fixture: ComponentFixture<LeaveRequestApprovedModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveRequestApprovedModalComponent]
    });
    fixture = TestBed.createComponent(LeaveRequestApprovedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
