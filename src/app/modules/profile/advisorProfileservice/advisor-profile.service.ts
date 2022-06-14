import { Injectable } from '@angular/core';
import { TypeOfAddressListService } from 'src/app/legaladvisor/legalService/type-of-address-list.service';

@Injectable({
  providedIn: 'root'
})
export class AdvisorProfileService {
  [x: string]: any;

  constructor(
    // private typeOfAddressListService: TypeOfAddressListService,
  ) {

  }
  advisorProfileList() {
    return [{
      receivedName: "Ankit Kumar",
      receivedEmail: 'ankitkumar6220@gmail.com',
      receivedPhone: 8851421261,
      receivedDoB: new Date('2020-09-28'),
      receivedGender: { id: '1', value: "Male" },
      receivedLanguage: { id: '1', value: "English" },

      receivedBaseCity: { id: 1, name: "Delhi" },
      receivedEnrollment: 'XYZ123',
      receivedLinkedinUrl: 'https://www.linkedin.com/in/ankit-kumar-2a6a501b3/',
      // receivedAreaofpractice: 'Matrimonial Family Disputes, Civil Disputes, Marriage Registration	',
      // receivedCourtOfPractice: 'Supreme Court, Delhi High court, Rajasthan HC',
      receivedYearsOfExp: { id: 1, name: "1 Years" },
      receivedBarMembership:{ id: 1, name: 'Bar council of Delhi'},
      receivedBarCouncilId: 'IMG_20210825_195320.jpg',

      accomplishments: [

        {
          receivedHeading: "22222",
          receivedDesc: "222"
        },
        {
          receivedHeading: "3333",
          receivedDesc: "33333"
        },
        {
          receivedHeading: "6",
          receivedDesc: "33366633"
        },
        {
          receivedHeading: "4",
          receivedDesc: "33366633"
        }
        ,
        {
          receivedHeading: "1",
          receivedDesc: "33366633"
        }
      ],


      clients: [
        {
          "receivedMajorClient": "Ankit"
        },
        {
          "receivedMajorClient": "asdsad"
        }
      ],


      educations: [
        {
          receivedDegreeName: 'LLB',
          receivedCollegeName: 'IILM',
          receivedYearOfPassing: '2020',
          receivedTypeofDegree: { id: 1, name: "Bachelor's" },
          receivedPrimary: false
        },
        {
          receivedDegreeName: 'LLB',
          receivedCollegeName: 'IIM',
          receivedYearOfPassing: '2022',
          receivedTypeofDegree: { id: 2, name: "Master's" },
          receivedPrimary: true
        }
      ],
      certs: [
        {
          receivedCertificateName: 'xyz',
          receivedIssuingAuthority: 'xyz',
          receivedDateofIssuance: new Date('2020-09-28'),
        }
      ],

      receivedBeneficiaryName:'Ankit kumar',
      receivedIfscCode:'SBIN0008442',
      receivedAccountNumber:1234567891,
      receivedConfirmAccountnumber:1234567891,
      receivedSelectedBankName:{ id: 2, name: "SBI" },
    
      receivedAddressline1: '3015,Sector A, Pocket B&C',
      receivedAddressline2: 'Vasant Kunj',
      receivedPinCode: '110070',
      receivedCity: 'New Delhi',
          receivedPinCodeArea: 'Vasant Kunj',
          receivedState: 'Delhi',
          receivedTypeofAddress:{ id: 1, name: "Office" } ,
      
    }]

  }
  // getAccomplishments = [

  //   {
  //     receivedHeading: "22222",
  //     receivedDesc: "222"
  //   },
  //   {
  //     receivedHeading: "3333",
  //     receivedDesc: "33333"
  //   },
  //   {
  //     receivedHeading: "6",
  //     receivedDesc: "33366633"
  //   },
  //   {
  //     receivedHeading: "4",
  //     receivedDesc: "33366633"
  //   }
  //   ,
  //   {
  //     receivedHeading: "1",
  //     receivedDesc: "33366633"
  //   }
  // ]

}
