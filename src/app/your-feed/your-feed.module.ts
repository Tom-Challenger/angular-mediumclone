import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { YourFeedComponent } from './components/your-feed/your-feed.component'
import { BannerModule } from '../shared/modules/banner/banner.module'
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module'
import { FeedModule } from '../shared/modules/feed/feed.module'
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module'
import { YourFeedRoutingModule } from './your-feed-routing.module'

@NgModule({
  declarations: [YourFeedComponent],
  imports: [
    CommonModule,
    YourFeedRoutingModule,
    BannerModule,
    FeedTogglerModule,
    FeedModule,
    PopularTagsModule,
  ],
})
export class YourFeedModule {}
