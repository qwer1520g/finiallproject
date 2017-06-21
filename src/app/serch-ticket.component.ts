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
  templateUrl: './serch-ticket.component.html',
  styleUrls: ['./serch-ticket.component.css'],
  providers: [HeroService],
})
export class SerchTicketComponent {
    constructor(private router: Router,
                private route: ActivatedRoute,
                private location: Location,
                private heroService: HeroService) { }
    @Input() hero: Hero;

    heroes: Hero[];
   informations:Imformation[];
    
    moviesits:Sit[];
   serDatechindex:number;
   serchSitindex:number;

   serchname:String;
   serchphone:String;

   cantserchname:String;
   cantserchphone:String;
      
    ngOnInit(): void {
        this.getImformations();
        
    }
      /*this.route.params.subscribe(params => {
        let jsonData = JSON.parse(params['params']);
        this.id = jsonData.id;
        this.moviename = jsonData.selectedmovie;
        this.movieurl=jsonData.selectedmovieurl;
        this.date=jsonData.selecteddate;
        this.time=jsonData.selectedtime;
       });*/
    
     getImformations(): void {
      this.heroService.getImformations().then(informations => this.informations = informations);

     }
    SerchName(name:String,phone:String):void{
      for(let i=0;i<this.informations.length;i++){
        for(let j=0;j<this.informations[i].name.length;j++){
          if(this.informations[i].name[j]===name){
              this.serDatechindex=i;
              this.serchSitindex=j;
              this.cantserchname="yes";
          }
          
          
          if(this.informations[i].phone[j]===phone){
              this.serDatechindex=i;
              this.serchSitindex=j;
              this.cantserchphone="yes";
          }
           if(this.informations[i].phone[j]!==phone ||this.informations[i].name[j]!==name){
              this.cantserchphone="no";
              this.cantserchname="no";
          }      
        } 
      } 
    }
    

  
}