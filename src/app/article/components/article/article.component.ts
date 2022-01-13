import { Component, OnDestroy, OnInit } from '@angular/core'
import { ArticleInterface } from '../../../shared/types/article.interface'
import { combineLatest, map, Observable, Subscription } from 'rxjs'
import { select, Store } from '@ngrx/store'
import { ActivatedRoute } from '@angular/router'
import { getArticleAction } from '../../store/actions/getArticle.action'
import {
  articleSelector,
  errorSelector,
  isLoadingSelector,
} from '../../store/selectors'
import { currentUserSelector } from '../../../auth/store/selectors'
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  slug: string
  article: ArticleInterface | null
  articleSubscription: Subscription
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  isAuthor$: Observable<boolean>

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
    this.fetchData()
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe()
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isAuthor$ = combineLatest(
      this.store.pipe(select(currentUserSelector)),
      this.store.pipe(select(articleSelector))
    ).pipe(
      map(
        ([currentUser, article]: [
          CurrentUserInterface | null,
          ArticleInterface | null
        ]) => {
          if (currentUser && article) {
            return currentUser.username === article.author.username
          }
          return false
        }
      )
    )
  }

  initializeListeners(): void {
    this.articleSubscription = this.store
      .pipe(select(articleSelector))
      .subscribe((article: ArticleInterface | null) => {
        this.article = article
      })
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }))
  }
}
