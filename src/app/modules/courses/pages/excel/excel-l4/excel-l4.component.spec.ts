import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelL4Component } from './excel-l4.component';

describe('ExcelL4Component', () => {
  let component: ExcelL4Component;
  let fixture: ComponentFixture<ExcelL4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelL4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcelL4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
