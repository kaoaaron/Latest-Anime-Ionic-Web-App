import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyAnimeService } from '../MyAnimeService';

var interval

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [MyAnimeService]
})
export class Tab1Page {
  _http:HttpClient;
  _animeArray: Array<any>;

  // Create an array of custom objects.
  public items: Array<{ title: string; note: Number}> = [];

  constructor(private http: HttpClient,myAnimeService: MyAnimeService) {
    this._http = http;
    interval = setInterval(()=>this.setAnimeArray(myAnimeService._animeArray), 100)
  }

  setAnimeArray(animeArray){
    if(this._animeArray != undefined){
      clearInterval(interval)
    }else{
      this._animeArray = animeArray;
          for (let i = 0; i < this._animeArray.length; i++) {
            this.items.push({
              title: this._animeArray[i].title,
              note:  i+1,
            });
          }
    }
  }
}


