// Importing necessary modules from Angular Router
import { Routes } from '@angular/router';

// Importing components for each route
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';

// Defining an array of route objects
export const routes: Routes = [
    // Route for the Sign-Up page, mapped to the SignUpComponent
    { path: 'Sign-Up', component: SignUpComponent },
    
    // Route for the Log-In page, mapped to the LogInComponent
    { path: 'Log-In', component: LogInComponent },
    
    // Route for the Home page, mapped to the HomeComponent
    { path: 'home', component: HomeComponent },
];
