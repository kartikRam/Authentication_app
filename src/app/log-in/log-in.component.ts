// Importing necessary modules from Angular core and Angular Material
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

// Component decorator specifying metadata for the component
@Component({
  // Selector to define how this component will be used in HTML
  selector: 'app-log-in',
  // Indicating that this component should be standalone
  standalone: true,
  // Importing necessary Angular modules and Angular Material modules for UI components
  imports: [MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule, CommonModule],
  // Template URL pointing to the HTML template file for this component
  templateUrl: './log-in.component.html',
  // Style URL pointing to the CSS file for this component
  styleUrl: './log-in.component.css'
})

// Exporting the LogInComponent class
export class LogInComponent {

  // Creating a form group for validation
  ValidationForm = new FormGroup({
    'email': new FormControl('', [Validators.required]),
    'password': new FormControl('', [Validators.required])
  });

  // Constructor injecting AuthService and Router
  constructor(private auth: AuthService, private router: Router) { }

  // Function to handle form submission
  onSubmit() {
    console.log(this.ValidationForm.value);
    // Serializing form data to JSON
    var data = JSON.stringify(this.ValidationForm.value);
    // Calling AuthService method to login user
    this.auth.loginUser(data).subscribe((data) => {
      console.log(data);
      // Handling response from login attempt
      if (data.status == 200) {
        // Storing user details in local storage and navigating to home page
        localStorage.setItem('detail', JSON.stringify(data.userDetail));
        this.router.navigate(['/home']);
      } else {
        // Displaying alert for invalid credentials
        alert("Invalid Credentials");
      }
    });
  }
}
