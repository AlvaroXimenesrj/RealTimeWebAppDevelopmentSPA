import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  private code: string = ''
  public resetConfirm: FormGroup

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _fb: FormBuilder
  ) {
    this.resetConfirm = _fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: [''],
      code: ['']
    }
    )
  }

  ngOnInit(): void {
    this._route.queryParams.subscribe(params => {
      this.code = params['code'];
    });

    console.log(this.code?.length > 0)

    if (!(this.code?.length > 0)) {
      this._router.navigateByUrl('main');
    }

  }

  public Submit() {
    console.log(this.resetConfirm.valid)
  }

}

