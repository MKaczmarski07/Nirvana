import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, query, group, animate } from '@angular/animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('0 => 1, 0 => 2, 1 => 2', [ 
        style({ //on parent component
          height: '!', //height as at the end of the animation from the beginning 
          position: 'relative',
          display: 'block',
          overflow: 'hidden'
        }),
        query(':enter', style({
          transform: 'translateX(100%)',
          width: 'auto'
        })),
        query(':enter, :leave', style({
          height: '!',
          position: 'absolute',
          top: 0, left: 0, right: 0
        })),

        group([
          query(':leave', [
            animate('.4s cubic-bezier(.35,0,.25,1)', style({
              transform: 'translateX(-100%)'
            })),
          ]),
         
           query(':enter', animate('.4s cubic-bezier(.35,0,.25,1)', style({
             transform: 'translateX(0)'
           }))),
      ]), 


      ]),

      transition('2 => 1, 2 => 0, 1 => 0', [ 
      style({ 
        height: '!',  
        position: 'relative',
        display: 'block',
        overflow: 'hidden'
      }),
      query(':enter', style({
        transform: 'translateX(-100%)'
      })),
      query(':enter, :leave', style({
        position: 'absolute', top: 0, left: 0, right: 0
      })),

      group([
        query(':leave', [
          animate('0.4s cubic-bezier(.35,0,.25,1)', style({
            transform: 'translateX(100%)'         
          })),
        ]),
       
        query(':enter', animate('.4s cubic-bezier(.35,0,.25,1)', style({
          transform: 'translateX(0)'
         }))),
    ]),


    ])
      
    ])
  ]
})
export class AppComponent {
  title = 'planner';

  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) {
      return outlet.activatedRouteData['order'];
      
    }
    return outlet
  }
  
  
  
}
