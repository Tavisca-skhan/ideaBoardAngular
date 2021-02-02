import { Component, OnInit } from '@angular/core';
import { ICard } from '../model/card';
import { CardService } from '../service/card.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  cards: ICard[];

  constructor(private cardService : CardService) { }

  ngOnInit(): void {

    this.cardService.cardEvent.subscribe((cards: ICard[]) => {
      this.cards = cards;
         });

  }

  addCard(tileId : string)
  {
    var notes = prompt('enter the name') ?? 'Default';
    this.cardService.createCard(tileId,notes);

  }

}
