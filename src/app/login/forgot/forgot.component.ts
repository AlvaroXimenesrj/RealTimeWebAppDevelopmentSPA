import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  public forgotPasswordform: FormGroup
  public disabledbutton = false
  constructor(
    private _fb: FormBuilder,
    private _http: HttpClient,
    private _router: Router
  ) {
    this.forgotPasswordform = this._fb.group({
      email:['',[Validators.required,Validators.email]]
    })
   }

  ngOnInit(): void {
  }

  public Send(){

    if(this.forgotPasswordform.valid){
      this.disabledbutton = true

      this._http.post(``,{})
      .subscribe({
        next:(resp:any) =>{
          const navigationExtras: NavigationExtras = { state: { data: 'forgot' } };

         this._router.navigate(['main/forgot-email'], navigationExtras);

          //this._router.navigateByUrl('main/forgot-email');
        },
        error: (resp:any) => {
          this.disabledbutton = false
          const navigationExtras: NavigationExtras = { state: { data: 'forgot' } };

         this._router.navigate(['main/forgot-email'], navigationExtras);
        }
      })

    }

  }

}
