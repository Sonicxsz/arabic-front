import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  @Input() btnClick: 'primary' | 'secondary' = 'primary'
}


// Реализовать два варианта 'primary' | 'secondary'