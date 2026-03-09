import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Login} from './login/login';
import {Home} from './home/home';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Home, MatButton, MatIcon, MatToolbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('travelbook-frontend');
  protected isLoggedIn: boolean = false;
}
