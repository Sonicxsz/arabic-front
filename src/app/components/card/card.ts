import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Text, Button } from "@ui";
import { Word } from 'app/interface/word';

@Component({
  selector: 'app-card',
  imports: [Text, Button],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  @Input() dataWord!: Word
  
  @Output() onOptionSelect = new EventEmitter<{
    variant: string,
    id: number
  }>();

  selectOption(variant: string, id: number) {
    this.onOptionSelect.emit({variant, id})
  }
}
