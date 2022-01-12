import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GlobalFeedComponent } from './components/global-feed/global-feed.component'
import { GlobalFeedRoutingModule } from './global-feed-routing.module'
import { FeedModule } from '../shared/modules/feed/feed.module'
import { BannerModule } from '../shared/modules/banner/banner.module'
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module'

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [
    CommonModule,
    GlobalFeedRoutingModule,
    FeedModule,
    BannerModule,
    PopularTagsModule,
  ],
})
export class GlobalFeedModule {}
