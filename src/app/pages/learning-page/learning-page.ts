import { Component, Input } from '@angular/core';
import { Card } from "./card/card";

@Component({
  selector: 'app-learning-page',
  imports: [Card],
  templateUrl: './learning-page.html',
  styleUrl: './learning-page.scss'
})
export class LearningPage {
  cardVariantClick(message: string) {
    console.log(`Ввариант ${message}`);
  }
}
