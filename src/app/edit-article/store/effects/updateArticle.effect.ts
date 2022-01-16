import { Injectable } from '@angular/core'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { ArticleInterface } from '../../../shared/types/article.interface'
import { EditArticleService } from '../../services/edit-article.service'
import { ArticleService as SharedArticleService } from '../../../shared/services/article.service'
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction,
} from '../actions/updateArticle.action'

@Injectable()
export class UpdateArticleEffect {
  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({ slug, request }) => {
        return this.editArticleService.updateArticle(slug, request).pipe(
          map((article: ArticleInterface) => {
            return updateArticleSuccessAction({ article })
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              /**
               * HttpErrorResponse.error is bodyResponse
               * and contain errors object
               */
              updateArticleFailureAction({ errors: errorResponse.error.errors })
            )
          })
        )
      })
    )
  )

  redirectAfterUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateArticleSuccessAction),
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
    private sharedArticleService: SharedArticleService,
    private router: Router,
    private editArticleService: EditArticleService
  ) {}
}
