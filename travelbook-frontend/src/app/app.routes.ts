import { Routes } from '@angular/router';
import { Friends } from './friends/friends';
import { Profile } from './profile/profile';

export const routes: Routes = [
  { path: 'friends', component: Friends },
  { path: 'profile', component: Profile },
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
];
