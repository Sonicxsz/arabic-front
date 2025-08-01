import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  imports: [],
  standalone: true,
  templateUrl: './text.html',
  styleUrl: './text.scss'
})
export class Text {
  @Input() size: 'xl' | 'l' | 'm' | 's' | 'xs' = "m"
  @Input() color: 'primary' | 'secondary' | 'warning' | 'error' | 'light' = "primary"
  @Input() weight: 'bold' | 'semibold' | 'regular' | 'light' = "regular"
}
