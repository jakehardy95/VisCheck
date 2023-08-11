import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OahuDropdownMenuComponent } from './oahu-dropdown-menu.component';

describe('OahuDropdownMenuComponent', () => {
  let component: OahuDropdownMenuComponent;
  let fixture: ComponentFixture<OahuDropdownMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OahuDropdownMenuComponent]
    });
    fixture = TestBed.createComponent(OahuDropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
