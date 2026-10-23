import { Component, AfterViewInit, OnDestroy, ViewChild, Input } from '@angular/core';


@Component({
  selector: 'app-chart-component',
  standalone: true,
  imports: [],
  templateUrl: './chart-component.html',
})
export class AppChart  {
  @Input() data: any = null;

  grafikoDatuak: any[] = this.chartDatuak()

  chartDatuak(): any[] {
    let data2 = this.data.prices
    let array: any[] = []
    data2.forEach((element: { t: any; eur: any; }) => {
      array.push([element.t, element.eur])
    });
    return array
  }


  
}