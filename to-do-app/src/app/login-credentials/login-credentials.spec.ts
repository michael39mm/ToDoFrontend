import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCredentials } from './login-credentials';

describe('LoginCredentials', () => {
  let component: LoginCredentials;
  let fixture: ComponentFixture<LoginCredentials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginCredentials]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCredentials);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
