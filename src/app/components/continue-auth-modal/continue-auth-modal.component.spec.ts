import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueAuthModalComponent } from './continue-auth-modal.component';

describe('ContinueAuthModalComponent', () => {
  let component: ContinueAuthModalComponent;
  let fixture: ComponentFixture<ContinueAuthModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinueAuthModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinueAuthModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
