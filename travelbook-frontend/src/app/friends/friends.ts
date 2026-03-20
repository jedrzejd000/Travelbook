import { Component } from '@angular/core';
import { MatNavList } from '@angular/material/list';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatAnchor } from '@angular/material/button';
import { MatButtonToggleGroup, MatButtonToggle } from '@angular/material/button-toggle';
import { MatDrawerContainer } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [
    MatNavList,
    MatCard,
    MatIcon,
    MatCardContent,
    MatAnchor,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatDrawerContainer,
    CommonModule
],
  templateUrl: './friends.html',
  styleUrl: './friends.scss',
})
export class Friends {
  friends = [
    { name: 'Jan Kowalski' },
    { name: 'Anna Nowak' },
    { name: 'Marek Kwiatkowski' },
    { name: 'Piotr Zieliński' },
    { name: 'Katarzyna Murawska' },
     { name: 'Marek Kwiatkowski' },
    { name: 'Piotr Zieliński' },
     { name: 'Marek Kwiatkowski' },
    { name: 'Piotr Zieliński' },
     { name: 'Marek Kwiatkowski' },
    { name: 'Piotr Zieliński' },
  ];
}
