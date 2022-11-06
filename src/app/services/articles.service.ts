import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Article } from '../models/article';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { Comment } from 'src/app/models/comment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private url: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getArticles(page: number): Observable<Article> {
    let url = `${this.url}/articles?page=${page}`;
    return this.http.get<Article>(`${this.url}/articles?page=${page}`);
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.url}/articles/${id}`);
  }

  getCategoryData(categoryId: number): Observable<Category> {
    return this.http.get<Category>(`${this.url}/categories/${categoryId}`);
  }

  getCommentsForPost(postId: number): Observable<Comment> {
    return this.http.get<Comment>(`${this.url}/articles/${postId}/comments`);
  }

  add(article: Article) {
    let token = localStorage.getItem('token');
    let httpOptions: Object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      responseType: 'text',
    };

    return this.http.post(
      `${this.url}/articles?api_token=${token}`,
      article,
      httpOptions
    );
  }

  edit(id: number, article: Article) {
    let token = localStorage.getItem('token');
    return this.http.put(
      `${this.url}/articles/${id}?api_token=${token}`,
      article
    );
  }
}
