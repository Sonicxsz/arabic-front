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
  
  @Output() onOptionSelect = new EventEmitter<string>();

  selectOption(variant: string) {
    this.onOptionSelect.emit(variant)
  }
}
