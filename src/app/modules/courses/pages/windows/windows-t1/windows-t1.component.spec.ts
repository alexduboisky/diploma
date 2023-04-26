import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsT1Component } from './windows-t1.component';

describe('WindowsT1Component', () => {
  let component: WindowsT1Component;
  let fixture: ComponentFixture<WindowsT1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowsT1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowsT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
