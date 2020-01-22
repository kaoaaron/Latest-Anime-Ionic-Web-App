import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyAnimeService } from '../MyAnimeService';
import { HttpClient } from '@angular/common/http';

var interval
var interval2

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  providers: [MyAnimeService]
})
export class DetailPage {
  _http:HttpClient;
  _animeArray: Array<any>;
  title: string;
  id:number;
  names: Array<any>;
  image: string;
  synopsis: string;

  constructor(private http: HttpClient,private route: ActivatedRoute,myAnimeService: MyAnimeService){
    this._http = http;
    interval = setInterval(()=>this.setAnimeArray(myAnimeService._animeArray), 50)
  }

  setAnimeArray(animeArray){
    if(this._animeArray != undefined){
      clearInterval(interval)
    }else{
      this._animeArray = animeArray;
    }
  }

  setDetails(){
    try{
      this.id = Number(this.route.snapshot.paramMap.get('id')) ;
      this.title = this._animeArray[this.id-1].title;
      this.image = this._animeArray[this.id-1].image_url;
      this.synopsis = this._animeArray[this.id-1].synopsis;
      clearInterval(interval2)
    }catch(err){
      interval2 = setInterval(()=>this.setDetails(), 300)
    }
 }

  // Ionic tab pages are initialized in the constructor only once. 
  // ionViewWillEnter() is called every time the tab page is viewed.
  ionViewWillEnter(){
    this.setDetails();
  }
  

  
}
