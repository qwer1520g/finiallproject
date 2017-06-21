import { Component,Input ,OnInit} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { MovieDate } from './moviedate';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'my-bookticket',
  templateUrl: './book-ticket.component.html',
  providers: [HeroService],
  styleUrls: ['./book-ticket.component.css'],
})
export class BookticketComponent implements OnInit {
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,
    ){}
    selectedHero: Hero;
    heroes: Hero[];
    

    movies:MovieDate[];
    @Input() hero: Hero;
     movie:MovieDate;
     

    getHeroes(): void {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
     
    getTimes(): void {
      this.heroService.getTimes().then(movies => this.movies = movies);
    }
    ngOnInit(): void {
      this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
      

      this.route.params
      .switchMap((params: Params) => this.heroService.getTime(+params['id']))
      .subscribe(movie => this.movie = movie);
      
    }
    goBack(): void {
       this.router.navigate(['/heroes']);
    }
    selectTime(date:String,time:String):void{
     
        //this.router.navigate(['/ordertticket',{params: JSON.stringify(pa) }]);
        this.router.navigate(['/ordertticket', this.hero.id,date,time]);
    }
 }
 
