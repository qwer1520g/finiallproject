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
  selector: 'my-oderticket',
  templateUrl: './order-ticket.component.html',
  styleUrls: ['./order-ticket.component.css'],
  providers: [HeroService],
})
export class OrderTicketComponent {
    constructor(private router: Router,
                private route: ActivatedRoute,
                private location: Location,
                private heroService: HeroService) { }
    @Input() hero: Hero;

    heroes: Hero[];
   
    
    moviesits:Sit[];
   
   selectedsits:moviereserve;
   information:Imformation;
    
    ngOnInit(): void {
      this.getSits();
      
       
      this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);

      this.route.params
      .switchMap((params: Params) => this.heroService.getReserve(+params['id'],params['moviedate'],params['movietime']))
      .subscribe(selectedsits => this.selectedsits = selectedsits);

      this.route.params
      .switchMap((params: Params) => this.heroService.getImformation(+params['id'],params['moviedate'],params['movietime']))
      .subscribe(information => this.information = information);
      /*this.route.params.subscribe(params => {
        let jsonData = JSON.parse(params['params']);
        this.id = jsonData.id;
        this.moviename = jsonData.selectedmovie;
        this.movieurl=jsonData.selectedmovieurl;
        this.date=jsonData.selecteddate;
        this.time=jsonData.selectedtime;
       });*/
    
    }
    cancel():void{
      //this.location.back();
      for(let i=0;i<this.moviesits[0].sits.length;i++){
        if(this.moviesits[0].sits[i]==="2"){
          this.moviesits[0].sits[i]="1";
        }
      }
      this.selectedsits.resersit.length=0;
      this.information.movieReserveSit.length=0;
      this.router.navigate(['/heroes']);
    }
    next():void{
       this.router.navigate(['/enterimform', this.hero.id,this.selectedsits.moviedate,this.selectedsits.movietime]);
    }
    
    getSits(): void {
    this.heroService.getSits().then(moviesits => this.moviesits = moviesits);
  }
  
    cansit(cnst:String):String{
      let cn="1";
      let cn2="2";
      if(cnst===cn){
        return "1";
      }
      if(cnst===cn2){
        return "2"
      }
      
      else{
        return "0";
      }
    }
    storeSits(i:number):boolean{
      
      if(this.selectedsits.resersit.length>=4){alert("最多只能選擇四個位置");return false;}
      else{this.selectedsits.resersit.push(this.moviesits[0].sitnumber[i]);
            this.information.movieReserveSit.push(this.moviesits[0].sitnumber[i]);
          this.moviesits[0].sits[i]="2";
          return true;
      }
    }
  
}