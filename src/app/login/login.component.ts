import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('scientist@university.com'),
    password: new FormControl('password123'),
  });

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value);
  }

  isValid() {
    return !this.loginForm.valid;
  }
}
