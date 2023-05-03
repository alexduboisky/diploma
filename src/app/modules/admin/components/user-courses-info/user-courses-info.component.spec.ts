import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCoursesInfoComponent } from './user-courses-info.component';

describe('UserCoursesInfoComponent', () => {
  let component: UserCoursesInfoComponent;
  let fixture: ComponentFixture<UserCoursesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCoursesInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCoursesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
