import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionCardComponent } from './permission-card.component';

describe('PermissionCardComponent', () => {
  let component: PermissionCardComponent;
  let fixture: ComponentFixture<PermissionCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermissionCardComponent]
    });
    fixture = TestBed.createComponent(PermissionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
