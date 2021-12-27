import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'

import { AuthRoutingModule } from './auth-routing.module'
import { RegisterComponent } from './components/register/register.component'
import { reducers } from './store/reducers'
import { AuthService } from './services/auth/auth.service'

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
  ],
  providers: [AuthService],
})
export class AuthModule {}
