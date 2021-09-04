import { ICreateNewsArticleDto } from './../dtos/create-news-article.dto';
import { ICategoryModel } from './../models/category.model';
import { NewsArticleService } from './../news-article.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-news-article-form-modal',
  templateUrl: './news-article-form-modal.component.html',
  styleUrls: ['./news-article-form-modal.component.css'],
})
export class NewsArticleFormModalComponent implements OnInit {
  ngOnInit(): void {}

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(NewsArticleFormComponent, {
      //
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}


@Component({
  selector: 'app-news-article-form',
  templateUrl: './news-article-form.component.html',
  styleUrls: ['./news-article-form.component.css'],
})
export class NewsArticleFormComponent implements OnInit {
  constructor(private articleService: NewsArticleService,
    private dialogRef: MatDialogRef<NewsArticleFormComponent>
    ) {}

  categories?: ICategoryModel[];
  articleFormData: ICreateNewsArticleDto = {
    title: '',
    body: '',
    category: ''
  }
  editorConfig = {
    editable: true,
    minHeight: '150px'
  }

  ngOnInit(): void {
    this.articleService.getCategories().subscribe((cats) => {
      this.categories = cats;
    });
  }

  createArticle(data: ICreateNewsArticleDto) {
    console.log(this.articleFormData)
    this.articleService.create(data).subscribe(
      data => {
        this.dialogRef.close()
      }
    )
  }
}
