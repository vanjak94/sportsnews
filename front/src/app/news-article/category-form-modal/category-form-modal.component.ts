import { LoginFormComponent } from './../../header/login-form-modal/login-form-modal.component';
import { ICreateCategoryDto } from './../dtos/create-category.dto';
import { NewsArticleService } from './../news-article.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-form-modal',
  templateUrl: './category-form-modal.component.html',
  styleUrls: ['./category-form-modal.component.css'],
})
export class CategoryFormModalComponent implements OnInit {
  ngOnInit(): void {}

  constructor(public dialog: MatDialog) {}


  openDialog(): void {
    const dialogRef = this.dialog.open(CategoryFormComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css'],
})
export class CategoryFormComponent implements OnInit {
  constructor(private articleService: NewsArticleService,

    public dialogRef: MatDialogRef<LoginFormComponent>) {}

  categoryFormState: ICreateCategoryDto = {
    name: ''
  }

  ngOnInit() {}

  isFormInvalid() {
    return this.categoryFormState.name === "";
  }

  createNewCategory(data: ICreateCategoryDto) {
    console.log('button callback')
    this.articleService
      .createCategory(data)
      .subscribe((data) => {
        this.dialogRef.close()
      });
  }
}
