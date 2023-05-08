import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelT1Component } from './excel-t1.component';

describe('ExcelT1Component', () => {
  let component: ExcelT1Component;
  let fixture: ComponentFixture<ExcelT1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelT1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcelT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
