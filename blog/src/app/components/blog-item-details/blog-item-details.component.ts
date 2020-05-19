import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'blog-item-details',
  templateUrl: './blog-item-details.component.html',
  styleUrls: ['./blog-item-details.component.scss']
})
export class BlogItemDetailsComponent implements OnInit {

  image = '';
  text = '';

  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    let id: string;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      });

    this.dataService.getById(id).subscribe(res => {
      this.image = res['url'];
      this.text = res['content'];
    });

  }
}
