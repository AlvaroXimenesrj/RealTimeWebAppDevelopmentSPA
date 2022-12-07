import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password-confirmation',
  templateUrl: './reset-password-confirmation.component.html',
  styleUrls: ['./reset-password-confirmation.component.scss']
})
export class ResetPasswordConfirmationComponent implements OnInit {

  public data?: string;

  constructor(
    private _router: Router
  ) {
    const navigation = this._router.getCurrentNavigation();
    console.log(navigation?.extras['state'])
    if (navigation?.extras['state'] != undefined) {
      const state = navigation.extras.state as { data: string };
      this.data = state.data;
    }
  }

  ngOnInit(): void {
  }

}
