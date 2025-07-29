import { Component } from '@angular/core';
import { Text } from '@ui';


@Component({
  selector: 'app-main-page',
  imports: [ Text ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage {


  sayHello(){
    console.log('hello')
  }
}
