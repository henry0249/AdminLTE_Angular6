import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { LockscreenComponent } from '../lockscreen/lockscreen.component';
import { PageNotFoundPageComponent } from '../page-not-found-page/page-not-found-page.component';
import { ErrorPageComponent } from '../error-page/error-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/theme', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'lock-screen', component: LockscreenComponent },
  { path: 'page-not-found', component: PageNotFoundPageComponent },
  { path: 'error-page', component: ErrorPageComponent },
  { path: 'theme', loadChildren: '../theme/theme.module#ThemeModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
