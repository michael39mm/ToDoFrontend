import { Routes } from '@angular/router';
import { SelectEvent } from './select-event/select-event';
import { NextPage } from './next-page/next-page';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  { path: '', component: SelectEvent },
  { path: 'nextPage', component: NextPage,canActivate : [authGuard] }
];
