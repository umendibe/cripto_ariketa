import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CriptoComponent } from './cripto-component/cripto-component';

@Component({
  imports: [RouterOutlet, CriptoComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('cripto_ariketa');
}
