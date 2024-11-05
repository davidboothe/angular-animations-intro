import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
  animations: [
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('toggleMenu', [
      // state() function defines the end result of the animation
      state('open', style({
        height: '200px',
        opacity: 1
      })),
      state('closed', style({
        height: '0px',
        opacity: 0
      })),
      // transition() function defines the transition between the states
      transition('open <=> closed', [
        animate('0.3s ease-in-out')
      ])
    ]),
  ],
})
export class DropdownComponent {
  public menuState = 'closed';

  public toggleMenu() {
    this.menuState = this.menuState === 'closed' ? 'open' : 'closed';
  }
}
