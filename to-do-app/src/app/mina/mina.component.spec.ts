import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinaComponent } from './mina.component';

describe('MinaComponent', () => {
  let component: MinaComponent;
  let fixture: ComponentFixture<MinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
