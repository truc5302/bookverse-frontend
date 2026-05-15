import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
    },
    {
        path:'home',
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
    },
    {
        path:'book/:id',
        loadComponent: () => import('./pages/book-detail/book-detail').then(m => m.BookDetail)
    },
    {
        path:'**',
        redirectTo:'/home'
    }
];
