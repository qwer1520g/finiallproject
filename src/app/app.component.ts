import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
     <h1 style="color:white">{{title}}</h1>
        <nav>
            <a routerLink="/dashboard" routerLinkActive="active">熱門電影</a>
            <a routerLink="/heroes" routerLinkActive="active">電影列表</a>
            <a routerLink="/serchticket" routerLinkActive="active">查詢場次</a>
        </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: [ './app.component.css' ],
})
export class AppComponent {
  title = '過期電影影城';
}