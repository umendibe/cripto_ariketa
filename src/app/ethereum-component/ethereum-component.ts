import { Component } from '@angular/core';
import { CriptoComponent } from '../cripto-component/cripto-component';

@Component({
  imports: [CriptoComponent],
  selector: 'app-ethereum-component',
  styleUrl: './ethereum-component.css',
  templateUrl: './ethereum-component.html',
})
export class EthereumComponent {}
