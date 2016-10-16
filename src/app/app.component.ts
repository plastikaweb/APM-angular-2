import { Component } from '@angular/core';
import {ProductService} from './products/product.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ProductService]
})
export class AppComponent {
  title: string = 'Acme Product Management';
}
