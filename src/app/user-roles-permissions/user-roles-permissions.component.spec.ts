import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRolesPermissionsComponent } from './user-roles-permissions.component';

describe('UserRolesPermissionsComponent', () => {
  let component: UserRolesPermissionsComponent;
  let fixture: ComponentFixture<UserRolesPermissionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserRolesPermissionsComponent]
    });
    fixture = TestBed.createComponent(UserRolesPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
