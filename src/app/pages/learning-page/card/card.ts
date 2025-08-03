import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Text, Button } from "@ui";

@Component({
  selector: 'app-card',
  imports: [Text, Button],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  @Output() uppCardEventClick = new EventEmitter<string>();

  cardVariantClick(name: string) {
    this.uppCardEventClick.emit(name)
  }

  options: {name:string}[] = [
    {name: "1"}, {name:'2'}, {name:"3"}
  ]
}
