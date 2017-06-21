import { Component ,Input,OnInit} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';
import { DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ],
})

export class HeroDetailComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private sanitizer: DomSanitizer,
  ) {}  
  
    
    @Input() hero: Hero;
    
    ngOnInit(): void {
      this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
      
    }
    goBack(): void {
      this.router.navigate(['/heroes']);
    }
    book(): void{
      this.router.navigate(['/bookticket', this.hero.id]);
    }
    
    getlevel(): boolean{
      let level='保護級';
      let herolevel =this.hero.level;
      if (herolevel==level){return true;}
      return false;  
    }
}