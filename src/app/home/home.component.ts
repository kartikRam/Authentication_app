// Importing necessary module from Angular core
import { Component } from '@angular/core';

// Component decorator specifying metadata for the component
@Component({
  // Selector to define how this component will be used in HTML
  selector: 'app-home',
  // Indicating that this component should be standalone
  standalone: true,
  // No imports needed in this case
  imports: [],
  // Template URL pointing to the HTML template file for this component
  templateUrl: './home.component.html',
  // Style URL pointing to the CSS file for this component
  styleUrl: './home.component.css'
})

// Exporting the HomeComponent class
export class HomeComponent {

}
