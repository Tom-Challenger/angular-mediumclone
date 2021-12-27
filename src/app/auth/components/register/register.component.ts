import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { registerAction } from '../../store/actions'
import { Observable } from 'rxjs'
import { isSubmittingSelector } from '../../store/selectors'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  /*
  Initialize {Form, Variable, Values}
   */
  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    console.log('isSubmitting$', this.isSubmitting$)
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: [''],
      password: [''],
    })
    console.log(this.form)
  }

  onSubmit(): void {
    console.log(this.form.valid)
    this.store.dispatch(registerAction(this.form.value))
  }
}
