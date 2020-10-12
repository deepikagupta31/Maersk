import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { trigger, state, style, transition, animate } from '@angular/animations';

import { SocialAuthService , GoogleLoginProvider, SocialUser} from 'angularx-social-login'
import { inspectNativeElement } from '@angular/platform-browser/src/dom/debug/ng_probe';

import {AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('animateSplash', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        transform: 'scale(3.5)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class AppComponent {
  title = 'MetricsAngular';
  public isSplashscreen: boolean = true;
  public user: SocialUser;
  public loggedIn: boolean;
  public playerstate: string = 'inactive';
  public username: AbstractControl;
  public password: AbstractControl;
  public myForm: FormGroup;

  constructor(private router: Router,
              private authService: SocialAuthService,
              private formbuilder: FormBuilder) {
    
                setInterval(() => this.playerstate==='inactive' ? this.playerstate = 'active' : this.playerstate = 'inactive', 500);
    if (this.isSplashscreen) {
      setTimeout(() => this.isSplashscreen = false , 3000);
    }

    this.myForm = this.formbuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    })

    this.username = this.myForm.controls['username'];
    this.password = this.myForm.controls['password'];
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user !== null);
      console.log("USER INFO", user);
    })
  }

  public signInWithGoogle() : void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  public onSubmit() {
    console.log('Submit clicked --');
    this.router.navigate(['/submit']);
  }
  public signout() : void {
    this.authService.signOut();
  }

  public onSubmitClick(value : string) : void {
    console.log("You have submited: ", value);
  }
}
