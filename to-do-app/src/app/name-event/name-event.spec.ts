import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameEvent } from './name-event';

describe('NameEvent', () => {
  let component: NameEvent;
  let fixture: ComponentFixture<NameEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameEvent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameEvent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
