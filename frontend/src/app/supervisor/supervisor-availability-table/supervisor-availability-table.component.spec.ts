import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorAvailabilityTableComponent } from './supervisor-availability-table.component';

describe('SupervisorAvailabilityTableComponent', () => {
  let component: SupervisorAvailabilityTableComponent;
  let fixture: ComponentFixture<SupervisorAvailabilityTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupervisorAvailabilityTableComponent]
    });
    fixture = TestBed.createComponent(SupervisorAvailabilityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
