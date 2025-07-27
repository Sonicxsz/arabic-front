import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-text',
  imports: [],
  templateUrl: './text.html',
  styleUrl: './text.scss'
})
export class Text {
  @Input() size: 'XL' | 'L' | 'S' = "S"

  

}
