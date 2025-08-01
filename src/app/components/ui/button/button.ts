import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() size: 'xl' | 'l' = 'xl';
}


// Реализовать два варианта 'primary' | 'secondary'