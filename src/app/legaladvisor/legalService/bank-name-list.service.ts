import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankNameListService {

  constructor() { }

  
  bankNameList() {
    return [
      {
        id: 0,
        name: 'ALLAHABAD BANK'
      }, {
        id: 1,
        name: 'ANDHRA BANK'
      }, {
        id: 2,
        name: "AXIS BANK"
      }, {
        id: 3,
        name: 'STATE BANK OF INDIA'
      }, {
        id: 4,
        name: 'BANK OF BARODA'
      }, {
        id: 5,
        name: 'UCO BANK'
      }, {
        id: 6,
        name: 'UNION BANK OF INDIA'
      }, {
        id: 7,
        name: 'BANK OF INDIA'
      }, {
        id: 8,
        name: 'BANDHAN BANK LIMITED'
      }, {
        id: 9,
        name: 'CANARA BANK'
      }, {
        id: 10,
        name: 'GRAMIN VIKASH BANK'
      }, {
        id: 11,
        name: 'CORPORATION BANK'
      }, {
        id: 12,
        name: 'INDIAN BANK'
      }, {
        id: 13,
        name: 'INDIAN OVERSEAS BANK'
      }, {
        id: 14,
        name: 'ORIENTAL BANK OF COMMERCE'
      }, {
        id: 15,
        name: 'PUNJAB AND SIND BANK'
      }, {
        id: 16,
        name: 'PUNJAB NATIONAL BANK'
      }, {
        id: 17,
        name: 'RESERVE BANK OF INDIA'
      }, {
        id: 18,
        name: 'SOUTH INDIAN BANK'
      }, {
        id: 19,
        name: 'UNITED BANK OF INDIA'
      }, {
        id: 20,
        name: 'CENTRAL BANK OF INDIA'
      }, {
        id: 21,
        name: 'VIJAYA BANK'
      }, {
        id: 22,
        name: 'DENA BANK'
      }, {
        id: 23,
        name: 'BHARATIYA MAHILA BANK LIMITED'
      }, {
        id: 24,
        name: 'FEDERAL BANK LTD '
      }, {
        id: 25,
        name: 'HDFC BANK LTD'
      }, {
        id: 26,
        name: 'ICICI BANK LTD'
      }, {
        id: 27,
        name: 'IDBI BANK LTD'
      }, {
        id: 28,
        name: 'PAYTM BANK'
      }, {
        id: 29,
        name: 'FINO PAYMENT BANK'
      }, {
        id: 30,
        name: 'INDUSIND BANK LTD'
      }, {
        id: 31,
        name: 'KARNATAKA BANK LTD'
      }
    ]
  }

}
