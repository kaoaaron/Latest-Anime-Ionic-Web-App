import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  toDo:Array<any>;
  addedItem: string;
  count = 0;

  constructor() {
    this.toDo = [];
  }

  addItem(){
    this.toDo.push({item: this.addedItem, key: this.count});
    this.count++;
    this.addedItem = ""
    let jsonString = JSON.stringify(this.toDo);
    localStorage.setItem("array", jsonString);
  }

  removeItem(key){
    //console.log(key)
    for(let i = 0; i < this.toDo.length;i++){
      if(this.toDo[i].key == key){
        this.toDo.splice(i, 1);
        break;
      }
    } 
  }

  doReorder(ev) {
    ev.detail.complete();
  }
}
