import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordL1Component } from './word-l1.component';

describe('WordL1Component', () => {
  let component: WordL1Component;
  let fixture: ComponentFixture<WordL1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordL1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
