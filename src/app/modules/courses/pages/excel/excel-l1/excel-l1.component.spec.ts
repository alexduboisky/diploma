import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelL1Component } from './excel-l1.component';

describe('ExcelL1Component', () => {
  let component: ExcelL1Component;
  let fixture: ComponentFixture<ExcelL1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelL1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcelL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
