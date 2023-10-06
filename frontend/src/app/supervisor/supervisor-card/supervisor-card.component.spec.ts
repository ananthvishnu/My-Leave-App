import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorCardComponent } from './supervisor-card.component';

describe('SupervisorCardComponent', () => {
  let component: SupervisorCardComponent;
  let fixture: ComponentFixture<SupervisorCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupervisorCardComponent]
    });
    fixture = TestBed.createComponent(SupervisorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
