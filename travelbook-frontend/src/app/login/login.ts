import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatDivider} from '@angular/material/list';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatChipTrailingIcon} from '@angular/material/chips';
import {MatIcon} from '@angular/material/icon';
import {NgOptimizedImage} from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [
    MatCardModule,
    MatDivider,
    MatFormField,
    MatLabel,
    MatButton,
    MatInput,
    MatChipTrailingIcon,
    MatIcon,
    NgOptimizedImage,
  ],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

}
