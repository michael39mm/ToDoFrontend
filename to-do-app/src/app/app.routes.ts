import { Routes } from '@angular/router';
import { SelectEvent } from './select-event/select-event';
import { NextPage } from './next-page/next-page';
import { LoginCredentials } from './login-credentials/login-credentials';
import { loginGuard } from './login-guard';

export const routes: Routes = [
  { path: '', component: LoginCredentials },
  { path: 'SelectEvent', component: SelectEvent ,canActivate: [loginGuard] },
  { path: 'nextPage', component: NextPage }
  
];
