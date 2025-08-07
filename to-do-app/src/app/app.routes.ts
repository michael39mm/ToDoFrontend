import { Routes } from '@angular/router';
import { SelectEvent } from './select-event/select-event';
import { NextPage } from './next-page/next-page';
import { LoginCredentials } from './login-credentials/login-credentials';
import { loginGuard } from './login-guard';
import { SignInUp } from './sign-in-up/sign-in-up';
import { Register } from './register/register';

export const routes: Routes = [
  { path: '', component: SignInUp },
  { path: 'login', component: LoginCredentials},
  { path: 'SelectEvent', component: SelectEvent,canActivate: [loginGuard] },
  { path: 'nextPage', component: NextPage},
  { path: 'signUp', component: Register},
  
  
];
