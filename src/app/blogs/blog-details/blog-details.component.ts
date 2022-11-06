import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ArticlesService } from 'src/app/services/articles.service';
import { Article } from './../../models/article';
import { Category } from './../../models/category';
import { Router } from '@angular/router';
import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
})
export class BlogDetailsComponent implements OnInit {
  article!: any;
  category!: Category;
  comments!: Comment[];
  destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticlesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getArticleById(this.route.snapshot?.params['id']);
  }

  getArticleById(id: number) {
    this.articleService
      .getArticleById(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: Article) => {
        this.article = res.data;
        debugger;
        this.getCategoryData(this.article.category_id);
        this.getCommentsForPost(this.article.id);
        console.log(this.article.body);
      });
  }

  getCategoryData(categoryId: number) {
    this.articleService
      .getCategoryData(categoryId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: Category) => {
        this.category = res.data;
      });
  }

  getCommentsForPost(postId: number) {
    this.articleService
      .getCommentsForPost(postId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: any) => {
        debugger;
        this.comments = res.data;
      });
  }

  navigate() {
    debugger;
    this.router.navigateByUrl('/articles');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
