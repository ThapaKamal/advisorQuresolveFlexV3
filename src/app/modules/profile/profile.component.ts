import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { AreaOfPraticeListService } from 'src/app/legaladvisor/legalService/area-of-pratice-list.service';
import { BankNameListService } from 'src/app/legaladvisor/legalService/bank-name-list.service';
import { BarMembershipListService } from 'src/app/legaladvisor/legalService/bar-membership-list.service';
import { CourtOfPracticeService } from 'src/app/legaladvisor/legalService/court-of-practice.service';
import { TypeOfAddressListService } from 'src/app/legaladvisor/legalService/type-of-address-list.service';
import { BaseCitylistService } from 'src/app/legaladvisor/legalService/base-citylist.service';
import { TypeOfDegreeListService } from 'src/app/legaladvisor/legalService/type-of-degree-list.service';
import { YearOfExpListService } from 'src/app/legaladvisor/legalService/year-of-exp-list.service';
import { CustomValidationService } from 'src/app/legaladvisor/registration/service/custom-validation.service';
import { AdvisorProfileService } from './advisorProfileservice/advisor-profile.service';
import { Gender } from './gender';
import { Accomplishment } from './interfaces/accomplishment';
import { Language } from './language';
import { AreaOfPratice } from './Models/areaOfPratice';
import { BankName } from './Models/bankName';
import { BarMembership } from './Models/barMembership';
import { CourtOfPratice } from './Models/courtOfPratice';
import { TypeOfAddress } from './Models/typeOfAddress';
import { TypeOfDegree } from './Models/typeOfDegree';
import { yearsOfExp } from './Models/yearsOfExp';
import { BaseCity } from './Models/baseCity';
import { IProfile } from './interfaces/IProfile';
import { Clients } from './interfaces/clients';
import { Educations } from './interfaces/educations';
import { Certification } from './interfaces/certification';
import { GenderListService } from 'src/app/legaladvisor/legalService/gender-list.service';
import { LanguageListService } from 'src/app/legaladvisor/legalService/language-list.service';





@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  step = 0;

  genders!: Gender[];
  languageList!: Language[];



  // ProfileDetails!: Profile;
  accomplishment!: Accomplishment
  createForm: any;

  gender$: any;
  language$: any;
  yearsOfExp$: any;
  barMembership$: any;
  bankName$: any;
  address$: any;
  degree$: any;
  courtOfPractice$: any;
  areaOfPratice$: any;
  basecity$: any;
  getBaseCity: any = [];


  advisorProfileList!: IProfile[];

  setStep(index: number) {
    this.step = index;
  }


  Form1Group!: FormGroup;
  Form2Group!: FormGroup;
  Form3Group!: FormGroup;
  Form4Group!: FormGroup;
  Form5Group!: FormGroup;
  Form6Group!: FormGroup;
  Form7Group!: FormGroup;




  // ServiceVariables
  // yearsOfExpList!: yearsOfExp[];
  // typeOfDegreeList!: TypeOfDegree[];
  // bankNameList!: BankName[];
  // barMembershipsList!: BarMembership[];
  // typeOfAddressList!: TypeOfAddress[];
  // courtOfPraticeList!: CourtOfPratice[];
  // advisorProfileList!: IProfile[];
  // baseCitylist!: BaseCity[];
  // areaOfPraticeList!: AreaOfPratice[];
  advisorProfile: any = [];
  loadAccom: any = [];

    // ServiceVariables
    yearsOfExpList: any = [];
    typeOfDegreeList: any = [];
    bankNameList: any = [];
    barMembershipsList: any = [];
    typeOfAddressList: any = [];
    courtOfPraticeList: any = [];
    areaOfPraticeList: any = [];
    getGenderList: any = [];
    getlanguage: any = [];

  // checkBoxIsselected
  selected = -1;





  // Major Client
  clients(): FormArray {
    return this.Form2Group.get("clients") as FormArray;
  }
  newClients(): FormGroup {
    return this._formBuilder.group({
      receivedMajorClient: '',
    })
  }
  addClients() {
    this.clients().push(this.newClients());
  }
  removeClients(i: number) {
    this.clients().removeAt(i);
  }

  // Accomplishments
  accomplishments(): FormArray {
    return this.Form2Group.get("accomplishments") as FormArray;
  }
  newAccomplishments(): FormGroup {
    return this._formBuilder.group({
      receivedHeading: '',
      receivedDesc: '',
    })
  }
  addAccomplishments() {
    this.accomplishments().push(this.newAccomplishments());
  }
  removeAccomplishments(i: number) {
    this.accomplishments().removeAt(i);
  }

  // Education
  educations(): FormArray {
    return this.Form3Group.get("educations") as FormArray;
  }
  newEducations(): FormGroup {
    return this._formBuilder.group({
      receivedTypeofDegree: '',
      receivedDegreeName: '',
      receivedCollegeName: '',
      receivedYearOfPassing: '',
      receivedprimary: '',
    })
  }
  addEducation() {
    this.educations().push(this.newEducations());
  }
  removeEducation(i: number) {
    this.educations().removeAt(i);
  }

  // Certificates
  certs(): FormArray {
    return this.Form4Group.get("certs") as FormArray;
  }
  newcerts(): FormGroup {
    return this._formBuilder.group({
      receivedCertificateName: '',
      receivedIssuingAuthority: '',
      receivedDateofIssuance: '',
    })
  }
  addcerts() {
    this.certs().push(this.newcerts());
  }
  removecerts(i: number) {
    this.certs().removeAt(i);
  }


  // BAR COUNCIL
  selectedFile1!: File;
  retrievedImage1: any;
  base64Data1: any;
  retrieveResonse1: any;
  message1!: string;
  imageName1: any;

  //Gets called when the user selects an image
  public onFileChanged1(event: any) {
    //Select File
    this.selectedFile1 = event.target.files[0];
  }
  //Gets called when the user clicks on submit to upload the image
  onUpload1() {
    console.log(this.selectedFile1);

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData1 = new FormData();
    uploadImageData1.append('imageFile', this.selectedFile1, this.selectedFile1.name);

    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8080/image/upload', uploadImageData1, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message1 = 'Image uploaded successfully';
        } else {
          this.message1 = 'Image not uploaded successfully';
        }
      }
      );
  }
  // retieve image

  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage1() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/image/get/' + this.imageName1)
      .subscribe(
        res => {
          this.retrieveResonse1 = res;
          this.base64Data1 = this.retrieveResonse1.picByte;
          this.retrievedImage1 = 'data:image/jpeg;base64,' + this.base64Data1;
        }
      );
  }




  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.Form1Group.controls[control].hasError(error);
  }
  public errorHandling1 = (control: string, error: string) => {
    return this.Form2Group.controls[control].hasError(error);
  }
  public errorHandling2 = (control: string, error: string) => {
    return this.Form3Group.controls[control].hasError(error);
  }
  public errorHandling3 = (control: string, error: string) => {
    return this.Form4Group.controls[control].hasError(error);
  }
  public errorHandling4 = (control: string, error: string) => {
    return this.Form5Group.controls[control].hasError(error);
  }
  public errorHandling5 = (control: string, error: string) => {
    return this.Form6Group.controls[control].hasError(error);
  }




  onEdit(control: AbstractControl) {
    control.status === 'DISABLED' ? control.enable() : control.disable();
  }

  submit() {
    alert('Updated Values Submitted succesfully!!!.');
    console.log();
    window.location.reload();
  }

  enableMode: boolean = true;
  enableMode2: boolean = true;
  enableMode3: boolean = true;
  enableMode4: boolean = true;
  enableMode5: boolean = true;
  enableMode6: boolean = true;

  enableSave() {
    this.enableMode = !this.enableMode;
  }
  enableSave2() {
    this.enableMode2 = !this.enableMode2;
  }
  enableSave3() {
    this.enableMode3 = !this.enableMode3;
  }
  enableSave4() {
    this.enableMode4 = !this.enableMode4;
  }
  enableSave5() {
    this.enableMode5 = !this.enableMode5;
  }
  enableSave6() {
    this.enableMode6 = !this.enableMode6;
  }




  constructor(
    private _formBuilder: FormBuilder,
    private courtOfPracticeService: CourtOfPracticeService,
    private areaOfPraticeListService: AreaOfPraticeListService,
    private yearOfExpListService: YearOfExpListService,
    private barMembershipListService: BarMembershipListService,
    private bankNameListService: BankNameListService,
    private typeOfAddressListService: TypeOfAddressListService,
    private typeOfDegreeListService: TypeOfDegreeListService,
    private advisorProfileService: AdvisorProfileService,
    private basecityService: BaseCitylistService,
    private httpClient: HttpClient,
    private customValidator: CustomValidationService,
    private genderListService: GenderListService,
    private languageListService: LanguageListService,

  ) {

    this.Form1Group = this._formBuilder.group({
      receivedName: [{ value: "Ankit Kumar", disabled: true }, Validators.required],
      receivedEmail: new FormControl({ value: 'ankitkumar6220@gmail.com', disabled: true }, [Validators.required, Validators.email]),
      receivedPhone: new FormControl({ value: '+91-8851421261', disabled: true }, [
        Validators.required,
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      receivedDoB: new FormControl({ value: ('2020-09-28'), disabled: true }, Validators.required),
      receivedGender: new FormControl({ value: '1', disabled: true }, Validators.required),
      receivedLanguage: new FormControl({ value: ['1', '2'], disabled: true }, Validators.required),
    });

    this.Form2Group = this._formBuilder.group({
      accomplishments: this._formBuilder.array([]),
      // { value:this.advisorProfileService.accomplishments(), disabled: true }
      receivedHeading: ({ value: '', disabled: true }),
      receivedDesc: [{ value: '', disabled: true }],
      clients: this._formBuilder.array([]),
      receivedMajorClient: [{ value: '', disabled: true }],
      receivedBaseCity: [{ value: '', disabled: true }, Validators.required],
      receivedEnrollment: new FormControl({ value: 'test123', disabled: true }, Validators.required),
      receivedLinkedinUrl: new FormControl({ value: 'https://www.linkedin.com/in/ankit-kumar-2a6a501b3/', disabled: true }, [
        Validators.pattern("^https?://((www|\w\w)\.)?linkedin.com/((in/[^/]+/?)|(pub/[^/]+/((\w|\d)+/?){3}))$")]),
      receivedAreaofpractice: new FormControl({ value: '', disabled: true }, [
        Validators.required,
        Validators.maxLength(5)
      ]),
      receivedCourtOfPractice: new FormControl({ value: '', disabled: true }, [
        Validators.required,
        Validators.max(5)
      ]),
      receivedYearsOfExp: new FormControl({ value: '', disabled: true }, Validators.required),
      receivedBarMembership: new FormControl({ value: '', disabled: true }, Validators.required),
      receivedBarCouncilId: new FormControl({ value: '', disabled: true }, Validators.required),
    });

    this.Form3Group = this._formBuilder.group({
      educations: this._formBuilder.array([]),
      receivedDegreeName: ['', Validators.required],
      receivedCollegeName: new FormControl('', Validators.required),
      receivedYearOfPassing: new FormControl('', Validators.required),
      receivedTypeofDegree: new FormControl('', Validators.required),
      receivedPrimary: new FormControl('', Validators.required),
    });

    this.Form4Group = this._formBuilder.group({
      certs: this._formBuilder.array([]),
      receivedCertificateName: [''],
      receivedIssuingAuthority: new FormControl(''),
      receivedDateofIssuance: new FormControl('')
    });

    // this.Form4Group.setValue(this.advisorProfile);

    this.Form5Group = this._formBuilder.group({
      receivedBeneficiaryName: [{ value: 'Ankit Kumar', disabled: true }, Validators.required],
      receivedIfscCode: new FormControl({ value: 'ICIC0000225', disabled: true }, [
        Validators.required,
        Validators.pattern("^[A-Z]{4}0[A-Z0-9]{6}$")]),
      receivedAccountNumber: new FormControl({ value: '1234567890', disabled: true }, [
        Validators.required,
        Validators.maxLength(10)
      ]),
      receivedConfirmAccountnumber: new FormControl({ value: '1234567890', disabled: true }, Validators.required),
      receivedSelectedBankName: new FormControl({ value: '', disabled: true }, Validators.required),
    },
      {
        validator: this.customValidator.accountMatchValidator(
          "receivedAccountNumber",
          "receivedConfirmAccountnumber"
        )
      });

    // this.Form5Group.setValue(this.advisorProfileService.education);

    this.Form6Group = this._formBuilder.group({
      receivedAddressline1: new FormControl({ value: 'E-7/300', disabled: true }, Validators.required),
      receivedAddressline2: new FormControl({ value: 'Sangam Vihar,New Delhi', disabled: true }),
      receivedPinCode: new FormControl({ value: '110080', disabled: true }, Validators.required),
      receivedCity: new FormControl({ value: 'Delhi', disabled: true }, Validators.required),
      receivedPinCodeArea: new FormControl({ value: 'Sangam vihar', disabled: true }, Validators.required),
      receivedState: new FormControl({ value: 'New Delhi', disabled: true }, Validators.required),
      receivedTypeofAddress: new FormControl({ value: '', disabled: true }, Validators.required),
    });

    //  this.Form6Group.setValue(this.advisorProfileService.advisorProfile);

    // this.Form7Group = this._formBuilder.group({
    //   terms: ['', Validators.requiredTrue],

    // });
  }



  // loadGender() {
  //   this.genders = [
  //     { id: '1', value: "Male" },
  //     { id: '2', value: "Female" },
  //     { id: '3', value: "Other" },
  //   ]
  // }
  // loadLanguage() {
  //   this.languageList = [
  //     { id: '1', value: "English" },
  //     { id: '2', value: "Hindi" }
  //   ]
  // }

  // public loadItems(){
  //   this.Form2Group.patchValue({
  //     heading: this.accomplishments.heading,
  //     desc: this.accomplishments.desc
  //   });

  //   this.accomplishments.forEach((item) => {
  //     (<FormArray>this.Form2Group.get('items')).push(this.createItem(item));
  //   });

  // }


  //TODO PRE POPULATE DATA FROM BACKEND

  editProfile(advisorProfileList: IProfile) {
    this.Form1Group.patchValue({
      receivedName: advisorProfileList.receivedName,
      receivedEmail: advisorProfileList.receivedEmail,
      receivedPhone: advisorProfileList.receivedPhone,
      receivedDoB: advisorProfileList.receivedDoB,
      receivedGender: advisorProfileList.receivedGender,
      receivedLanguage: advisorProfileList.receivedLanguage
    })
    this.Form2Group.patchValue({
      receivedBaseCity: advisorProfileList.receivedBaseCity,
      receivedEnrollment: advisorProfileList.receivedEnrollment,
      receivedLinkedinUrl: advisorProfileList.receivedLinkedinUrl,
      // receivedAreaofpractice: advisorProfileList.receivedAreaofpractice,
      // receivedCourtOfPractice: advisorProfileList.receivedCourtOfPractice,
      receivedYearsOfExp: advisorProfileList.receivedYearsOfExp,
      receivedBarMembership: advisorProfileList.receivedBarMembership,
      receivedBarCouncilId: advisorProfileList.receivedBarCouncilId
    })
    this.Form2Group.setControl('accomplishments', this.setAccomplishment(advisorProfileList.accomplishments));
    this.Form2Group.setControl('clients', this.setClients(advisorProfileList.clients));


    this.Form3Group.setControl('educations', this.setEducations(advisorProfileList.educations));

    this.Form4Group.setControl('certs', this.setCertification(advisorProfileList.certs));

    this.Form5Group.patchValue({
      receivedBeneficiaryName: advisorProfileList.receivedBeneficiaryName,
      receivedIfscCode: advisorProfileList.receivedIfscCode,
      receivedAccountNumber: advisorProfileList.receivedAccountNumber,
      receivedConfirmAccountnumber: advisorProfileList.receivedConfirmAccountnumber,
      receivedSelectedBankName: advisorProfileList.receivedSelectedBankName
    })

    this.Form6Group.patchValue({
      receivedAddressline1: advisorProfileList.receivedAddressline1,
      receivedAddressline2: advisorProfileList.receivedAddressline2,
      receivedPinCode: advisorProfileList.receivedPinCode,
      receivedCity: advisorProfileList.receivedCity,
      receivedPinCodeArea: advisorProfileList.receivedPinCodeArea,
      receivedState: advisorProfileList.receivedState,
      receivedTypeofAddress: advisorProfileList.receivedTypeofAddress,
    })
  }
  setAccomplishment(accomplishments: Accomplishment[]): FormArray {
    const formArray = new FormArray([]);
    accomplishments.forEach(s => {
      formArray.push(this._formBuilder.group({
        receivedHeading: s.receivedHeading,
        receivedDesc: s.receivedDesc,
      }));
    });
    return formArray;
  }
  setClients(clients: Clients[]): FormArray {
    const formArray = new FormArray([]);
    clients.forEach(s => {
      formArray.push(this._formBuilder.group({
        receivedMajorClient: s.receivedMajorClient,
      }));
    });
    return formArray;
  }

  setEducations(educations: Educations[]): FormArray {
    const formArray = new FormArray([]);
    educations.forEach(s => {
      formArray.push(this._formBuilder.group({
        receivedTypeofDegree: s.receivedTypeofDegree,
        receivedYearOfPassing: s.receivedYearOfPassing,
        receivedDegreeName: s.receivedDegreeName,
        receivedCollegeName: s.receivedCollegeName,
        receivedPrimary: s.receivedPrimary,
      }));
    });
    return formArray;
  }

  setCertification(certs: Certification[]): FormArray {
    const formArray = new FormArray([]);
    certs.forEach(s => {
      formArray.push(this._formBuilder.group({
        receivedCertificateName: s.receivedCertificateName,
        receivedIssuingAuthority: s.receivedIssuingAuthority,
        receivedDateofIssuance: s.receivedDateofIssuance,

      }));
    });
    return formArray;
  }


  gender() {
    return this.genderListService.getGenderList();
  }

  language(){
    return this.languageListService.getlanguage();
  }

  yearOfExp(){
    return this.yearOfExpListService.getYearsOfExpList();
  }

  barMembership(){
    return this.barMembershipListService.getBarMembershipsList();
  }
  
  bankName(){
    return this.bankNameListService.getBankNameList();
  }

  address(){
    return this.typeOfAddressListService.getTypeOfAddressList();
  }

  degree(){
    return this.typeOfDegreeListService.getTypeOfDegreeList();
  }

  courtOfPractice(){
    return this.courtOfPracticeService.getCourtOfPraticeList();
  }

  areaOfPratice(){
    return this.areaOfPraticeListService.getAreaOfPratice();
  }
  baseCity(){
    return this.basecityService.getBaseCityList();
  }



  ngOnInit() {

    this.gender$ = this.gender();
    this.language$ = this.language();
    this.yearsOfExp$ = this.yearOfExp();
    this.barMembership$ = this.barMembership();
    this.bankName$ = this.bankName();
    this.address$ = this.address();
    this.degree$ = this.degree();
    this.courtOfPractice$ = this.courtOfPractice();
    this.areaOfPratice$ = this.areaOfPratice();
    
    this.basecity$ = this.baseCity();

     // YearOfExpListService
     this.yearsOfExpList = this.yearOfExpListService.getYearsOfExpList();

     // barMembershipList
     this.barMembershipsList = this.barMembershipListService.getBarMembershipsList();
 
     // BankNameListServiceService
     this.bankNameList = this.bankNameListService.getBankNameList();
 
     // typeOfAddressListService
     this.typeOfAddressList = this.typeOfAddressListService.getTypeOfAddressList();
 
     // TypeOfDegreeListService
     this.typeOfDegreeList = this.typeOfDegreeListService.getTypeOfDegreeList();
 
     // COURT OF PRATICE Service
     this.courtOfPraticeList = this.courtOfPracticeService.getCourtOfPraticeList();
 
     // AREA OF PRATICE Service
     this.areaOfPraticeList = this.areaOfPraticeListService.getAreaOfPratice();
 
     // GenderList Service
     this.getGenderList = this.genderListService.getGenderList();
 
     // LanguageList Service
     this.getlanguage = this.languageListService.getlanguage();
     
    // BaseCitylistService 
    this.getBaseCity = this.basecityService.getBaseCityList();


    // Advisor Profile Service
    this.advisorProfileList = this.advisorProfileService.advisorProfileList();


    // AccomplishmentsService
    // this.accomplishments = this.AccomplishmentsService.accomplishments();

    //Add Certs
    this.addcerts();

    this.addEducation();

    this.addClients();

    this.addAccomplishments();

    // this.editProfile();

    // this.createAllFormGroup();

    // advisorProfile Service
    // this.loadAccom = this.advisorProfileService.getAccomplishments;

    // this.loadUserProfile();
    // console.log("hello world");
    // console.log(this.ProfileDetails.receivedName);


    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}

