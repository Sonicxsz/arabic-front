import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { LearningPage } from './pages/learning-page/learning-page';
import { UserProfilePage } from './pages/user-profile-page/user-profile-page';
import { Layout } from './components/layout/layout';
import { ROUTES } from './constants/routes';

export const routes: Routes = [
    {
        path: '', component: Layout, children: [
            {path: ROUTES.MainPage, component: MainPage},
            {path: ROUTES.UserProfile, component: UserProfilePage},
            {path: ROUTES.LearningPage, component: LearningPage},
        ]
    }
];


