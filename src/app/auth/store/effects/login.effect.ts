import { Injectable } from '@angular/core'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { AuthService } from '../../services/auth/auth.service'
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface'
import { HttpErrorResponse } from '@angular/common/http'
import { PersistenceService } from '../../../shared/services/persistence.service'
import { Router } from '@angular/router'
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from '../actions/login.action'

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistenceService.set('token', currentUser.token)
            return loginSuccessAction({ currentUser })
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              /**
               * HttpErrorResponse.error is bodyResponse
               * and contain errors object
               */
              loginFailureAction({ errors: errorResponse.error.errors })
            )
          })
        )
      })
    )
  )

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(async () => {
          await this.router.navigateByUrl('/')
        })
      ),
    {
      dispatch: false,
    }
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService,
    private router: Router
  ) {}
}