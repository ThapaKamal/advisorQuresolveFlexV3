import { Gender } from '../gender';
import { Language } from '../language';
import { AreaOfPratice } from '../Models/areaOfPratice';
import { BankName } from '../Models/bankName';
import { BarMembership } from '../Models/barMembership';
import { BaseCity } from '../Models/baseCity';
import { CourtOfPratice } from '../Models/courtOfPratice';
import { TypeOfAddress } from '../Models/typeOfAddress';
import { yearsOfExp } from '../Models/yearsOfExp';
import { Accomplishment } from './accomplishment'
import { Certification } from './certification';
import { Clients } from './clients';
import { Educations } from './educations';

export interface IProfile {
  [x: string]: any;

  receivedName: string;
  receivedEmail: string;
  receivedPhone: number;
  receivedDoB: Date;
  receivedGender: Gender;
  receivedLanguage: Language;

  accomplishments:Accomplishment[];
  clients:Clients[];
  receivedBaseCity:BaseCity;
  receivedEnrollment:string;
  receivedLinkedinUrl:string;
  // receivedAreaofpractice:AreaOfPratice;
  // receivedCourtOfPractice:CourtOfPratice;
  receivedYearsOfExp: yearsOfExp;
  receivedBarMembership: BarMembership;
  receivedBarCouncilId: string;

  educations:Educations[];

  certs:Certification[];

  receivedBeneficiaryName:string;
  receivedIfscCode:string;
  receivedAccountNumber:number;
  receivedConfirmAccountnumber:number;
  receivedSelectedBankName:BankName;

  receivedAddressline1:string;
  receivedAddressline2:string;
  receivedPinCode:string;
  receivedCity:string;
  receivedPinCodeArea:string;
  receivedState:string;
  receivedTypeofAddress:TypeOfAddress;











}