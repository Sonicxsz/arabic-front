import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SvgIcon } from '../svg-icon/svg-icon';
import { FormsModule } from '@angular/forms';
import { Text } from "../text/text";
import { Routes } from 'app/services/routes';

@Component({
  selector: 'app-sidebar',
  imports: [FormsModule, RouterLink, SvgIcon, Text],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  routes = inject(Routes)

  menuItems = [
    {
      label: 'Главная страница',
      icon: 'main',
      link: this.routes.ROUTES.MainPage    
    },
    {
      label: 'Пользователь',
      icon: 'profile',
      link: this.routes.ROUTES.UserProfile    
    },
    {
      label: 'Обучение',
      icon: 'learning',
      link: this.routes.ROUTES.LearningPage    
    }
  ]
}
