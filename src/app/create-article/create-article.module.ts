import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { CreateArticleComponent } from './components/create-article/create-article.component'
import { CreateArticleRoutingModule } from './create-article-routing.module'
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module'
import { CreateArticleService } from './services/create-article.service'
import { reducers } from './store/reducers'
import { CreateArticleEffect } from './store/effects/createArticle.effect'

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    CreateArticleRoutingModule,
    ArticleFormModule,
    StoreModule.forFeature('createArticle', reducers),
    EffectsModule.forFeature([CreateArticleEffect]),
  ],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
