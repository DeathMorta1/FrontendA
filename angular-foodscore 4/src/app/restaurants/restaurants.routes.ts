import { Routes } from "@angular/router";
import { leavePageGuardGuard } from "../shared/guards/leave-page-guard.guard";
import { numericIdGuardGuard } from "../shared/guards/numeric-id-guard.guard";

export const restaurantsRoutes: Routes = [
    {
        path: '',
        loadComponent: ()=> import('./restaurants-page/restaurants-page.component').then(m => m.RestaurantsPageComponent)
    },
    //Guard Guard :D
    {
        path: 'add',
        canDeactivate: [leavePageGuardGuard],
        loadComponent: ()=> import('./restaurant-form/restaurant-form.component').then(m => m.RestaurantFormComponent)
    },
    {
        path: ':id',
        canActivate: [numericIdGuardGuard],
        loadComponent: ()=> import('./restaurant-details/restaurant-details.component').then(m => m.RestaurantDetailsComponent)
    },
];