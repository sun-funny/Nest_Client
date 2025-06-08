import {NgModule} from '@angular/core';
import {PreloadAllModules, Router, RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'tickets',
    loadChildren: () => import('./pages/tickets/tickets.module').then(m => m.TicketsModule),
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

/*  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.AuthModule),
  },*/