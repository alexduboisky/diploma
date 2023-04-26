import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViberL1Component } from './viber-l1.component';

describe('ViberL1Component', () => {
  let component: ViberL1Component;
  let fixture: ComponentFixture<ViberL1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViberL1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViberL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
