import { Component } from '@angular/core';
import {animate, group, keyframes, query, stagger, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-dropdown-advanced',
  standalone: true,
  imports: [],
  templateUrl: './dropdown-advanced.component.html',
  styleUrl: './dropdown-advanced.component.css',
  animations: [
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('toggleMenu', [
      // state() function defines the end result of the animation
      state('open', style({
        height: '*',
        opacity: 1,
      })),
      state('closed', style({
        height: 0,
        opacity: 0,
      })),
      transition('* => open', [
        // example of using keyframes for animation
        animate('.5s ease-in', keyframes([
          style({height: 0, opacity: 0, offset: 0}),
          style({height: '*', opacity: 1, offset: 1}),
        ])),
        // example of staggering the animation of children elements
        query('.list-item', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ]),
      transition('* => closed', [
        // example of grouping animations
        group([
          animate('1.2s ease-in', style({
            opacity: 0
          })),
          animate('.7s ease-out', keyframes([
            style({height: '*', opacity: 1, offset: 0}),
            style({height: 0, opacity: 0, offset: 1}),
          ])),
        ]),
      ]),
    ]),
  ],
})
export class DropdownAdvancedComponent {
  public menuState = 'closed';

  public toggleMenu() {
    this.menuState = this.menuState === 'closed' ? 'open' : 'closed';
  }
}
