import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { environment } from '../../../environments/environment'
import { GetUserProfileResponseInterface } from '../types/getUserProfileResponse.interface'
import { ProfileInterface } from '../../shared/types/profile.interface'

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) {}

  getUserProfile(slug: string): Observable<ProfileInterface> {
    const url = `${environment.baseApiUrl}/profiles/${slug}`
    return this.http
      .get(url)
      .pipe(
        map((response: GetUserProfileResponseInterface) => response.profile)
      )
  }
}
