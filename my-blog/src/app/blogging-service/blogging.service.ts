import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import "rxjs/add/operator/map";

const BASE_URL1 = 'http://localhost:3000/users/';
const BASE_URL2 = 'http://localhost:3000/categories/';
const BASE_URL3 = 'http://localhost:3000/blogs/';
const  header = {headers: new Headers({'Content-Type':'application/json'})};

@Injectable()
export class BloggingService {

  constructor(private http:Http) { }

  getUsersData(){
    return this.http.get(BASE_URL1)
      .map(response => response.json())
  }

  getUserData(userId){
    return this.http.get(`${BASE_URL1}${userId}`)
      .map(response => response.json())
  }

  updateUserData(data){
    return this.http.patch(`${BASE_URL1}${data.id}`,data,header)
      .map(response => response.json())
  }

  loadCategories(){
    return this.http.get(BASE_URL2)
      .map(response => response.json())
  }

  loadBlogs(){
    return this.http.get(BASE_URL3)
      .map(response => response.json())
  }

  postBlog(data){
    return this.http.post(BASE_URL3,data,header)
      .map(response => response.json())
  }

  updateBlog(data){
    return this.http.patch(`${BASE_URL3}${data.id}`,data,header)
      .map(response => response.json())
  }

  deleteBlog(data){
    return this.http.delete(`${BASE_URL3}${data.id}`)
      .map(response => response.json())
  }

}
