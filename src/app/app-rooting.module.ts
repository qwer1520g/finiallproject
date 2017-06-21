import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { BookticketComponent }  from './book-ticket.component';
import { OrderTicketComponent}  from './order-ticket.component';
import { EnterPersonalComponent}  from './enterpersonal.component';
import { SerchTicketComponent}  from './serch-ticket.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'bookticket/:id', component: BookticketComponent },
  { path: 'ordertticket/:id/:moviedate/:movietime',component:OrderTicketComponent},
  { path: 'enterimform/:id/:moviedate/:movietime',component:EnterPersonalComponent},
  { path: 'serchticket',component:SerchTicketComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}