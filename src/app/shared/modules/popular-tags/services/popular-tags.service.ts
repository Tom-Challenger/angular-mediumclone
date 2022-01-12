import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'
import { PopularTagType } from '../../../types/PopularTagType.type'
import { environment } from '../../../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { GetPopularTagsResponseInterface } from '../types/getPopularTagsResponse.interface'

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.baseApiUrl + '/tags'

    return this.http.get(url).pipe(
      map((response: GetPopularTagsResponseInterface) => {
        return response.tags
      })
    )
  }
}
