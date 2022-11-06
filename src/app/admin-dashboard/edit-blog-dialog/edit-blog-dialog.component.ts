import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticlesService } from 'src/app/services/articles.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-edit-blog-dialog',
  templateUrl: './edit-blog-dialog.component.html',
  styleUrls: ['./edit-blog-dialog.component.css'],
})
export class EditBlogDialogComponent implements OnInit {
  editForm!: FormGroup;
  articleDetails!: Article;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditBlogDialogComponent>,
    private articlesService: ArticlesService
  ) {
    this.articleDetails = data.articleDetails;
  }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      title: new FormControl(this.articleDetails.title, [
        Validators.required,
        Validators.maxLength(255),
      ]),
      body: new FormControl(this.articleDetails.body, [
        Validators.required,
        Validators.maxLength(255),
      ]),
      category_id: new FormControl(
        this.articleDetails.category_id,
        Validators.required
      ),
    });
  }

  onSave() {
    this.articlesService
      .edit(this.articleDetails.id, this.editForm.value)
      .subscribe((res) => this.dialogRef.close(res));
  }

  onCancel() {
    this.dialogRef.close();
  }
}
