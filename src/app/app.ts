import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { CriptoComponent } from './cripto-component/cripto-component';
import { BitcoinComponent } from './bitcoin-component/bitcoin-component';
import { EthereumComponent } from './ethereum-component/ethereum-component';

@Component({
  imports: [RouterOutlet, CriptoComponent, RouterLinkWithHref, BitcoinComponent, EthereumComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('cripto_ariketa');
}
