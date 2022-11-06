import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Article } from '../models/article';
import { ArticlesService } from '../services/articles.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddBlogDialogComponent } from './add-blog-dialog/add-blog-dialog.component';
import { EditBlogDialogComponent } from './edit-blog-dialog/edit-blog-dialog.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  articles!: Article[];
  page: number = 1;
  total: number = 0;
  destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private articlesService: ArticlesService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.articlesService
      .getArticles(this.page)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: Article) => {
        this.articles = res.data;
        this.total = res.total;
      });
  }

  add(): void {
    const dialogRef = this.dialog.open(AddBlogDialogComponent, {
      height: '500px',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((res) => {
      this.getArticles();
    });
  }

  edit(article: Article) {
    const dialogRef = this.dialog.open(EditBlogDialogComponent, {
      height: '500px',
      width: '500px',
      data: { articleDetails: article },
    });

    dialogRef.afterClosed().subscribe((res) => {
      this.getArticles();
    });
  }

  changePage(event: number) {
    this.page = event;
    this.getArticles();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
