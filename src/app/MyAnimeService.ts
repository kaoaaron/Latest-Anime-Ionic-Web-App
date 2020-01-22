import { HttpClient } from '@angular/common/http';

const API = 'https://api.jikan.moe/v3/season/later';

export class MyAnimeService {
    _http:HttpClient;
    public _animeArray: Array<any>;
    public items: Array<{ title: string; note: Number}> = [];

    constructor(private http: HttpClient) {
        this._http = http;
        this.getAnime();
    }
   
    getAnime() {
      this._http.get<any>(API)
      // Get data and wait for result.
      .subscribe(data => {

          this._animeArray  = data.anime;
    
          for (let i = 0; i < this._animeArray.length; i++) {
            this.items.push({
              title: this._animeArray[i].title,
              note:  i+1,
            });
          }
      }, 
      error =>{
        // Let user know about the error.
        console.error(error)
      })
        
    }

}
