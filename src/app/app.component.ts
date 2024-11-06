import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DropdownComponent} from "./example-components/dropdown/dropdown.component";
import {DropdownAdvancedComponent} from "./example-components/dropdown-advanced/dropdown-advanced.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DropdownComponent, DropdownAdvancedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-animations-intro';
}
