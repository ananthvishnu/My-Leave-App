import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleChangeSuccessComponent } from './role-change-success.component';

describe('RoleChangeSuccessComponent', () => {
  let component: RoleChangeSuccessComponent;
  let fixture: ComponentFixture<RoleChangeSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleChangeSuccessComponent]
    });
    fixture = TestBed.createComponent(RoleChangeSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
