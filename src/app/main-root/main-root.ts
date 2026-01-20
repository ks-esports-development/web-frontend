import { Component } from '@angular/core';
import {WebSite} from './web-site/web-site';

@Component({
  selector: 'app-main-root',
  imports: [
    WebSite
  ],
  templateUrl: './main-root.html',
  styleUrl: './main-root.scss',
})
export class MainRoot {

}
