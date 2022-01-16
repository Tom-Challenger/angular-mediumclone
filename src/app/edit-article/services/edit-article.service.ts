import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { environment } from '../../../environments/environment'
import { ArticleInterface } from '../../shared/types/article.interface'
import { SaveArticleResponseInterface } from '../../shared/types/saveArticleResponse.interface'
import { UpdateArticleRequestInterface } from '../types/updateArticleRequest.interface'

@Injectable()
export class EditArticleService {
  constructor(private http: HttpClient) {}

  updateArticle(
    slug: string,
    request: UpdateArticleRequestInterface
  ): Observable<ArticleInterface> {
    const fullUrl = `${environment.baseApiUrl}/articles/${slug}`
    return this.http
      .put<SaveArticleResponseInterface>(fullUrl, request)
      .pipe(map((response: SaveArticleResponseInterface) => response.article))
  }
}
