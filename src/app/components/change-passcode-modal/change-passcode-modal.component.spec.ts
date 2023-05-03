import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasscodeModalComponent } from './change-passcode-modal.component';

describe('ChangePasscodeModalComponent', () => {
  let component: ChangePasscodeModalComponent;
  let fixture: ComponentFixture<ChangePasscodeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasscodeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasscodeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
