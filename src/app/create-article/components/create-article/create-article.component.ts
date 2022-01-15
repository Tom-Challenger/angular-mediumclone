import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { BackendErrorsInterface } from '../../../shared/types/backendErrors.interface'
import { select, Store } from '@ngrx/store'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors'
import { ArticleInputInterface } from '../../types/articleInput.interface'
import { createArticleAction } from '../../store/actions/createArticle.action'
import { CreateArticleRequestInterface } from '../../types/createArticleRequest.interface'

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  }
  isSubmitting$: Observable<boolean>
  validationErrors$: Observable<BackendErrorsInterface | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.validationErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    const request: CreateArticleRequestInterface = {
      article: articleInput,
    }
    this.store.dispatch(createArticleAction({ request }))
  }
}
