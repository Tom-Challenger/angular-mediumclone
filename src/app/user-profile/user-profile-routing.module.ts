import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UserProfileComponent } from './components/user-profile/user-profile.component'

const routes: Routes = [
  {
    path: 'profiles/:slug',
    component: UserProfileComponent,
  },
  {
    path: 'profiles/:slug/favorites',
    component: UserProfileComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfileRoutingModule {}
