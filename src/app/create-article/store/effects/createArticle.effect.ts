import { Injectable } from '@angular/core'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { CreateArticleService } from '../../services/create-article.service'
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from '../actions/createArticle.action'
import { ArticleInterface } from '../../../shared/types/article.interface'

@Injectable()
export class CreateArticleEffect {
  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleAction),
      switchMap(({ request }) => {
        return this.createArticleService.createArticle(request).pipe(
          map((article: ArticleInterface) => {
            return createArticleSuccessAction({ article })
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              /**
               * HttpErrorResponse.error is bodyResponse
               * and contain errors object
               */
              createArticleFailureAction({ errors: errorResponse.error.errors })
            )
          })
        )
      })
    )
  )

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap(async ({ article }) => {
          await this.router.navigate(['/articles', article.slug])
        })
      ),
    {
      dispatch: false,
    }
  )

  constructor(
    private actions$: Actions,
    private createArticleService: CreateArticleService,
    private router: Router
  ) {}
}
