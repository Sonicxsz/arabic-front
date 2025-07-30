import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Routes {
  ROUTES = {
    MainPage: '',
    UserProfile: 'profile',
    LearningPage: 'learning'
  } as const 
}
