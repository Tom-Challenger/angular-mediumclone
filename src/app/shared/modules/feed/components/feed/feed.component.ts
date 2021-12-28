import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  /**
   * Компонент выделен в shared модуль для переиспользования на разных страницах
   * Отличие компонента на страницах в url адресе запроса к данным
   *
   * SMART компонент включает в список постов и пагинацию страниц
   *
   * Альтернатива. Создать отдельно компонент 'list-item' и 'pagination'.
   */
  constructor() {}

  ngOnInit(): void {}
}
