import { Component, Input, OnInit } from '@angular/core'
import { PopularTagType } from '../../../../types/PopularTagType.type'

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
})
export class TagListComponent implements OnInit {
  @Input('tags') tagsProps: PopularTagType[]

  constructor() {}

  ngOnInit(): void {}
}