import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeedComponent } from './components/feed/feed.component'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/reducers'
import { EffectsModule } from '@ngrx/effects'
import { GetFeedEffect } from './store/effects/getFeed.effect'

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('feed', reducers),
    EffectsModule.forFeature([GetFeedEffect]),
  ],
  exports: [FeedComponent],
})
export class FeedModule {}
