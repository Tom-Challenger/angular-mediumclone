import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { ArticleComponent } from './components/article/article.component'
import { reducers } from './store/reducers'
import { GetArticleEffect } from './store/effects/getArticle.effect'
import { ErrorMessageModule } from '../shared/modules/error-message/error-message.module'
import { LoadingModule } from '../shared/modules/loading/loading.module'
import { ArticleService } from '../shared/services/article.service'
import { ArticleRoutingModule } from './article-routing.module'
import { TagListModule } from '../shared/modules/tag-list/tag-list.module'

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    RouterModule,
    ArticleRoutingModule,
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([GetArticleEffect]),
    ErrorMessageModule,
    LoadingModule,
    TagListModule,
  ],
  providers: [ArticleService],
})
export class ArticleModule {}
