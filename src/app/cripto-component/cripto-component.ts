import { AfterViewInit, Component, Input, OnDestroy, OnInit, signal, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexStroke,
  ApexFill,
  ApexLegend,
  ApexTooltip,
  ApexMarkers,
  ApexPlotOptions,
  ApexResponsive,
  ApexGrid,
  ApexAnnotations,
  ApexStates,
  ApexTheme,
  NgApexchartsModule,
} from 'ng-apexcharts';


export type ChartOptions = {
  series?: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis | ApexYAxis[];
  title?: ApexTitleSubtitle;
  subtitle?: ApexTitleSubtitle;
  dataLabels?: ApexDataLabels;
  stroke?: ApexStroke;
  fill?: ApexFill;
  legend?: ApexLegend;
  tooltip?: ApexTooltip;
  markers?: ApexMarkers;
  plotOptions?: ApexPlotOptions;
  responsive?: ApexResponsive[];
  grid?: ApexGrid;
  annotations?: ApexAnnotations;
  states?: ApexStates;
  theme?: ApexTheme;
  colors?: string[];
  labels?: any;
};


@Component({
  selector: 'app-cripto-component',
  templateUrl: './cripto-component.html',
  styleUrl: './cripto-component.css',
  imports: [FormsModule, NgApexchartsModule],
  standalone: true
})

export class CriptoComponent implements AfterViewInit, OnDestroy, OnInit {
  @Input() coin: any = null;
  grafikoDatuak = signal<any[]>([]);

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.lortuInfo();
  }

  getInfo(): Observable<any> {
    const url = `http://apiostalaritza.lhusurbil.eus/crypto/${this.coin}?limit=30`;
    return this.http.get(url);
  }

  lortuInfo(): void {
    this.getInfo().subscribe({
      next: (res: any) => {
        this.grafikoDatuakEskuratu(res);
      },
      error: (err) => console.error('Errorea datuak lortzen:', err)
    });
  }


  grafikoDatuakEskuratu(res: any) {
    let data = res.prices
    var data2: any = [];
    data.forEach((element: { t: any; eur: any; }) => {
      data2.push([element.t, element.eur])
    });

    this.grafikoDatuak.set([
      {
        name: `Precio (${res.coin ? res.coin.toUpperCase() : 'EUR'})`,
        data: data2
      }
    ])




    //this.grafikoDatuak.set(data2);
  }

  private dataSeries: any = [
    {
      "x": 1791950400000,
      "y": 100
    },
    {
      "x": 1792050400000,
      "y": 45
    },
  ]

  chartOptions = signal<Partial<ChartOptions>>({
    series: [{
      name: 'Network Traffic',
      data: this.grafikoDatuak()
    }],
    chart: {
      type: 'area',
      stacked: false,
      height: 350,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: 'zoom',
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    title: {
      text: 'Stock Price Movement',
      align: 'left',
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      labels: {
        formatter: (val) => {
          return '$' + val
        },
      },
      title: {
        text: 'Price',
      },
    },
    xaxis: {
      type: 'datetime',
    },
  });




  public chartOptions2: Partial<ChartOptions> = {
    series: [
      {
        name: 'Meridian Motors',
        data: this.dataSeries,
      },
    ],
    chart: {
      type: 'area',
      stacked: false,
      height: 350,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: 'zoom',
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    title: {
      text: 'Stock Price Movement',
      align: 'left',
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      labels: {
        formatter: (val) => {
          return '$' + (val / 1000000).toFixed(0)
        },
      },
      title: {
        text: 'Price',
      },
    },
    xaxis: {
      type: 'datetime',
    },
  };


  ngAfterViewInit() {
    //(window as any).ApexCharts.setLicense('APEX-eyJleHBpcnlEYXRlIjoiMjEyNi0wNy0wNCIsImlzc3VlRGF0ZSI6IjIwMjYtMDctMjgiLCJwbGFuIjoicHJlbWl1bSIsImRvbWFpbnMiOlsiYXBleGNoYXJ0cy5jb20iLCIxMjcuMC4wLjEiLCJsb2NhbGhvc3QiXSwic2lnIjoieVBmb1VCc0Z3TU9ZdUEyaEZkR0I2Y1FtZ0JITUtXcVdJSjB2NVRESXRZbFR3eDJMUmh6R2x0RUc3VXJ4X0s3b25ZMWRZb2Z2VGItN01ydFYyNDVyOWcifQ==');
  }

  ngOnDestroy() {
    // no cleanup needed
  }



}