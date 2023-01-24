import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AreaOfPraticeListService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAreaOfPratice():Observable<any>{
    return this.httpClient.get(environment.apiUrl + '/api/get/areaofpractice')
  }

}
  
  // areaOfPraticeList() {
  //   return [
  //     {
  //       id: 1,
  //       name: "Matrimonial Family Disputes"
  //     },
  //     {
  //       id: 2,
  //       name: "Civil Disputes"
  //     },
  //     {
  //       id: 3,
  //       name: "Marriage Registration"
  //     },
  //     {
  //       id: 4,
  //       name: "Consumer Disputes"
  //     },
  //     {
  //       id: 5,
  //       name: "Criminal Disputes"
  //     },
  //     {
  //       id: 6,
  //       name: "Women/Child Sexual Abuse"
  //     },
  //     {
  //       id: 7,
  //       name: "Property Disputes"
  //     },
  //     {
  //       id: 8,
  //       name: "RERA Builder Disputes"
  //     },
  //     {
  //       id: 9,
  //       name: "MCD Revenue Disputes"
  //     },
  //     {
  //       id: 10,
  //       name: "Supreme Court High Courts"
  //     },
  //     {
  //       id: 11,
  //       name: "Negotiable Instrument Act"
  //     },
  //     {
  //       id: 12,
  //       name: "MACT/Insurance Claim"
  //     },
  //     {
  //       id: 13,
  //       name: "Corporate Litigation"
  //     },
  //     {
  //       id: 14,
  //       name: "Arbitration & Mediation,"
  //     },
  //     {
  //       id: 15,
  //       name: "Central Administrative Tribunal (CAT)"
  //     },
  //     {
  //       id: 16,
  //       name: "Customs and Central Excise"
  //     },
  //     {
  //       id: 17,
  //       name: "IPR"
  //     },
  //   ]
  // }

