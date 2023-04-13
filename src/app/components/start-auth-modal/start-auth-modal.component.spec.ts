import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartAuthModalComponent } from './start-auth-modal.component';

describe('StartAuthModalComponent', () => {
  let component: StartAuthModalComponent;
  let fixture: ComponentFixture<StartAuthModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartAuthModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartAuthModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
