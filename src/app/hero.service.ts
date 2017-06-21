import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { MovieDate } from './moviedate';
import {Sit}    from './sit';
import{Imformation} from './imformation';
import {moviereserve} from './moviereserved';


import { HEROES } from './mock-heroes';
import { MOVIES } from './mock-moviedate';
import {MOVIESITS}    from './mock-sits';
import {MOVIERESERVE}    from './mock-reserve';
import{IMFORMATION} from './mock-imformation';



@Injectable()
export class HeroService {
   getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  
  }
  getHero(id: number): Promise<Hero> {
        return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
  }

  getTimes(): Promise<MovieDate[]> {
    return Promise.resolve(MOVIES);
  
  }
  getTime(id: number): Promise<MovieDate> {
        return this.getTimes()
             .then(moviedate => moviedate.find(movie => movie.id === id));
  }

  getSits(): Promise<Sit[]>{
      return Promise.resolve(MOVIESITS);
  }


  getReserves(): Promise<moviereserve[]>{
      return Promise.resolve(MOVIERESERVE);
  }
  getReserve(id:number,moviedate:String,movietime:String):Promise<moviereserve>{
    return this.getReserves()
      .then(moviesreserve=>moviesreserve.find(movierese=>(movierese.id===id)&&(movierese.moviedate===moviedate)&&(movierese.movietime===movietime)))
  }

  getImformations(): Promise<Imformation[]>{
      return Promise.resolve(IMFORMATION);
  }
  getImformation(id:number,moviedate:String,movietime:String):Promise<Imformation>{
    return this.getImformations()
      .then(moviesreserve=>moviesreserve.find(movierese=>(movierese.id===id)&&(movierese.moviedate===moviedate)&&(movierese.movietime===movietime)))
  }

}
