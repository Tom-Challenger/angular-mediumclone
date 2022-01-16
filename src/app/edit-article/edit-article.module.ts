import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EditArticleService } from './services/edit-article.service'
import { ArticleService as SharedArticleService } from '../shared/services/article.service'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { UpdateArticleEffect } from './store/effects/updateArticle.effect'
import { GetArticleEffect } from './store/effects/getArticle.effect'
import { reducers } from './store/reducers'
import { EditArticleComponent } from './components/edit-article/edit-article.component'
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module'
import { LoadingModule } from '../shared/modules/loading/loading.module'
import { EditArticleRoutingModule } from './edit-article-routing.module'

@NgModule({
  declarations: [EditArticleComponent],
  imports: [
    CommonModule,
    EditArticleRoutingModule,
    StoreModule.forFeature('editArticle', reducers),
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
    ArticleFormModule,
    LoadingModule,
  ],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
