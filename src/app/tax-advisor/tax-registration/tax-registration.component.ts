import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { BankNameListService } from 'src/app/legaladvisor/legalService/bank-name-list.service';
import { TypeOfAddressListService } from 'src/app/legaladvisor/legalService/type-of-address-list.service';
import { TypeOfDegreeListService } from 'src/app/legaladvisor/legalService/type-of-degree-list.service';
import { YearOfExpListService } from 'src/app/legaladvisor/legalService/year-of-exp-list.service';
import { CustomValidationService } from 'src/app/legaladvisor/registration/service/custom-validation.service';
import { TaxRegistrationPayload } from './payload/taxRegistrationPayload';
import { SpecialisationService } from '../service/specialisation.service';

@Component({
  selector: 'app-tax-registration',
  templateUrl: './tax-registration.component.html',
  styleUrls: ['./tax-registration.component.scss']
})
export class TaxRegistrationComponent implements OnInit {

  FormGroup1!: FormGroup;
  Form2Group!: FormGroup;
  Form3Group!: FormGroup;
  Form4Group!: FormGroup;
  Form5Group!: FormGroup;
  Form6Group!: FormGroup;
  Form7Group!: FormGroup;

  customErrors = { required: 'Please accept the terms' }

  taxRegistrationPayload!: TaxRegistrationPayload;

  hide = true;


  // ServiceVariables
  yearsOfExpList!: { id: number; name: string; }[];
  typeOfDegreeList: any = [];
  bankNameList: any = [];
  // barMembershipsList: any = [];
  typeOfAddressList: any = [];
  // courtOfPraticeList: any = [];
  specialisationList!: { id: number; value: string; }[];


  // clients! :{ heading: string; desc: string; }[];

  // JSON FORMAT
  stringifiedData: any;

  // checkBoxIsselected
  selected = -1;

  languageList: string[] = ['English', 'Hindi'];

  // Image
  dataimage: any;

  @ViewChild('fileInput')
  fileInput!: ElementRef;
  fileAttr = '';
  file!: File;

  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file) => {
        this.fileAttr += this.file.name + ' - ';
      });

      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          let imgBase64Path = e.target.result;
          console.log(imgBase64Path);
          this.dataimage = imgBase64Path;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);

      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = "";
    } else {
      this.fileAttr = 'Choose File';
    }

    function isPrimarySelected(this: any) {
      this.Form3Group.value.taxAdvisorEducations;

    }
  }
  private mediaSub!: Subscription;

  constructor(
    private router: Router,
    private _formBuilder: FormBuilder,
    // private courtOfPracticeService: CourtOfPracticeService,
    private specialisationService: SpecialisationService,
    private yearOfExpListService: YearOfExpListService,
    // private barMembershipListService: BarMembershipListService,
    private bankNameListService: BankNameListService,
    private typeOfAddressListService: TypeOfAddressListService,
    private typeOfDegreeListService: TypeOfDegreeListService,
    private httpClient: HttpClient,
    // private registrationService: RegistrationServiceService,
    private customValidator: CustomValidationService,
    private mediaObserver: MediaObserver,

  ) {

    this.FormGroup1 = this._formBuilder.group({
      taxAdvisorName: ['', Validators.required],
      taxAdvisorEmail: new FormControl('', [Validators.required, Validators.email]),
      taxAdvisorPhone: new FormControl('+91-', [
        Validators.required,
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      taxAdvisorDoB: new FormControl('', Validators.required),
      taxAdvisorGender: new FormControl('', Validators.required),
      taxAdvisorLanguage: new FormControl('', Validators.required),
      taxAdvisorPhoto: new FormControl('', Validators.required),
    });

    
    this.Form2Group = this._formBuilder.group({
      taxAdvisorAccomplishments: this._formBuilder.array([]),
      taxAdvisorHeading: new FormControl(''),
      taxAdvisorDesc: new FormControl(''),
      // clients: this._formBuilder.array([]),
      taxAdvisorBaseCity: ['', Validators.required],
      // enteredenrollment: new FormControl('', Validators.required),
      taxAdvisorLinkedinUrl: new FormControl('', [
        Validators.pattern("^https?://((www|\w\w)\.)?linkedin.com/((in/[^/]+/?)|(pub/[^/]+/((\w|\d)+/?){3}))$")]),
      taxAdvisorSpecialisation: new FormControl('', [
        Validators.required,
        Validators.maxLength(5)
      ]),
      // selectedCourtOfPractice: new FormControl('', [
      //   Validators.required,
      //   Validators.max(5)
      // ]),
      taxAdvisorYearsOfExp: new FormControl('', Validators.required),
      // selectedBarMembership: new FormControl('', Validators.required),
      // barCouncilId: new FormControl('', Validators.required),

    });

    this.Form3Group = this._formBuilder.group({
      taxAdvisorEducations: this._formBuilder.array([]),
      taxAdvisorDegreeName: new FormControl(''),
      taxAdvisorCollegeName:new FormControl(''),
      taxAdvisorYearOfPassing:new FormControl(''),
      taxAdvisorTypeofDegree:new FormControl(''),
      taxAdvisorPrimary:new FormControl('')
    });

    // this.Form3Group = this._formBuilder.group({
    //   taxAdvisorEducations: this._formBuilder.array([]),
    //   taxAdvisorDegreeName: ['', Validators.required],
    //   taxAdvisorCollegeName: ['', Validators.required],
    //   taxAdvisorYearOfPassing: ['', Validators.required],
    //   taxAdvisorTypeofDegree: ['', Validators.required],
    //   taxAdvisorPrimary: ['', Validators.required],
    // });

    this.Form4Group = this._formBuilder.group({
      taxAdvisorCerts: this._formBuilder.array([]),
      taxAdvisorCertificateName: [''],
      taxAdvisorIssuingAuthority: [''],
      taxAdvisorDateofIssuance: [''],
      // taxAdvisorDateofIssuance: new FormControl('')
    });

    this.Form5Group = this._formBuilder.group(
      {
        taxAdvisorBeneficiaryName: ['', Validators.required],
        taxAdvisorBankName: new FormControl('', Validators.required),
        taxAdvisorIfscCode: new FormControl('', [
          Validators.required,
          Validators.pattern("^[A-Z]{4}0[A-Z0-9]{6}$")]),
        taxAdvisorAccountNumber: new FormControl('', [
          Validators.required,
          Validators.minLength(10)
        ]),
        taxAdvisorConfirmAccountnumber: new FormControl('', Validators.required),
      },
      {
        validator: this.customValidator.accountMatchValidator(
          "taxAdvisorAccountnumber",
          "taxAdvisorAccountnumber"
        )
      }
    );

    this.Form6Group = this._formBuilder.group({
      taxAdvisorAddressline1: ['', Validators.required],
      taxAdvisorAddressline2: new FormControl(''),
      taxAdvisorPinCode: new FormControl('', Validators.required),
      taxAdvisorCity: new FormControl('', Validators.required),
      taxAdvisorPinCodeArea: new FormControl('', Validators.required),
      taxAdvisorState: new FormControl('', Validators.required),
      taxAdvisorTypeofAddress: new FormControl('', Validators.required),
    });

    this.Form7Group = this._formBuilder.group({
      taxAdvisorterms: ['', Validators.requiredTrue],

    });

  }


  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message!: string;
  imageName: any;

  //Gets called when the user selects an image
  public onFileChanged(event: any) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );
  }
  // retieve image

  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
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



  // Education
  taxAdvisorEducations(): FormArray {
    return this.Form3Group.get("taxAdvisorEducations") as FormArray;
  }
  newEducations(): FormGroup {
    return this._formBuilder.group({
      taxAdvisorTypeofDegree: '',
      taxAdvisorDegreeName: '',
      taxAdvisorCollegeName: '',
      taxAdvisorYearOfPassing: '',
      taxAdvisorPrimary: '',

    })
  }
  addEducation() {
    this.taxAdvisorEducations().push(this.newEducations());
  }
  removeEducation(i: number) {
    this.taxAdvisorEducations().removeAt(i);
  }

  // Certificates
  taxAdvisorCerts(): FormArray {
    return this.Form4Group.get("taxAdvisorCerts") as FormArray;
  }
  newcerts(): FormGroup {
    return this._formBuilder.group({
      taxAdvisorCertificateName: '',
      taxAdvisorIssuingAuthority: '',
      taxAdvisorDateofIssuance: '',
    })
  }
  addcerts() {
    this.taxAdvisorCerts().push(this.newcerts());
  }
  removecerts(i: number) {
    this.taxAdvisorCerts().removeAt(i);
  }

  // Major Client
  // clients(): FormArray {
  //   return this.secondFormGroup.get("clients") as FormArray;
  // }
  // newClients(): FormGroup {
  //   return this._formBuilder.group({
  //     majorClient: '',
  //   })
  // }
  // addClients() {
  //   this.clients().push(this.newClients());
  // }
  // removeClients(i: number) {
  //   this.clients().removeAt(i);
  // }

  // Accomplishments
  taxAdvisorAccomplishments(): FormArray {
    return this.Form2Group.get("taxAdvisorAccomplishments") as FormArray;
  }
  newAccomplishments(): FormGroup {
    return this._formBuilder.group({
      taxAdvisorHeading: '',
      taxAdvisorDesc: '',
    })
  }
  addAccomplishments() {
    this.taxAdvisorAccomplishments().push(this.newAccomplishments());
  }
  removeAccomplishments(i: number) {
    this.taxAdvisorAccomplishments().removeAt(i);
  }







  ngOnInit() {


    // tells page size in console
    // this.mediaSub = this.mediaObserver.media$.subscribe(
    //   (change:MediaChange)=>{
    //     console.log(change.mqAlias);
    //   }
    // )  


    // YearOfExpListService
    this.yearsOfExpList = this.yearOfExpListService.yearsOfExpList();

    // barMembershipList
    // this.barMembershipsList = this.barMembershipListService.barMembershipsList();

    // BankNameListServiceService
    this.bankNameList = this.bankNameListService.bankNameList();

    // typeOfAddressListService
    this.typeOfAddressList = this.typeOfAddressListService.typeOfAddressList();

    // TypeOfDegreeListService
    this.typeOfDegreeList = this.typeOfDegreeListService.typeOfDegreeList();

    // COURT OF PRATICE Service
    // this.courtOfPraticeList = this.courtOfPracticeService.courtOfPraticeList();

    // AREA OF PRATICE Service
    this.specialisationList = this.specialisationService.specialisationList();

    //Add Certs
    this.newAccomplishments();

    this.addEducation();

    this.addcerts();

    this.addAccomplishments();

    this.taxRegistrationPayload = new TaxRegistrationPayload;

  }


  // submit() {
  //     const validated=this.validateData();
  //   if(validated){
  //     console.log(this.registrationPayload)

  //     //Redirect to Welcome Registration Confirmation
  //     this.router.navigate(['/registrationConfirmation'])
  //   }else{
  //     //show error msg on registration screen
  //   }   
  // }
  // validateData():boolean {
  //   return true; //TODO: validate all fields
  // }

  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.FormGroup1.controls[control].hasError(error);
    // return this.Form2Group.controls[control].hasError(error);
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

  submit() {

    alert('Form Submitted succesfully!!!\n Check the values in browser console.');

    console.log("Without Stringify :", this.taxRegistrationPayload);

    this.stringifiedData = JSON.stringify(this.taxRegistrationPayload);
    console.log("With Stringify :", this.stringifiedData);


    // this.registrationService.registration(this.taxRegistrationPayload).subscribe((data) => {
    //   console.log('registration success');
    //   this.router.navigateByUrl('/registrationConfirmation');
    // }, (error) => {
    //   console.log('registration failed');
    //   this.router.navigateByUrl('/signupFailed');
    // });
  }


  Form1ToRegistrationPayload() {
    this.taxRegistrationPayload.taxAdvisorName = this.FormGroup1.value.taxAdvisorName;
    this.taxRegistrationPayload.taxAdvisorEmail = this.FormGroup1.value.taxAdvisorEmail;
    this.taxRegistrationPayload.taxAdvisorPhone = this.FormGroup1.value.taxAdvisorPhone;
    this.taxRegistrationPayload.taxAdvisorDoB = this.FormGroup1.value.taxAdvisorDoB;
    this.taxRegistrationPayload.taxAdvisorGender = this.FormGroup1.value.taxAdvisorGender;
    this.taxRegistrationPayload.taxAdvisorLanguage = this.FormGroup1.value.taxAdvisorLanguage;
    this.taxRegistrationPayload.taxAdvisorPhoto = this.FormGroup1.value.taxAdvisorPhoto;

    console.log("Form1ToRegistrationPayload");
    console.log(this.taxRegistrationPayload);

  }

  Form2ToRegistrationPayload() {
    this.taxRegistrationPayload.taxAdvisorAccomplishments = this.Form2Group.value.taxAdvisorAccomplishments;
    // this.taxRegistrationPayload.clients = this.Form2Group.value.clients;
    this.taxRegistrationPayload.taxAdvisorBaseCity = this.Form2Group.value.taxAdvisorBaseCity;
    // this.taxRegistrationPayload.enteredenrollment = this.Form2Group.value.enteredenrollment;
    this.taxRegistrationPayload.taxAdvisorLinkedinUrl = this.Form2Group.value.taxAdvisorLinkedinUrl;
    // this.taxRegistrationPayload.selectedAreaofpractice = this.Form2Group.value.selectedAreaofpractice;
    // this.taxRegistrationPayload.selectedCourtOfPractice = this.Form2Group.value.selectedCourtOfPractice;
    this.taxRegistrationPayload.taxAdvisorSpecialisation = this.Form2Group.value.taxAdvisorSpecialisation;
    this.taxRegistrationPayload.taxAdvisorYearsOfExp = this.Form2Group.value.taxAdvisorYearsOfExp;
    // this.taxRegistrationPayload.selectedBarMembership = this.Form2Group.value.selectedBarMembership;
    // this.taxRegistrationPayload.barCouncilId = this.Form2Group.value.barCouncilId;
    console.log("Form2ToRegistrationPayload");
    console.log(this.taxRegistrationPayload);


  }

  Form3ToRegistrationPayload() {
    this.taxRegistrationPayload.taxAdvisorEducations = this.Form3Group.value.taxAdvisorEducations;
    // this.taxRegistrationPayload.taxAdvisorEducations = this.Form3Group.value.taxAdvisorDegreeName;
    // this.taxRegistrationPayload.taxAdvisorEducations = this.Form3Group.value.taxAdvisorCollegeName;
    // this.taxRegistrationPayload.taxAdvisorEducations = this.Form3Group.value.taxAdvisorYearOfPassing;
    // this.taxRegistrationPayload.taxAdvisorEducations = this.Form3Group.value.taxAdvisorTypeofDegree;
    // this.taxRegistrationPayload.taxAdvisorEducations = this.Form3Group.value.taxAdvisorPrimary;
    console.log("Form3ToRegistrationPayload");
    console.log(this.taxRegistrationPayload);



  }
  Form4ToRegistrationPayload() {
    this.taxRegistrationPayload.taxAdvisorCerts = this.Form4Group.value.taxAdvisorCerts;
    console.log("Form4ToRegistrationPayload");
    console.log(this.taxRegistrationPayload);



  }
  Form5ToRegistrationPayload() {
    this.taxRegistrationPayload.taxAdvisorBeneficiaryName = this.Form5Group.value.taxAdvisorBeneficiaryName;
    this.taxRegistrationPayload.taxAdvisorAccountNumber = this.Form5Group.value.taxAdvisorAccountNumber;
    this.taxRegistrationPayload.taxAdvisorIfscCode = this.Form5Group.value.taxAdvisorIfscCode;
    this.taxRegistrationPayload.taxAdvisorConfirmAccountnumber = this.Form5Group.value.taxAdvisorConfirmAccountnumber;
    this.taxRegistrationPayload.taxAdvisorBankName = this.Form5Group.value.taxAdvisorBankName;
    console.log("Form5ToRegistrationPayload");
    console.log(this.taxRegistrationPayload);

  }
  Form6ToRegistrationPayload() {
    this.taxRegistrationPayload.taxAdvisorAddressline1 = this.Form6Group.value.taxAdvisorAddressline1;
    this.taxRegistrationPayload.taxAdvisorAddressline2 = this.Form6Group.value.taxAdvisorAddressline2;
    this.taxRegistrationPayload.taxAdvisorPinCode = this.Form6Group.value.taxAdvisorPinCode;
    this.taxRegistrationPayload.taxAdvisorCity = this.Form6Group.value.taxAdvisorCity;
    this.taxRegistrationPayload.taxAdvisorPinCodeArea = this.Form6Group.value.taxAdvisorPinCodeArea;
    this.taxRegistrationPayload.taxAdvisorState = this.Form6Group.value.taxAdvisorState;
    this.taxRegistrationPayload.taxAdvisorTypeofAddress = this.Form6Group.value.taxAdvisorTypeofAddress;
    console.log("Form6ToRegistrationPayload");
    console.log(this.taxRegistrationPayload);

  }
  Form7ToRegistrationPayload() {
    this.taxRegistrationPayload.taxAdvisorterms = this.Form7Group.value.taxAdvisorterms;
    console.log("Form7ToRegistrationPayload");
    console.log(this.taxRegistrationPayload);

  }

}
