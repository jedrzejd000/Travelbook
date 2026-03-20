import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatFormField, MatLabel} from '@angular/material/input';
import {MatButtonToggle} from '@angular/material/button-toggle';
import {MatButton} from '@angular/material/button';
import { Friends } from "../friends/friends";

@Component({
  selector: 'app-home',
  imports: [
    MatToolbar,
    MatIcon,
    MatDrawer,
    MatNavList,
    MatDrawerContainer,
    MatDrawerContent,
    MatCardHeader,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatButtonToggle,
    MatButton,
    MatListItem,
    Friends
],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
