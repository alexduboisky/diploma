import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCoreComponent } from './main-core.component';

describe('MainComponent', () => {
  let component: MainCoreComponent;
  let fixture: ComponentFixture<MainCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
