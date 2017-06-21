import { Component,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './hero.service';
import { Hero } from './hero';
import {Sit}  from './sit';
import { BookticketComponent } from './book-ticket.component';
import { MovieDate } from './moviedate';
import { moviereserve } from './moviereserved';
import { Imformation } from './imformation';


@Component({
  selector: 'my-enterpersonal',
  templateUrl: './enterpersonal.component.html',
  styleUrls: ['./enterpersonal.component.css'],
  providers: [HeroService],
})
export class EnterPersonalComponent {
    constructor(private router: Router,
                private route: ActivatedRoute,
                private location: Location,
                private heroService: HeroService) { }
    @Input() hero: Hero;
   
   selectedsits:moviereserve;
   information:Imformation;
    
    ngOnInit(): void {
      
       
      this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);

      this.route.params
      .switchMap((params: Params) => this.heroService.getReserve(+params['id'],params['moviedate'],params['movietime']))
      .subscribe(selectedsits => this.selectedsits = selectedsits);

      this.route.params
      .switchMap((params: Params) => this.heroService.getImformation(+params['id'],params['moviedate'],params['movietime']))
      .subscribe(information => this.information = information);
      
    }
    confirm():void{

        alert("訂票完成 如需查詢請按左上角查詢");

      this.router.navigate(['/heroes']);
    }
      
}