import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticlesService } from 'src/app/services/articles.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-blog-dialog',
  templateUrl: './add-blog-dialog.component.html',
  styleUrls: ['./add-blog-dialog.component.css'],
})
export class AddBlogDialogComponent implements OnInit {
  addForm!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddBlogDialogComponent>,
    private articlesService: ArticlesService
  ) {}

  ngOnInit(): void {
    this.addForm = new FormGroup({
      title: new FormControl(' ', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      body: new FormControl(' ', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      category_id: new FormControl('', Validators.required),
    });
  }

  onSave() {
    this.articlesService
      .add(this.addForm.value)
      .subscribe((res) => this.dialogRef.close(res));
  }

  onCancel() {
    this.dialogRef.close();
  }
}
