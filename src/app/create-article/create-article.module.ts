import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CreateArticleComponent } from './components/create-article/create-article.component'
import { CreateArticleRoutingModule } from './create-article-routing.module'
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module'

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [CommonModule, CreateArticleRoutingModule, ArticleFormModule],
})
export class CreateArticleModule {}
