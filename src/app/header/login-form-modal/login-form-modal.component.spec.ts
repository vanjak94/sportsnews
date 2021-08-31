import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormModalComponent } from './login-form-modal.component';

describe('LoginFormModalComponent', () => {
  let component: LoginFormModalComponent;
  let fixture: ComponentFixture<LoginFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
