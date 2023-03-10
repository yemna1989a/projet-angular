import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesCardComponent } from './articles-card.component';

describe('ArticlesCardComponent', () => {
  let component: ArticlesCardComponent;
  let fixture: ComponentFixture<ArticlesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
