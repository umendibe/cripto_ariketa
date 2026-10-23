import { Component } from '@angular/core';
import { CriptoComponent } from '../cripto-component/cripto-component';


@Component({
  selector: 'app-bitcoin-component',
  standalone: true,
  imports: [CriptoComponent],
  templateUrl: './bitcoin-component.html',
})
export class BitcoinComponent  {
}