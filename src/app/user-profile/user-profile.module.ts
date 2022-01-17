import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UserProfileRoutingModule } from './user-profile-routing.module'
import { UserProfileComponent } from './components/user-profile/user-profile.component'
import { EffectsModule } from '@ngrx/effects'
import { GetUserProfileEffect } from './store/effects/getUserProfile.effect'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/reducers'

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    StoreModule.forFeature('userProfile', reducers),
    EffectsModule.forFeature([GetUserProfileEffect]),
  ],
})
export class UserProfileModule {}
