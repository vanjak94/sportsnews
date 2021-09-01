import { NewsArticleFormComponent } from './../news-article-form/news-article-form.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
