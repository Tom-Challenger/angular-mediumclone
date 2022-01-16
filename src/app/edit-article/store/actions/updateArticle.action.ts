import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../actionTypes'
import { BackendErrorsInterface } from '../../../shared/types/backendErrors.interface'
import { ArticleInterface } from '../../../shared/types/article.interface'
import { UpdateArticleRequestInterface } from '../../types/updateArticleRequest.interface'

export const updateArticleAction = createAction(
  ActionTypes.UPDATE_ARTICLE,
  props<{ slug: string, request: UpdateArticleRequestInterface }>()
)

export const updateArticleSuccessAction = createAction(
  ActionTypes.UPDATE_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
)

export const updateArticleFailureAction = createAction(
  ActionTypes.UPDATE_ARTICLE_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
)
