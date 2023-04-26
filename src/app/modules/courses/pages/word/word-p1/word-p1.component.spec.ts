import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordP1Component } from './word-p1.component';

describe('WordP1Component', () => {
  let component: WordP1Component;
  let fixture: ComponentFixture<WordP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordP1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
