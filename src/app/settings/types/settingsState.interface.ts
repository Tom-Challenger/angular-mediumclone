import { BackendErrorsInterface } from '../../shared/types/backendErrors.interface'

// Описание полей состояния только View слоя
// View слой содержит только поля для отображения состояний компонентов на странице
export interface SettingsStateInterface {
  isSubmitting: boolean
  validationErrors: BackendErrorsInterface | null
}
