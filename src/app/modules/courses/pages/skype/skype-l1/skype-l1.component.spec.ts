import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkypeL1Component } from './skype-l1.component';

describe('SkypeL1Component', () => {
  let component: SkypeL1Component;
  let fixture: ComponentFixture<SkypeL1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkypeL1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkypeL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
