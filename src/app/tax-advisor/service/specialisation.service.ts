import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialisationService {

  constructor() { }
  specialisationList() {
    return [
      {
        id: 1,
        value: "Corporate Tax compliance & advisory"
      },
      {
        id: 2,
        value: "Company/Start-up incorporation"
      },
      {
        id: 3,
        value: "Tax strategy advisory"
      },
      {
        id: 4,
        value: "Transfer pricing"
      },
      {
        id: 5,
        value: "International Tax"
      },
      {
        id: 6,
        value: "Goods and Service Tax compliance & advisory"
      },
      {
        id: 7,
        value: "Investment planning"
      },
      {
        id: 8,
        value: "Retirement planning"
      },
      {
        id: 9,
        value: "Insurance planning"
      },
      {
        id: 10,
        value: "Income Tax filing"
      },
      {
        id: 11,
        value: "NRI tax advisory and compliance"
      },
      {
        id: 12,
        value: "HNI Compliance services and advisory services"
      },
      {
        id: 13,
        value: "Family business restructuring"
      },
      {
        id: 14,
        value: "Succession and Estate planning"
      },
     
    ]
  }
}
