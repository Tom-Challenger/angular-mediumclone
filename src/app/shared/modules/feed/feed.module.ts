import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeedComponent } from './components/feed/feed.component'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/reducers'
import { EffectsModule } from '@ngrx/effects'
import { GetFeedEffect } from './store/effects/getFeed.effect'
import { FeedService } from './services/feed.service'
import { RouterModule } from '@angular/router'
import { ErrorMessageModule } from '../error-message/error-message.module'
import { LoadingModule } from '../loading/loading.module'
import { PaginationModule } from '../pagination/pagination.module'
import { TagListModule } from '../tag-list/tag-list.module'

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('feed', reducers),
    EffectsModule.forFeature([GetFeedEffect]),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
  ],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
