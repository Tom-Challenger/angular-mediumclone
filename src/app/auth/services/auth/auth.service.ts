import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { RegisterRequestInterface } from '../../types/registerRequest.interface'
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface'
import { map, Observable } from 'rxjs'
import { environment } from '../../../../environments/environment'
import { AuthResponseInterface } from '../../types/authResponse.interface'
import { LoginRequestInterface } from '../../types/loginRequestInterface'
import { CurrentUserInputInterface } from '../../../shared/types/currentUserInput.interface'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.baseApiUrl + '/users'
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.baseApiUrl + '/users/login'
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.baseApiUrl + '/user'
    return this.http.get(url).pipe(map(this.getUser))
  }

  // currentUser..Input - объект для backend с постфиксом 'Input'
  updateCurrentUser(
    currentUserInput: CurrentUserInputInterface
  ): Observable<CurrentUserInterface> {
    const url = environment.baseApiUrl + '/user'
    return this.http.put(url, currentUserInput).pipe(map(this.getUser))
  }
}
