import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorSidebarComponent } from './supervisor-sidebar.component';

describe('SupervisorSidebarComponent', () => {
  let component: SupervisorSidebarComponent;
  let fixture: ComponentFixture<SupervisorSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupervisorSidebarComponent]
    });
    fixture = TestBed.createComponent(SupervisorSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
