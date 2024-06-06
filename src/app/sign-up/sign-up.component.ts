// Importing necessary modules from Angular core and router
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';

// Importing Angular Material modules for UI components
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule } from '@angular/material/radio';
import { FormControl, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { FloatLabelType, MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

// Importing AuthService for user registration
import { AuthService } from '../auth.service';

// Component decorator specifying metadata for the component
@Component({
  // Selector to define how this component will be used in HTML
  selector: 'app-sign-up',
  // Indicating that this component should be standalone
  standalone: true,
  // Importing necessary Angular modules and Angular Material modules for UI components
  imports: [RouterOutlet, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule,
    MatButtonModule, MatRadioModule, MatCheckboxModule, FormsModule, ReactiveFormsModule, CommonModule, MatDatepickerModule],
  // Template URL pointing to the HTML template file for this component
  templateUrl: './sign-up.component.html',
  // Providing a native date adapter
  providers: [provideNativeDateAdapter()],
  // Style URL pointing to the CSS file for this component
  styleUrl: './sign-up.component.css'
})

// Exporting the SignUpComponent class
export class SignUpComponent {

  // Constructor injecting AuthService and Router
  constructor(private auth: AuthService, private router: Router) { }

  // Creating a reactive form group with form controls
  reactiveForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    //dob: new FormControl('',  [Validators.required]),
    gender: new FormControl('male', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  // Function to handle form submission
  onSubmit() {
    if (this.reactiveForm.valid) {
      // If form is valid, proceed with registration
      const formValue = this.reactiveForm.value;
      console.log('Form Value:', formValue.address);
      var data = JSON.stringify(this.reactiveForm.value);
      // Calling AuthService method to register user
      this.auth.registerUser(data).subscribe((data) => {
        console.log(data);
        // Handling response from registration attempt
        if (data.status == 200) {
          alert("User Registered Successfully");
          this.router.navigate(['/Log-In']);
        } else if (data.status == 409) {
          alert("User Already Exists!!");
        } else {
          alert("Got some error!! Try again");
        }
      });
    } else {
      // If form is invalid, do nothing
    }
  }
}
