import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { LearningPage } from './pages/learning-page/learning-page';
import { UserProfilePage } from './pages/user-profile-page/user-profile-page';
import { Layout } from './components/ui/layout/layout';
export const routes: Routes = [
    {
        path: '', component: Layout, children: [
            {path: '', component: MainPage},
            {path: 'profile', component: UserProfilePage},
            {path: 'learning', component: LearningPage},
        ]
    }
];


