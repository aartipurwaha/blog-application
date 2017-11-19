import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css']
})
export class PageContentComponent implements OnInit {

  @Input() blogs:any;
  @Input() user;
  @Output() Fav: EventEmitter<any> = new EventEmitter();
  @Output() UnFav: EventEmitter<any> = new EventEmitter();
  @Output() Delete: EventEmitter<any> = new EventEmitter();
  @Output() Update: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getFav(blog){
    this.Fav.emit(blog);
  }

  getUnFav(blog){
    this.UnFav.emit(blog);
  }

  getDelete(blog){
    this.Delete.emit(blog);
  }

  getUpdate(blog){
    this.Update.emit(blog);
  }


}
