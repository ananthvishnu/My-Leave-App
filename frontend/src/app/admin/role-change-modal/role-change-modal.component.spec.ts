import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleChangeModalComponent } from './role-change-modal.component';

describe('RoleChangeModalComponent', () => {
  let component: RoleChangeModalComponent;
  let fixture: ComponentFixture<RoleChangeModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleChangeModalComponent]
    });
    fixture = TestBed.createComponent(RoleChangeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
