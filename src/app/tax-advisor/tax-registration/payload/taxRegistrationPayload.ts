export class TaxRegistrationPayload {

    taxAdvisorName: String = '';
    taxAdvisorEmail: String = '';
    taxAdvisorPhone: String = '';
    taxAdvisorDoB: String = '';
    taxAdvisorGender: String = '';
    taxAdvisorLanguage: String = '';
    taxAdvisorPhoto: String = '';

    // accomplishments!: string[];AccomplishmentPayload
    // taxAdvisorAccomplishments!: { taxAdvisorheading: string; taxAdvisorDesc: string; }[];
    taxAdvisorAccomplishments: String = '';
    // clients: String='';
    taxAdvisorBaseCity: String = '';
    // enteredenrollment: String='';
    taxAdvisorLinkedinUrl: String = '';
    taxAdvisorSpecialisation: String = '';
    // selectedCourtOfPractice: String='';
    taxAdvisorYearsOfExp: String = '';
    // selectedBarMembership: String='';
    // barCouncilId: String='';

    taxAdvisorEducations!: { taxAdvisorDegreeName: string; taxAdvisorCollegeName: string; taxAdvisorYearOfPassing: Date ; taxAdvisorTypeofDegree: string; taxAdvisorPrimary: boolean; }[];
    // taxAdvisorEducations: String = '';
    // taxAdvisorDegreeName: String='';
    // taxAdvisorCollegeName: String='';
    // taxAdvisorYearOfPassing: String='';
    // taxAdvisorTypeofDegree: String='';
    // taxAdvisorPrimary: String='';

    taxAdvisorCerts: String = '';
    // certList != certificationPayload[],
    // enteredCertificateName: String='';
    // enteredIssuingAuthority: String='';
    // dateofIssuance: String='';

    taxAdvisorBeneficiaryName: String = '';
    taxAdvisorAccountNumber: String = '';
    taxAdvisorIfscCode: String = '';
    taxAdvisorConfirmAccountnumber: String = '';
    taxAdvisorBankName: String = '';

    taxAdvisorAddressline1: String = '';
    taxAdvisorAddressline2: String = '';
    taxAdvisorPinCode: String = '';
    taxAdvisorCity: String = '';
    taxAdvisorPinCodeArea: String = '';
    taxAdvisorState: String = '';
    taxAdvisorTypeofAddress: String = '';

    taxAdvisorterms: String = 'Yes';


}