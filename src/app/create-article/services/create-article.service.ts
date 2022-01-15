import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { environment } from '../../../environments/environment'
import { ArticleInterface } from '../../shared/types/article.interface'
import { SaveArticleResponseInterface } from '../../shared/types/saveArticleResponse.interface'
import { CreateArticleRequestInterface } from '../types/createArticleRequest.interface'

@Injectable()
export class CreateArticleService {
  constructor(private http: HttpClient) {}

  createArticle(
    request: CreateArticleRequestInterface
  ): Observable<ArticleInterface> {
    const fullUrl = environment.baseApiUrl + '/articles'
    return this.http
      .post<SaveArticleResponseInterface>(fullUrl, request)
      .pipe(map((response: SaveArticleResponseInterface) => response.article))
  }
}
