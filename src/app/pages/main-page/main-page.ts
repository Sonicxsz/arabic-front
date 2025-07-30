import { Component } from '@angular/core';
import { Text } from '@ui';
import { Button } from "../../components/ui/button/button";


@Component({
  selector: 'app-main-page',
  imports: [Text, Button],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage {


  sayHello(){
    console.log('hello')
  }
}
