import { PopularTagType } from '../../../types/PopularTagType.type'

export interface PopularTagsStateInterface {
  data: PopularTagType[] | null
  error: string | null
  isLoading: boolean
}
