import { Component, Input } from '@angular/core';
import { Card } from "../../components/card/card";
import { dataWords } from "../../constants/mocks.cards";

@Component({
  selector: 'app-learning-page',
  imports: [Card],
  templateUrl: './learning-page.html',
  styleUrl: './learning-page.scss'
})
export class LearningPage {
  @Input() dataWords = dataWords

  handleSelectOption({variant, id}:{variant:string, id: number}){
    const finded = dataWords.find(el => el.id === id)
    if(!finded) return
    if(finded.russian === variant){
      console.log('Верно');
    }else{
      console.log('dfgfdg');
    }
  }
}
