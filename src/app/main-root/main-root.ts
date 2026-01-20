import { Component } from '@angular/core';
import {Header} from './web-site/components/header/header';

@Component({
  selector: 'app-main-root',
  imports: [
    Header
  ],
  templateUrl: './main-root.html',
  styleUrl: './main-root.scss',
})
export class MainRoot {

}
