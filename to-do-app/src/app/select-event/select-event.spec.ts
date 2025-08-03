import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEvent } from './select-event';

describe('SelectEvent', () => {
  let component: SelectEvent;
  let fixture: ComponentFixture<SelectEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectEvent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectEvent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
