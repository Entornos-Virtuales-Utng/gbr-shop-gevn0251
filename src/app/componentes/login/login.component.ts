import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showPassword = false;


  loginForma = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)]]
  });

  constructor(private fb: FormBuilder) {

  }

  get email() {
    return this.loginForma.controls['email'];
  }

  get password() {
    return this.loginForma.controls['password'];
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
