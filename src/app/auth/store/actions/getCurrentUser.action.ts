import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../actionTypes'
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface'

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER)

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
)

/**
 * If FAILURE then Response 401
 */
export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE
)
