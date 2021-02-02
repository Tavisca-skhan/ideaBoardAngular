import { Component, Input, OnInit } from '@angular/core';
import { ICard } from '../model/card';
import { CardService } from '../service/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(private cardService: CardService) {}
  @Input() public card: ICard;

  ngOnInit(): void {}

  editCard(cardId: number) {

    var notes = prompt('enter the name',this.card.notes) ?? 'Default';

    this.cardService.updateCard(cardId, notes);
  }

  deleteCard(cardId: number) {
    

    this.cardService.deleteCard(cardId);
  }
  likeCard(cardId: number) {
    
    this.cardService.updateLikes(cardId);
  }


}
