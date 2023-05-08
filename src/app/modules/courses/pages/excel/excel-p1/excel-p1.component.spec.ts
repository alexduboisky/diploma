import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelP1Component } from './excel-p1.component';

describe('ExcelP1Component', () => {
  let component: ExcelP1Component;
  let fixture: ComponentFixture<ExcelP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelP1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcelP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
