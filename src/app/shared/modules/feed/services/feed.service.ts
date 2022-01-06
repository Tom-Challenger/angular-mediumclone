import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { GetFeedResponseInterface } from '../types/getFeedResponse.interface'
import { environment } from '../../../../../environments/environment'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class FeedService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Получение данных от сервера
   * @param url часть адреса для получения данных; Начинается с '/feed'
   */
  getFeed(url: string): Observable<GetFeedResponseInterface> {
    const fullUrl = environment.baseApiUrl + url
    return this.httpClient.get<GetFeedResponseInterface>(fullUrl)
  }
}
