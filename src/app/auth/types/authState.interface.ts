import { CurrentUserInterface } from '../../shared/types/currentUser.interface'
import { BackendErrorsInterface } from '../../shared/types/backendErrors.interface'

export interface AuthStateInterface {
  isSubmitting: boolean
  currentUser: CurrentUserInterface | null
  validationErrors: BackendErrorsInterface | null
  /**
   * Hack
   * If request in progress then isLoggedIn === null
   */
  isLoggedIn: boolean | null
}
