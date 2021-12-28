import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'

import { AuthRoutingModule } from './auth-routing.module'
import { RegisterComponent } from './components/register/register.component'
import { reducers } from './store/reducers'
import { AuthService } from './services/auth/auth.service'
import { EffectsModule } from '@ngrx/effects'
import { RegisterEffect } from './store/effects/register.effect'
import { BackendErrorMessagesModule } from '../shared/modules/backend-error-messages/backend-error-messages.module'
import { LoginEffect } from './store/effects/login.effect'
import { LoginComponent } from './components/login/login.component'

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    BackendErrorMessagesModule,
  ],
  providers: [AuthService],
})
export class AuthModule {}
