import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScategoriesComponent } from './scategories.component';

describe('ScategoriesComponent', () => {
  let component: ScategoriesComponent;
  let fixture: ComponentFixture<ScategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
