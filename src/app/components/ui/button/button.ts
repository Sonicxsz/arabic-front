import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  @Input() color: 'primary' | 'secondary' = 'primary';
  @Input() padding: 'l' | 'm' = 'l'
}


// Реализовать два варианта 'primary' | 'secondary'