import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
} from '@angular/animations';
import { GetNameService } from './get-name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('0 => 1, 0 => 2, 1 => 2', [
        style({
          //on parent component
          height: '!', //height as at the end of the animation from the beginning
          position: 'relative',
          display: 'block',
          overflow: 'hidden',
        }),
        query(
          ':enter',
          style({
            transform: 'translateX(100%)',
            width: 'auto',
          })
        ),
        query(
          ':enter, :leave',
          style({
            height: '!',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
          })
        ),

        group([
          query(':leave', [
            animate(
              '.4s cubic-bezier(.35,0,.25,1)',
              style({
                transform: 'translateX(-100%)',
              })
            ),
          ]),

          query(
            ':enter',
            animate(
              '.4s cubic-bezier(.35,0,.25,1)',
              style({
                transform: 'translateX(0)',
              })
            )
          ),
        ]),
      ]),

      transition('2 => 1, 2 => 0, 1 => 0', [
        style({
          height: '!',
          position: 'relative',
          display: 'block',
          overflow: 'hidden',
        }),
        query(
          ':enter',
          style({
            transform: 'translateX(-100%)',
          })
        ),
        query(
          ':enter, :leave',
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
          })
        ),

        group([
          query(':leave', [
            animate(
              '0.4s cubic-bezier(.35,0,.25,1)',
              style({
                transform: 'translateX(100%)',
              })
            ),
          ]),

          query(
            ':enter',
            animate(
              '.4s cubic-bezier(.35,0,.25,1)',
              style({
                transform: 'translateX(0)',
              })
            )
          ),
        ]),
      ]),
    ]),
    trigger('toggleVisibility', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
    ]),
  ],
})
export class AppComponent {
  constructor(public getNameService: GetNameService) {}

  ngOnInit() {
    this.getNameService.getName();
  }

  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) {
      return outlet.activatedRouteData['order'];
    }
    return outlet;
  }
}
