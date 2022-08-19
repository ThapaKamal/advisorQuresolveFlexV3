import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpEventType  } from '@angular/common/http';

// SERVICES
import { AreaOfPraticeListService } from '../legalService/area-of-pratice-list.service';
import { BankNameListService } from '../legalService/bank-name-list.service';
import { BarMembershipListService } from '../legalService/bar-membership-list.service';
import { CourtOfPracticeService } from '../legalService/court-of-practice.service';
import { TypeOfAddressListService } from '../legalService/type-of-address-list.service';
import { TypeOfDegreeListService } from '../legalService/type-of-degree-list.service';
import { YearOfExpListService } from '../legalService/year-of-exp-list.service';
import { RegistrationServiceService } from './service/registration-service.service';

// PAYLOAD
import { RegistrationPayload } from './Payload/registrationPayload';
import { CustomValidationService } from './service/custom-validation.service';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscriber, Subscription } from 'rxjs';
import { GenderListService } from '../legalService/gender-list.service';
import { LanguageListService } from '../legalService/language-list.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  forthFormGroup!: FormGroup;
  fifthFormGroup!: FormGroup;
  sixthFormGroup!: FormGroup;
  seventhFormGroup!: FormGroup;

  customErrors = { required: 'Please accept the terms' }

  registrationPayload!: RegistrationPayload;

  hide = true;


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

  // clients! :{ heading: string; desc: string; }[];

  // JSON FORMAT
  stringifiedData: any;

  // checkBoxIsselected
  selected = -1;

  // languageList: string[] = ['English', 'Hindi'];

  // Image
  dataimage: any;

  @ViewChild('fileInput')
  fileInput!: ElementRef;
  fileAttr = '';
  file!: File;


  genderModel: any;

  gender$: any;
  language$: any;


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
      this.thirdFormGroup.value.educations;

    }
  }
  private mediaSub!: Subscription;

  constructor(
    private router: Router,
    private _formBuilder: FormBuilder,
    private courtOfPracticeService: CourtOfPracticeService,
    private areaOfPraticeListService: AreaOfPraticeListService,
    private yearOfExpListService: YearOfExpListService,
    private barMembershipListService: BarMembershipListService,
    private bankNameListService: BankNameListService,
    private typeOfAddressListService: TypeOfAddressListService,
    private typeOfDegreeListService: TypeOfDegreeListService,
    private httpClient: HttpClient,
    private registrationService: RegistrationServiceService,
    private customValidator: CustomValidationService,
    private mediaObserver: MediaObserver,
    private genderListService: GenderListService,
    private languageListService: LanguageListService,

  ) {

    this.firstFormGroup = this._formBuilder.group({
      enteredName: ['', Validators.required],
      enteredEmail: new FormControl('', [Validators.required, Validators.email]),
      enteredPhone: new FormControl('+91-', [
        Validators.required,
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      enteredDoB: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      selectedlanguage: new FormControl('', Validators.required),
      uploadedPhoto: new FormControl('', Validators.required),
    });

    this.secondFormGroup = this._formBuilder.group({
      accomplishments: this._formBuilder.array([]),
      clients: this._formBuilder.array([]),
      selectedBaseCity: ['', Validators.required],
      enteredenrollment: new FormControl('', Validators.required),
      linkedinUrl: new FormControl('', [
        Validators.pattern("^https?://((www|\w\w)\.)?linkedin.com/((in/[^/]+/?)|(pub/[^/]+/((\w|\d)+/?){3}))$")]),
      selectedAreaofpractice: new FormControl('', [
        Validators.required,
        Validators.maxLength(5)
      ]),
      selectedCourtOfPractice: new FormControl('', [
        Validators.required,
        Validators.max(5)
      ]),
      selectedYearsOfExp: new FormControl('', Validators.required),
      selectedBarMembership: new FormControl('', Validators.required),
      barCouncilId: new FormControl('', Validators.required),

    });

    this.thirdFormGroup = this._formBuilder.group({
      educations: this._formBuilder.array([]),
      enteredDegreeName: ['', Validators.required],
      enteredCollegeName: new FormControl('', Validators.required),
      yearOfPassing: new FormControl('', Validators.required),
      selectedTypeofDegree: new FormControl('', Validators.required),
      primary: new FormControl('', Validators.required),
    });

    this.forthFormGroup = this._formBuilder.group({
      certs: this._formBuilder.array([]),
      enteredCertificateName: [''],
      enteredIssuingAuthority: new FormControl(''),
      dateofIssuance: new FormControl('')
    });

    this.fifthFormGroup = this._formBuilder.group(
      {
        enteredBeneficiaryName: ['', Validators.required],
        selectedBankName: new FormControl('', Validators.required),
        enteredIfscCode: new FormControl('', [
          Validators.required,
          Validators.pattern("^[A-Z]{4}0[A-Z0-9]{6}$")]),
        enteredAccountNumber: new FormControl('', [
          Validators.required,
          Validators.minLength(10)
        ]),
        confirmAccountnumber: new FormControl('', Validators.required),
      },
      {
        validator: this.customValidator.accountMatchValidator(
          "enteredAccountNumber",
          "confirmAccountnumber"
        )
      }
    );

    this.sixthFormGroup = this._formBuilder.group({
      enteredAddressline1: ['', Validators.required],
      enteredAddressline2: new FormControl(''),
      enteredPinCode: new FormControl('', Validators.required),
      enteredCity: new FormControl('', Validators.required),
      enteredPinCodeArea: new FormControl('', Validators.required),
      enteredState: new FormControl('', Validators.required),
      selectedTypeofAddress: new FormControl('', Validators.required),
    });

    this.seventhFormGroup = this._formBuilder.group({
      terms: ['', Validators.requiredTrue],

    });

  }

  uploadedImage!: File;
  dbImage: any;
  postResponse: any;
  successResponse!: string;
  image: any;

  public onImageUpload(event:any) {    
    this.uploadedImage = event.target.files[0];
  }

  imageUploadAction() {    
    const imageFormData = new FormData();
    imageFormData.append('image', this.uploadedImage);
  

    this.httpClient.post('http://localhost:8080/api/upload/image/', imageFormData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) { 
          this.postResponse = response;                
          this.successResponse = this.postResponse.body.message;
        } else {
          this.successResponse = 'Image not uploaded due to some error!';
        }
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
  educations(): FormArray {
    return this.thirdFormGroup.get("educations") as FormArray;
  }
  newEducations(): FormGroup {
    return this._formBuilder.group({
      selectedTypeofDegree: '',
      enteredDegreeName: '',
      enteredCollegeName: '',
      yearOfPassing: '',
      primary: '',

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
    return this.forthFormGroup.get("certs") as FormArray;
  }
  newcerts(): FormGroup {
    return this._formBuilder.group({
      enteredCertificateName: '',
      enteredIssuingAuthority: '',
      dateofIssuance: '',
    })
  }
  addcerts() {
    this.certs().push(this.newcerts());
  }
  removecerts(i: number) {
    this.certs().removeAt(i);
  }

  // Major Client
  clients(): FormArray {
    return this.secondFormGroup.get("clients") as FormArray;
  }
  newClients(): FormGroup {
    return this._formBuilder.group({
      majorClient: '',
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
    return this.secondFormGroup.get("accomplishments") as FormArray;
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

  genderList() {
    return this.genderListService.getGenderList();
  }

  languageList(){
    return this.languageListService.getlanguage();
  }




  ngOnInit() {

    this.gender$ = this.genderList();
    this.language$ = this.languageList();

    // tells page size in console
    // this.mediaSub = this.mediaObserver.media$.subscribe(
    //   (change:MediaChange)=>{
    //     console.log(change.mqAlias);
    //   }
    // )  


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

    // GenderList Service
    this.getGenderList = this.genderListService.getGenderList();

    // LanguageList Service
    this.getlanguage = this.languageListService.getlanguage();

    //Add Certs
    this.addcerts();

    this.addEducation();

    this.addClients();

    this.addAccomplishments();

    this.registrationPayload = new RegistrationPayload;

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
    return this.firstFormGroup.controls[control].hasError(error);
    // return this.secondFormGroup.controls[control].hasError(error);
  }
  public errorHandling1 = (control: string, error: string) => {
    return this.secondFormGroup.controls[control].hasError(error);
  }
  public errorHandling2 = (control: string, error: string) => {
    return this.thirdFormGroup.controls[control].hasError(error);
  }
  public errorHandling3 = (control: string, error: string) => {
    return this.forthFormGroup.controls[control].hasError(error);
  }
  public errorHandling4 = (control: string, error: string) => {
    return this.fifthFormGroup.controls[control].hasError(error);
  }
  public errorHandling5 = (control: string, error: string) => {
    return this.sixthFormGroup.controls[control].hasError(error);
  }

  submit() {

    alert('Form Submitted succesfully!!!\n Check the values in browser console.');

    console.log("Without Stringify :", this.registrationPayload);

    this.stringifiedData = JSON.stringify(this.registrationPayload);
    console.log("With Stringify :", this.stringifiedData);


    this.registrationService.registration(this.registrationPayload).subscribe((data) => {
      console.log('registration success');
      this.router.navigateByUrl('/registrationConfirmation');
    }, (error) => {
      console.log('registration failed');
      this.router.navigateByUrl('/signupFailed');
    });
  }


  firstFormToRegistrationPayload() {
    this.registrationPayload.enteredName = this.firstFormGroup.value.enteredName;
    this.registrationPayload.enteredEmail = this.firstFormGroup.value.enteredEmail;
    this.registrationPayload.enteredPhone = this.firstFormGroup.value.enteredPhone;
    this.registrationPayload.enteredDoB = this.firstFormGroup.value.enteredDoB;
    this.registrationPayload.gender = this.firstFormGroup.value.gender;
    this.registrationPayload.selectedlanguage = this.firstFormGroup.value.selectedlanguage;
    this.registrationPayload.uploadedPhoto = this.firstFormGroup.value.uploadedPhoto;

  }

  secondFormToRegistrationPayload() {
    this.registrationPayload.accomplishments = this.secondFormGroup.value.accomplishments;
    this.registrationPayload.clients = this.secondFormGroup.value.clients;
    this.registrationPayload.selectedBaseCity = this.secondFormGroup.value.selectedBaseCity;
    this.registrationPayload.enteredenrollment = this.secondFormGroup.value.enteredenrollment;
    this.registrationPayload.linkedinUrl = this.secondFormGroup.value.linkedinUrl;
    this.registrationPayload.selectedAreaofpractice = this.secondFormGroup.value.selectedAreaofpractice;
    this.registrationPayload.selectedCourtOfPractice = this.secondFormGroup.value.selectedCourtOfPractice;
    this.registrationPayload.selectedYearsOfExp = this.secondFormGroup.value.selectedYearsOfExp;
    this.registrationPayload.selectedBarMembership = this.secondFormGroup.value.selectedBarMembership;
    this.registrationPayload.barCouncilId = this.secondFormGroup.value.barCouncilId;

  }

  thirdFormToRegistrationPayload() {
    // isPrimarySelected();
    this.registrationPayload.educations = this.thirdFormGroup.value.educations;

  }
  forthFormToRegistrationPayload() {
    this.registrationPayload.certs = this.forthFormGroup.value.certs;

  }
  fifthFormToRegistrationPayload() {
    this.registrationPayload.enteredBeneficiaryName = this.fifthFormGroup.value.enteredBeneficiaryName;
    this.registrationPayload.enteredAccountNumber = this.fifthFormGroup.value.enteredAccountNumber;
    this.registrationPayload.enteredIfscCode = this.fifthFormGroup.value.enteredIfscCode;
    this.registrationPayload.confirmAccountnumber = this.fifthFormGroup.value.confirmAccountnumber;
    this.registrationPayload.selectedBankName = this.fifthFormGroup.value.selectedBankName;

  }
  sixthFormToRegistrationPayload() {
    this.registrationPayload.enteredAddressline1 = this.sixthFormGroup.value.enteredAddressline1;
    this.registrationPayload.enteredAddressline2 = this.sixthFormGroup.value.enteredAddressline2;
    this.registrationPayload.enteredPinCode = this.sixthFormGroup.value.enteredPinCode;
    this.registrationPayload.enteredCity = this.sixthFormGroup.value.enteredCity;
    this.registrationPayload.enteredPinCodeArea = this.sixthFormGroup.value.enteredPinCodeArea;
    this.registrationPayload.enteredState = this.sixthFormGroup.value.enteredState;
    this.registrationPayload.selectedTypeofAddress = this.sixthFormGroup.value.selectedTypeofAddress;

  }
  seventhFormToRegistrationPayload() {
    this.registrationPayload.terms = this.seventhFormGroup.value.terms;
  }

}




