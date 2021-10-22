import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

const routes:Routes=[
  {path:'',component:LoginComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:ErrorComponent}
];
@NgModule({

  imports: [
    RouterModule.forRoot([])
  ],
  exports: [
    RouterModule,
  ],


})
export class AppRoutingModule {}


