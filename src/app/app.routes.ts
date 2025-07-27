import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import {ROUTES} from './constants/routes'
import { LearningPage } from './pages/learning-page/learning-page';
import { UserProfilePage } from './pages/user-profile-page/user-profile-page';
export const routes: Routes = [
    {
    path: ROUTES.MainPage,
    component: MainPage,
    },
    {
    path: ROUTES.LearningPage,
    component: LearningPage,
    },
    {
    path: ROUTES.UserProfile,
    component: UserProfilePage,
    },
];


