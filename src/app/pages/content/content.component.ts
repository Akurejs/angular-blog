import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { contentInfos } from '../../data/contentInfos'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = ""
  contentTitle:string = ""
  contentDescription:string = ""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value  =>
      this.id  = value.get("id")
    )

    this.setValeusToComponent(this.id)
  }

  setValeusToComponent(id:string | null) {
    const result = contentInfos.filter(article => article.id == id)[0]

    this.photoCover = result.photoCover
    this.contentTitle = result.title
    this.contentDescription = result.description

  }

}
