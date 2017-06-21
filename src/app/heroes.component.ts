import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]          //告訴Angular，創建appcomponent時，建立一個HeroService的實例

   

})
export class HeroesComponent  {
  //title = 'Tour of Heroes';
  //heroes = HEROES;
  selectedHero: Hero;
  heroes: Hero[];
  
  constructor(private router: Router,
              private heroService: HeroService) { } //讓Angular知道，在創建時AppComponent時，提供一個HeroService的實例

  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}