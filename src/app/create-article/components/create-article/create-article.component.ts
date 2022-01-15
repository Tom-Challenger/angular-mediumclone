import { Component } from '@angular/core'

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent {
  initialValues = {
    title: 'Foo',
    description: 'Bar',
    body: 'baz',
    tagList: ['1', '2', '3'],
  }

  onSubmit(res: any): void {
    console.log('onSubmit: ', res)
  }
}
