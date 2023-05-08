import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelL2Component } from './excel-l2.component';

describe('ExcelL2Component', () => {
  let component: ExcelL2Component;
  let fixture: ComponentFixture<ExcelL2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelL2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcelL2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
