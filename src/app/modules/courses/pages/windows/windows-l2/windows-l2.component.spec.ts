import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsL2Component } from './windows-l2.component';

describe('WindowsL2Component', () => {
  let component: WindowsL2Component;
  let fixture: ComponentFixture<WindowsL2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowsL2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowsL2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
