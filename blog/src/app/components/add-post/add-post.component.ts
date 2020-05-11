import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  public post = {
    title: '',
    url: '',
    content: '',
  };

  constructor(private postsService: DataService, private router: Router) {
  }

  ngOnInit() {
  }

  save() {
    this.postsService.createOrUpdate(this.post).subscribe(f => {
      this.router.navigate(['/blog']);
    })
  }
}
