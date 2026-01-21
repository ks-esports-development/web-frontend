import { Component } from '@angular/core';
import {Header} from "./components/header/header";

@Component({
  selector: 'app-web-site',
    imports: [
        Header
    ],
  templateUrl: './web-site.html',
  styleUrl: './web-site.scss',
})
export class WebSite {

}
