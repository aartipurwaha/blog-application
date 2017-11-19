import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {forEach} from "@angular/router/src/utils/collection";
import {BloggingService} from "../blogging-service/blogging.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private user:any;
  private blogs:any;
  private categories:any;
  private filteredBlogs:any;
  private blogToBeUpdated;

  constructor(private router:Router,private bloggingService:BloggingService) {
    if(localStorage.getItem("isloggedin") == "false"){
      console.log(localStorage.getItem("isloggedin"));
      this.router.navigate(['']);
    }

    this.blogToBeUpdated = {
      title:'',
      description:'',
      authorId:0,
      categoryId:0,
      date:null,
      id:0
    }
  }

  ngOnInit() {
    this.loadBlogs();

      let cacheUserId = localStorage.getItem("userId");
    this.bloggingService.getUserData(cacheUserId)
      .subscribe((data) => {
          this.user = data;
          console.log(this.user);
      });

    this.bloggingService.loadCategories()
      .subscribe((data) => {
        this.categories = data;
        console.log(this.categories);
      });
  }

  loadBlogs(){
    this.bloggingService.loadBlogs()
      .subscribe((data) => {
        this.blogs = data;
        this.filteredBlogs = this.blogs;

      });
  }

  getCategory(categoryId){

    this.filteredBlogs = this.blogs.filter(blogs => blogs.categoryId === categoryId);
  }

  getHome(){
    this.filteredBlogs = this.blogs;
  }

  getMyBlogs(){
    this.filteredBlogs = this.blogs.filter(blog => blog.authorId === this.user.id);
  }

  getFavourites(){

    let favId:any;
    let blog:any;
    let favBlogs:Object[] = [];

    for(favId of this.user.favourites){
      for(blog of this.blogs){
          if(blog.id === favId){
            favBlogs.push(blog);
          }
      }
    }

    this.filteredBlogs = favBlogs;

  }

  Fav(blog){
    this.user.favourites.push(blog.id);
    this.bloggingService.updateUserData(this.user)
      .subscribe((data) => {
      })
  }

  unFav(blog){
    this.user.favourites = this.user.favourites.filter(favId => favId !== blog.id);
    this.bloggingService.updateUserData(this.user)
      .subscribe((data) => {
      })
  }

  Add(title,desc,category){

    let Blog = {
      title:title,
      description:desc,
      authorId:this.user.id,
      categoryId:+category,
      date:new Date()
    }

    this.bloggingService.postBlog(Blog)
      .subscribe((data) => {
        this.blogs.push(data);
        this.loadBlogs();
      })
  }

  deletePost(blog){
    this.bloggingService.deleteBlog(blog)
      .subscribe((data) => {
        this.loadBlogs();
      })
  }

  updatePost(title,desc,category){
    let updatedBlog = {
      title:title,
      description:desc,
      authorId:this.user.id,
      categoryId:+category,
      date:new Date(),
      id:this.blogToBeUpdated.id
    }
    this.bloggingService.updateBlog(updatedBlog)
      .subscribe((data) => {
        this.loadBlogs();
      })
  }

  update(blog){
    this.blogToBeUpdated = blog;
  }

}
