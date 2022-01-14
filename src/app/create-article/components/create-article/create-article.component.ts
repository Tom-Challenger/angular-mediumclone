import { Component, Input, OnInit } from '@angular/core'
import { ArticleInputInterface } from '../../types/articleInput.interface'
import { BackendErrorsInterface } from '../../../shared/types/backendErrors.interface'

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  @Input('initialValues') initialValuesProps: ArticleInputInterface
  @Input('isSubmitting') isSubmittingProps: boolean
  @Input('errors') errors: BackendErrorsInterface | null

  constructor() {}

  ngOnInit(): void {}
}
