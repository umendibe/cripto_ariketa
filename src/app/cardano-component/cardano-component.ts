import { Component } from '@angular/core';
import { CriptoComponent } from '../cripto-component/cripto-component';

@Component({
  imports: [CriptoComponent],
  selector: 'app-cardano-component',
  styleUrl: './cardano-component.css',
  templateUrl: './cardano-component.html',
})
export class CardanoComponent {}
