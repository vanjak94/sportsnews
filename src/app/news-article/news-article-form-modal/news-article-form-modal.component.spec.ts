import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArticleFormModalComponent } from './news-article-form-modal.component';

describe('NewsArticleFormModalComponent', () => {
  let component: NewsArticleFormModalComponent;
  let fixture: ComponentFixture<NewsArticleFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsArticleFormModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsArticleFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
