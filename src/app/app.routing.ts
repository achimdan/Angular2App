import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home/index';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home/home.component';
// import { RegisterComponent } from './register/index';

const appRoutes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);