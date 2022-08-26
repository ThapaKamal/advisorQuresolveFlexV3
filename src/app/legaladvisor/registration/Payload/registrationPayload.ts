export class RegistrationPayload {

    enteredName: String='';
    enteredEmail: String='';
    enteredPhone: String='';
    enteredDoB: String='';
    gender: String='';
    selectedLanguage: String='';
    uploadedPhoto: String='';
    aboutMe: String='';

    // accomplishments!: string[];AccomplishmentPayload
    accomplishments!:{ heading: string; desc: string; }[];
    clients: String='';
    selectedBaseCity: String='';
    enteredEnrollment: String='';
    designation: String='';
    selectedAreaOfPractice!: string[];
    selectedCourtOfPractice!: string[];
    selectedYearsOfExp: String='';
    selectedBarMembership: String='';
    barCouncilId: String='';

    educations: String='';
    // enteredDegreeName: String='';
    // enteredCollegeName: String='';
    // yearOfPassing: String='';
    // selectedTypeOfDegree: String='';

    certs: String='';
    // certList != certificationPayload[],
    // enteredCertificateName: String='';
    // enteredIssuingAuthority: String='';
    // dateofIssuance: String='';
  
    enteredBeneficiaryName: String='';
    enteredAccountNumber: String='';
    enteredIFSC: String='';
    confirmAccountnumber: String='';
    selectedBankName: String='';
    
    enteredAddressLine1: String='';
    enteredAddressLine2: String='';
    enteredPinCode: String='';
    enteredCity: String='';
    enteredPinCodeArea: String='';
    enteredState: String='';
    selectedTypeofAddress: String='';

    terms: String='Yes';


}