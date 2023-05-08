import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelL3Component } from './excel-l3.component';

describe('ExcelL3Component', () => {
  let component: ExcelL3Component;
  let fixture: ComponentFixture<ExcelL3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelL3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcelL3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
