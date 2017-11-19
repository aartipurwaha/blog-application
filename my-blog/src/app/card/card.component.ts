import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() blog;
  @Input() user;
  private showFav:boolean;
  private showButtons:boolean;
  @Output() Fav: EventEmitter<any> = new EventEmitter();
  @Output() UnFav: EventEmitter<any> = new EventEmitter();
  @Output() Delete: EventEmitter<any> = new EventEmitter();
  @Output() Update: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.showButtons = false;
    this.showFav = false;
  }

  ngOnInit() {
    if(localStorage.getItem("userId") == this.blog.authorId){
      this.showButtons = true;
    }

    if(localStorage.getItem("isloggedin") === "true"){
      let entry:any;
      for(entry of this.user.favourites){
        if(this.blog.id === entry){
          this.showFav = true;
          console.log(this.showFav);
          break;
        }
      }
    }
  }

  setFav(blog){
    this.Fav.emit(blog);
    this.showFav = true;
  }

  setUnFav(blog){
    this.UnFav.emit(blog);
    this.showFav = false;
  }

  setDelete(blog){
    this.Delete.emit(blog);
  }

  setUpdate(blog){
    this.Update.emit(blog);
  }

}
