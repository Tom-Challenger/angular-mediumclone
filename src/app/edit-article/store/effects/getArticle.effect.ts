import { Injectable } from '@angular/core'
import { catchError, map, of, switchMap } from 'rxjs'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { ArticleInterface } from '../../../shared/types/article.interface'
import { ArticleService as SharedArticleService } from '../../../shared/services/article.service'
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from '../actions/getArticle.action'

@Injectable()
export class GetArticleEffect {
  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.sharedArticleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleSuccessAction({ article })
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              /**
               * HttpErrorResponse.error is bodyResponse
               * and contain errors object
               */
              getArticleFailureAction()
            )
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private sharedArticleService: SharedArticleService
  ) {}
}
