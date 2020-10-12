import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AppRoutePaths } from './app-routing.module';

import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
// ---> JIRA API TOKENS --> asU6t7zhiY1vZUpdV0WKA7FC
@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutePaths,
    SocialLoginModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('1066581375108-mc4did0t2rb3sr8qlqqlrjce1m1rvaf1.apps.googleusercontent.com')
          }
        ]
      } as SocialAuthServiceConfig
    },
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
