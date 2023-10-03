import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveApplymodelComponent } from './leave-applymodel.component';

describe('LeaveApplymodelComponent', () => {
  let component: LeaveApplymodelComponent;
  let fixture: ComponentFixture<LeaveApplymodelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveApplymodelComponent]
    });
    fixture = TestBed.createComponent(LeaveApplymodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
