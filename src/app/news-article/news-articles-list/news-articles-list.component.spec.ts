import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArticlesListComponent } from './news-articles-list.component';

describe('NewsArticlesListComponent', () => {
  let component: NewsArticlesListComponent;
  let fixture: ComponentFixture<NewsArticlesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsArticlesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsArticlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
