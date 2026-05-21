import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page';
import { StudentsPage } from './features/students/pages/students-page/students-page';
import { StudentDetailPage } from './features/students/pages/student-detail-page/student-detail-page';
import { LayoutsPage } from './features/layouts-page/layouts-page';
import { SingupPage } from './features/singup-page/singup-page';
import { ProfilePage } from './features/profile-page/profile-page';
import { ProjectConfigPage } from './features/project/pages/project-config-page/project-config-page';
import { UiComponentsPage } from './features/ui-components-page/ui-components-page';
import { SimpsonsPage } from './features/simpsons/pages/simpsons-page/simpsons-page';
import { SimpsonDetailPage } from './features/simpsons/pages/simpson-detail-page/simpson-detail-page';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'students', component: StudentsPage },
    { path: 'students/:id', component: StudentDetailPage },
    { path: 'layouts', component: LayoutsPage },
    { path: 'forms', component: SingupPage },
    { path: 'profile', component: ProfilePage },
    { path: 'project-config', component: ProjectConfigPage },
    { path: 'ui-components', component: UiComponentsPage },
    {
        path: 'simpsons',
        component: SimpsonsPage,
    },
    {
        path: 'simpsons/:id',
        component: SimpsonDetailPage,
    },

    //redireccionamient
    { path: '**', redirectTo: '' }
];
