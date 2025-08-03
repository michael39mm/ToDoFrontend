import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formm } from './formm';

describe('Formm', () => {
  let component: Formm;
  let fixture: ComponentFixture<Formm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
