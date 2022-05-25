import { Component, OnInit } from '@angular/core';
import { AreaService } from './widgets/area/areaService/area.service';
import { CardService } from './widgets/card/cardService/card.service';
import { PieService } from './widgets/pie/pieService/pie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart: any = [];
  cards: any = [];
  pieChart: any = [];

  constructor(
    private cardsService: CardService,
    private areaService: AreaService,
    private pieService: PieService,
  ) { }

  ngOnInit() {
      this.cards = this.cardsService.cards();
      this.bigChart = this.areaService.bigChart();
      this.pieChart = this.pieService.pieChart();
  }

}