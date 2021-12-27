import { AuthStateInterface } from '../types/authState.interface'
import { Action, createReducer, on } from '@ngrx/store'
import {
  registerAction,
  registerSuccessAction,
} from './actions/register.action'

const initialState: AuthStateInterface = {
  isSubmitting: false,
}

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    registerSuccessAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  )
)

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
