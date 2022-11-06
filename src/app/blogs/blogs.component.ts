import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ArticlesService } from '../services/articles.service';
import { Article } from './../models/article';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  articles!: Article[];
  page: number = 1;
  total: number = 0;
  destroy$ = new Subject<void>();

  constructor(private articlesService: ArticlesService) {}

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

  changePage(event: number) {
    this.page = event;
    this.getArticles();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
