import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home/index';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home/home.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { ProductsComponent } from './home/products/products.component';
// import { RegisterComponent } from './register/index';

const appRoutes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    // { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'categories', component: CategoriesComponent},
    { path: 'products', component: ProductsComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);