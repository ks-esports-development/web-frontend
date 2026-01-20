import { Component } from '@angular/core';
import {MainRoot} from './main-root/main-root';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    MainRoot
  ],
  styleUrl: './app.scss'
})
export class App { }
