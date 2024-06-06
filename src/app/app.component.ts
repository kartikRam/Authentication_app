import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

// Importing necessary Angular modules and components for routing

@Component({
    // Selector to define how this component will be used in HTML
    selector: 'app-root',
    // Indicating that this component should be standalone
    standalone: true,
    // Template URL pointing to the HTML template file for this component
    templateUrl: './app.component.html',
    // Style URL pointing to the CSS file for this component
    styleUrl: './app.component.css',
    // Importing necessary Angular modules and components for routing
    imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive]
})
export class AppComponent {
    // Declaring a property named title and assigning it a value
    title = 'authentication';
}
