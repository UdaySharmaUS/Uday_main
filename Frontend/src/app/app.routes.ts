import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './MyComponents/card/card.component';
import { CardDetailComponent } from './MyComponents/card-detail/card-detail.component';
import { Route404Component } from './MyComponents/404/404.component';

export const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'compound-detail/:cid', component: CardDetailComponent },
  { path: '**', component: Route404Component },
];
