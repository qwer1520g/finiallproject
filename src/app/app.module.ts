
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { DashboardComponent }  from './dashboard.component';
import { BookticketComponent }  from './book-ticket.component';
import { OrderTicketComponent}  from './order-ticket.component';
import { EnterPersonalComponent}  from './enterpersonal.component';
import { SerchTicketComponent}  from './serch-ticket.component';
import { Pipe, PipeTransform } from '@angular/core';
import { AppRoutingModule }    from './app-rooting.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    BookticketComponent,
    OrderTicketComponent,
    EnterPersonalComponent,
    SerchTicketComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
