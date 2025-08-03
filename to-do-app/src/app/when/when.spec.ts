import { ComponentFixture, TestBed } from '@angular/core/testing';

import { When } from './when';

describe('When', () => {
  let component: When;
  let fixture: ComponentFixture<When>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [When]
    })
    .compileComponents();

    fixture = TestBed.createComponent(When);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
