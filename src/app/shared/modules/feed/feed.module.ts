import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeedComponent } from './components/feed/feed.component'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/reducers'
import { EffectsModule } from '@ngrx/effects'
import { GetFeedEffect } from './store/effects/getFeed.effect'
import { FeedService } from './services/feed.service'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('feed', reducers),
    EffectsModule.forFeature([GetFeedEffect]),
    RouterModule,
  ],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
