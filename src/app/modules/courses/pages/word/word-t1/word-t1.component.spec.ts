import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordT1Component } from './word-t1.component';

describe('WordT1Component', () => {
  let component: WordT1Component;
  let fixture: ComponentFixture<WordT1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordT1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
