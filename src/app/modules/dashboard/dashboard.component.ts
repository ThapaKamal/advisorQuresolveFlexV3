import { Component, OnInit } from '@angular/core';
import { AreaDataService } from '../services/area-data.service';
import { CardsDataService } from '../services/cards-data.service';
import { PieDataService } from '../services/pie-data.service';

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
    private cardsService: CardsDataService,
    private areaService: AreaDataService,
    private pieService: PieDataService,
  ) { }

  ngOnInit() {
      this.cards = this.cardsService.cards();
      this.bigChart = this.areaService.bigChart();
      this.pieChart = this.pieService.pieChart();
  }

}
