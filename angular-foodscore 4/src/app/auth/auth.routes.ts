import { Routes } from "@angular/router";

export const authsRoutes: Routes = [
    {
        path: 'login',
        loadComponent: ()=> import('./login/login.component').then(m => m.LoginComponent)
    }
];