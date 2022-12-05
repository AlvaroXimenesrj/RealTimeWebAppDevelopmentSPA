import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login: FormGroup
  public showInvalidForm = 'hidden'
  public disabledSavedButton = false
  private baseUrl = environment.baseUrl

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _fb: FormBuilder
  ) {
    this.login = _fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberMe: [false, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  Login() {

    if (this.login.valid) {
      this.showInvalidForm = 'hidden'
      this.disabledSavedButton = true

      this._http.post(`${this.baseUrl}account/login`, this.login.value,
        {


        })
        .subscribe({
          next: (resp: any) => {
            this.disabledSavedButton = false
            // redirect to dashboard
            this._router.navigateByUrl('dashboard');
          },
          error: (fail: any) => {
            this.disabledSavedButton = false
          }
        })
    } else {
      this.showInvalidForm = 'visible'
    }

  }

  get invalidemail() {

    if (this.showInvalidForm == 'visible' &&
      (this.login.get('email')?.errors?.['required'] ||
        this.login.get('email')?.errors?.['email'])) {

      return 'visible'

    } else {
      return 'hidden'
    }


  }

  get invalidPassword() {
    if (this.showInvalidForm == 'visible' &&
      (this.login.get('password')?.errors?.['required'] ||
        this.login.get('password')?.errors?.['password'])) {

      return 'visible'

    } else {
      return 'hidden'
    }
  }
}
