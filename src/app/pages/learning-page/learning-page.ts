import { Component } from '@angular/core';
import { Word } from 'app/entities/word';
import { Text, Button } from '@ui';

@Component({
  selector: 'app-learning-page',
  imports: [Text, Button],
  templateUrl: './learning-page.html',
  styleUrl: './learning-page.scss'
})
export class LearningPage {
  words: Word[] = []
}
