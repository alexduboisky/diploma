import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAuthModalComponent } from './teacher-auth-modal.component';

describe('TeacherAuthModalComponent', () => {
  let component: TeacherAuthModalComponent;
  let fixture: ComponentFixture<TeacherAuthModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherAuthModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherAuthModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
