import { Routes } from '@angular/router';
import { BitcoinComponent } from './bitcoin-component/bitcoin-component';
import { EthereumComponent } from './ethereum-component/ethereum-component';
import { CardanoComponent } from './cardano-component/cardano-component';

export const routes: Routes = [{
    path: 'bitcoin',
    component: BitcoinComponent,
},
{
    path: 'ethereum',
    component: EthereumComponent,
},
{
    path: 'cardano',
    component: CardanoComponent,
},
];
