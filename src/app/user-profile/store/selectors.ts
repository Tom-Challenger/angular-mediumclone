import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AppStateInterface } from '../../shared/types/appState.interface'
import { UserProfileStateInterface } from '../types/userProfileState.interface'

export const userProfileFeatureSelector = createFeatureSelector<
  AppStateInterface,
  UserProfileStateInterface
>('userProfile')

export const isLoadingSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: UserProfileStateInterface) => userProfileState.isLoading
)

export const errorSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: UserProfileStateInterface) => userProfileState.error
)

export const articleSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: UserProfileStateInterface) => userProfileState.data
)
