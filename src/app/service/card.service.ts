import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICard } from '../model/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
     cardId : number = 0;
     cards : ICard[] = [];

  constructor() { }

  public cardEvent = new Subject<ICard[]>();

  createCard(tileId : string,notes:string)
  {
    this.cardId += 1;
     
    this.cards.push({id:this.cardId,tileId:tileId,notes:notes,likes:0});
    this.cardEvent.next(this.cards);

  }
  updateCard(cardId : number, notes :string)
  {
    var index = this.cards.findIndex((x) => x.id == cardId)
    var index = this.cards.findIndex(x=>x.id === cardId);
    this.cards[index].notes=notes;
    this.cardEvent.next(this.cards);
  }
  deleteCard(cardId :number)
  {
    var index = this.cards.findIndex((x) => x.id == cardId)
    //var index = this.cards.findIndex(x=>x.id === cardId);
    this.cards.splice(index,1);
    this.cardEvent.next(this.cards);
  }
  updateLikes(cardId : number)
  {
    var index = this.cards.findIndex((x) => x.id == cardId)
    //var index = this.cards.findIndex(x=>x.id == cardId);
    this.cards[index].likes +=1;
    this.cardEvent.next(this.cards);
  }
}
