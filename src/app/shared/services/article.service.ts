import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { ArticleInterface } from '../types/article.interface'
import { environment } from '../../../environments/environment'
import { GetArticleResponseInterface } from '../types/getArticleResponse.interface'

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullApi = `${environment.baseApiUrl}/articles/${slug}`
    return this.http.get(fullApi).pipe(
      map((response: GetArticleResponseInterface) => {
        return response.article
      })
    )
  }
}
