import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveConformmodelComponent } from './leave-conformmodel.component';

describe('LeaveConformmodelComponent', () => {
  let component: LeaveConformmodelComponent;
  let fixture: ComponentFixture<LeaveConformmodelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveConformmodelComponent]
    });
    fixture = TestBed.createComponent(LeaveConformmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
