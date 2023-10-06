import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveLeaveModalComponent } from './approve-leave-modal.component';

describe('ApproveLeaveModalComponent', () => {
  let component: ApproveLeaveModalComponent;
  let fixture: ComponentFixture<ApproveLeaveModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApproveLeaveModalComponent]
    });
    fixture = TestBed.createComponent(ApproveLeaveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
