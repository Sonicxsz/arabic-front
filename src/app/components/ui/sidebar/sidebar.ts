import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SvgIcon } from '../svg-icon/svg-icon';
import { FormsModule } from '@angular/forms';
import { Text } from "../text/text";

@Component({
  selector: 'app-sidebar',
  imports: [FormsModule, RouterLink, SvgIcon, Text],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {

    menuItems = [
    {
      label: 'Главная страница',
      icon: 'main',
      link: ''    
    },
    {
      label: 'Пользователь',
      icon: 'profile',
      link: 'profile'    
    },
    {
      label: 'Обучение',
      icon: 'learning',
      link: 'learning'    
    }
  ]
}
