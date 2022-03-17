import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { AreaOfPraticeListService } from 'src/app/legaladvisor/legalService/area-of-pratice-list.service';
import { BankNameListService } from 'src/app/legaladvisor/legalService/bank-name-list.service';
import { BarMembershipListService } from 'src/app/legaladvisor/legalService/bar-membership-list.service';
import { CourtOfPracticeService } from 'src/app/legaladvisor/legalService/court-of-practice.service';
import { TypeOfAddressListService } from 'src/app/legaladvisor/legalService/type-of-address-list.service';
import { TypeOfDegreeListService } from 'src/app/legaladvisor/legalService/type-of-degree-list.service';
import { YearOfExpListService } from 'src/app/legaladvisor/legalService/year-of-exp-list.service';
import { CustomValidationService } from 'src/app/legaladvisor/registration/service/custom-validation.service';
import { AdvisorProfileService } from './advisorProfileservice/advisor-profile.service';
import { Gender } from './gender';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  step = 0;

  genders!: Gender[];
  genderSelected!: Number;

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
  yearsOfExpList: any = [];
  typeOfDegreeList: any = [];
  bankNameList: any = [];
  barMembershipsList: any = [];
  typeOfAddressList: any = [];
  courtOfPraticeList: any = [];
  areaOfPraticeList: any = [];

  advisorProfile: any = [];

  // checkBoxIsselected
  selected = -1;

  languageList: string[] = ['English', 'Hindi'];

  // Major Client
  clients(): FormArray {
    return this.Form2Group.get("clients") as FormArray;
  }
  newClients(): FormGroup {
    return this._formBuilder.group({
      receviedmajorClient: '',
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
      heading: '',
      desc: '',
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
      receivedyearOfPassing: '',
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
      enteredCertificateName: '',
     enteredIssuingAuthority: '',
     edateofIssuance: '',
    })
  }
  addcerts() {
    this.certs().push(this.newcerts());
  }
  removecerts(i: number) {
    this.certs().removeAt(i);
  }
//  notEditMode(i: number) {
//     // this.certs().onTogglenotEditMode6(i);
//     this.notEditMode6= !this.notEditMode6(i);
//   }




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

  notEditMode = true;
  notEditMode1 = true;
  notEditMode2 = true;
  notEditMode3 = true;
  notEditMode4 = true;
  notEditMode5 = true;
  notEditMode6 = true;

  onTogglenotEditMode() {
    this.notEditMode = !this.notEditMode;

  }
  onTogglenotEditMode1() {
    this.notEditMode1 = !this.notEditMode1;
  }
  onTogglenotEditMode2() {
    this.notEditMode2 = !this.notEditMode2;
  }
  onTogglenotEditMode3() {
    this.notEditMode3 = !this.notEditMode3;
  }
  onTogglenotEditMode4() {
    this.notEditMode4 = !this.notEditMode4;
  }
  onTogglenotEditMode5() {
    this.notEditMode5 = !this.notEditMode5;
  }
  onTogglenotEditMode6() {
    this.notEditMode6 = !this.notEditMode6;
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
    private httpClient: HttpClient,
    private customValidator: CustomValidationService,

  ) {

  
    this.Form1Group = this._formBuilder.group({
      receivedName: ['', Validators.required],
      receivedEmail: new FormControl('', [Validators.required, Validators.email]),
      receivedPhone: new FormControl('', [
        Validators.required,
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      receivedDoB: new FormControl('', Validators.required),
      receivedgender: new FormControl('', Validators.required),
      receivedlanguage: new FormControl('', Validators.required),
      //  receivedPhoto: new FormControl('', Validators.required),
    });

    this.Form2Group = this._formBuilder.group({
      accomplishments: this._formBuilder.array([]),
      clients: this._formBuilder.array([]),
      receivedBaseCity: ['', Validators.required],
      receivedenrollment: new FormControl('', Validators.required),
      receivedlinkedinUrl: new FormControl('', [
        Validators.pattern("^https?://((www|\w\w)\.)?linkedin.com/((in/[^/]+/?)|(pub/[^/]+/((\w|\d)+/?){3}))$")]),
      receivedAreaofpractice: new FormControl('', [
        Validators.required,
        Validators.maxLength(5)
      ]),
      receivedCourtOfPractice: new FormControl('', [
        Validators.required,
        Validators.max(5)
      ]),
      receivedYearsOfExp: new FormControl('', Validators.required),
      receivedBarMembership: new FormControl('', Validators.required),
      receivedbarCouncilId: new FormControl('', Validators.required),

    });

    this.Form3Group = this._formBuilder.group({
      educations: this._formBuilder.array([]),
      receivedDegreeName: ['', Validators.required],
      receivedCollegeName: new FormControl('', Validators.required),
     receivedyearOfPassing: new FormControl('', Validators.required),
      receivedTypeofDegree: new FormControl('', Validators.required),
      receivedprimary: new FormControl('', Validators.required),
    });

    this.Form4Group = this._formBuilder.group({
      certs: this._formBuilder.array([]),
      enteredCertificateName: [''],
      enteredIssuingAuthority: new FormControl(''),
      dateofIssuance: new FormControl('')
    });

    // this.Form4Group.setValue(this.advisorProfile);

    this.Form5Group = this._formBuilder.group({
      enteredBeneficiaryName: ['', Validators.required],

      enteredIfscCode: new FormControl('', [
        Validators.required,
        Validators.pattern("^[A-Z]{4}0[A-Z0-9]{6}$")]),
        enteredAccountNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      confirmAccountnumber: new FormControl('', Validators.required),
      selectedBankName: new FormControl('', Validators.required),
    },
      {
        validator: this.customValidator.accountMatchValidator(
          "receivedAccountNumber",
          "receivedconfirmAccountnumber"
        )
      });

      this.Form5Group.setValue(this.advisorProfileService.education);

    // this.Form6Group = this._formBuilder.group({
    //  receivedAddressline1: ['', Validators.required],
    //   receivedAddressline2: new FormControl(''),
    //  receivedPinCode: new FormControl('', Validators.required),
    //  receivedCity: new FormControl('', Validators.required),
    //   receivedPinCodeArea: new FormControl('', Validators.required),
    //   receivedState: new FormControl('', Validators.required),
    //   receivedTypeofAddress: new FormControl('', Validators.required),
    // });
     this.Form6Group = this._formBuilder.group({
      selectedTypeofAddress: new FormControl('', Validators.required),
     enteredAddressline1: ['', Validators.required],
     enteredAddressline2: new FormControl(''),
     enteredPinCode: new FormControl('', Validators.required),
    enteredCity: new FormControl('', Validators.required),
     enteredPinCodeArea: new FormControl('', Validators.required),
     enteredState: new FormControl('', Validators.required),
  
    });
     this.Form6Group.setValue(this.advisorProfileService.advisorProfile);

    // this.Form7Group = this._formBuilder.group({
    //   terms: ['', Validators.requiredTrue],

    // });
  }
 

  ngOnInit() {

    this.genders =[
      {id:'1',value:"Male"},
      {id:'2',value:"Female"},
      {id:'3',value:"Other"},
    ]
    this.genderSelected=1;

    // YearOfExpListService
    this.yearsOfExpList = this.yearOfExpListService.yearsOfExpList();

    // barMembershipList
    this.barMembershipsList = this.barMembershipListService.barMembershipsList();

    // BankNameListServiceService
    this.bankNameList = this.bankNameListService.bankNameList();

    // typeOfAddressListService
    this.typeOfAddressList = this.typeOfAddressListService.typeOfAddressList();

    // TypeOfDegreeListService
    this.typeOfDegreeList = this.typeOfDegreeListService.typeOfDegreeList();

    // COURT OF PRATICE Service
    this.courtOfPraticeList = this.courtOfPracticeService.courtOfPraticeList();

    // AREA OF PRATICE Service
    this.areaOfPraticeList = this.areaOfPraticeListService.areaOfPraticeList();

    //Add Certs
    this.addcerts();

    this.addEducation();

    this.addClients();

    this.addAccomplishments();


    this.advisorProfile = this.advisorProfileService.advisorProfile;
  }

}
