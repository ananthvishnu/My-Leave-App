import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorTableComponent } from './supervisor-table.component';

describe('SupervisorTableComponent', () => {
  let component: SupervisorTableComponent;
  let fixture: ComponentFixture<SupervisorTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupervisorTableComponent]
    });
    fixture = TestBed.createComponent(SupervisorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
