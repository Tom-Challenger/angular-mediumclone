import { Actions, createEffect, ofType } from '@ngrx/effects'
import { AddToFavoritesService } from '../../services/add-to-favorites.service'
import {
  addToFavoritesAction,
  addToFavoritesFailureAction,
  addToFavoritesSuccessAction,
} from '../actions/addToFavorites.action'
import { catchError, map, of, switchMap } from 'rxjs'
import { ArticleInterface } from '../../../../types/article.interface'
import { Injectable } from '@angular/core'

@Injectable()
export class AddToFavoritesEffect {
  addToFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavoritesAction),
      switchMap(({ isFavorited, slug }) => {
        const article$ = isFavorited
          ? this.addToFavoriteService.removeFromFavorites(slug)
          : this.addToFavoriteService.addToFavorites(slug)

        return article$.pipe(
          map((article: ArticleInterface) => {
            return addToFavoritesSuccessAction({ article })
          }),
          catchError(() => {
            return of(addToFavoritesFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private addToFavoriteService: AddToFavoritesService
  ) {}
}
