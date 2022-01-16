import { Component, OnInit } from '@angular/core'
import { filter, map, Observable } from 'rxjs'
import { BackendErrorsInterface } from '../../../shared/types/backendErrors.interface'
import { select, Store } from '@ngrx/store'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../../create-article/store/selectors'
import { ArticleInputInterface } from '../../../create-article/types/articleInput.interface'
import { ActivatedRoute } from '@angular/router'
import { getArticleAction } from '../../store/actions/getArticle.action'
import { articleSelector } from '../../store/selectors'
import { ArticleInterface } from '../../../shared/types/article.interface'
import { UpdateArticleRequestInterface } from '../../types/updateArticleRequest.interface'
import { updateArticleAction } from '../../store/actions/updateArticle.action'

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit {
  initialValues$: Observable<ArticleInputInterface>
  isSubmitting$: Observable<boolean>
  isLoading$: Observable<boolean>
  validationErrors$: Observable<BackendErrorsInterface | null>
  slug: string

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.validationErrors$ = this.store.pipe(select(validationErrorsSelector))
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean), // equal is filter(article: ArticleInterface) => { return article !== null }
      map((article: ArticleInterface): ArticleInputInterface => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList,
        }
      })
    )
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }))
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    const request: UpdateArticleRequestInterface = {
      article: articleInput,
    }
    this.store.dispatch(updateArticleAction({ slug: this.slug, request }))
  }
}
