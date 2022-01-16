import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AppStateInterface } from '../../shared/types/appState.interface'
import { SettingsStateInterface } from '../types/settingsState.interface'

export const authFeatureSelector = createFeatureSelector<
  AppStateInterface,
  SettingsStateInterface
>('settings')

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.isSubmitting
)

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.validationErrors
)
