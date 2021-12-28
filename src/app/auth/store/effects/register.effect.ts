import { Injectable } from '@angular/core'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { AuthService } from '../../services/auth/auth.service'
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface'
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action'
import { HttpErrorResponse } from '@angular/common/http'
import { PersistenceService } from '../../../shared/services/persistence.service'
import { Router } from '@angular/router'

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistenceService.set('token', currentUser.token)
            return registerSuccessAction({ currentUser })
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              /**
               * HttpErrorResponse.error is bodyResponse
               * and contain errors object
               */
              registerFailureAction({ errors: errorResponse.error.errors })
            )
          })
        )
      })
    )
  )

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(async () => {
          console.log('tap')
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
