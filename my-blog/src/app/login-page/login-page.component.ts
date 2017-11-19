import { Component, OnInit } from '@angular/core';
import {BloggingService} from "../blogging-service/blogging.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  private users:any;
  private blogs:any;
  constructor(private bloggingService:BloggingService) { }

  ngOnInit() {
    this.bloggingService.loadBlogs()
      .subscribe((data) => {
        this.blogs = data;
      });

    this.bloggingService.getUsersData()
      .subscribe((data) => {
        this.users = data;
        console.log(this.users);
      });
  }

}
