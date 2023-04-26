import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsL1Component } from './windows-l1.component';

describe('WindowsL1Component', () => {
  let component: WindowsL1Component;
  let fixture: ComponentFixture<WindowsL1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowsL1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowsL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
