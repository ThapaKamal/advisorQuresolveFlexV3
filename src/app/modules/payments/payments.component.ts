import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BankNameListService } from 'src/app/legaladvisor/legalService/bank-name-list.service';
import { CustomValidationService } from 'src/app/legaladvisor/registration/service/custom-validation.service';
import { BankName } from '../profile/Models/bankName';

interface Appointment {
  sno: string;
  time: string;
  clientName: string;
  place: string;
  date: string;
  payment: string;
  amount: string;
}

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  bankName$: any;


  dataSource!: MatTableDataSource<Appointment>;
  appointment!: Appointment[];
  columns: string[] = ['sno','clientName','place','time','date','payment','amount']

   @ViewChild(MatSort, { static: true }) sort!: MatSort;
   @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


   BankFormGroup!: FormGroup;
   
   bankNameList: any = [];


  enableMode: boolean = true;

  constructor(    
    private _formBuilder: FormBuilder,
    private customValidator: CustomValidationService,
    private bankNameListService: BankNameListService,
    
    ) { 

    this.BankFormGroup = this._formBuilder.group({
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


  this.appointment = [{
      sno:'1',
      time:'1:30 PM',
      clientName:'Mr.Ankit Kumar',
      date:'2020-02-20 10:10:12',
      place:'New-Delhi',
      payment:'Payment Received',
      amount:'Rs. 500/-',
    },
    {
      sno:'2',
      time:'5:30 PM',
      clientName:'Random',
      date:'2020-02-20 10:10:12',
      place:'Random',
      payment:'Payment Received',
      amount:'Rs. 500/-',
    },
    {
      sno:'3',
      time:'8:00 PM',
      clientName:'Random',
      date:'2020-02-20 10:10:12',
      place:'Random',
      payment:'Payment Received',
      amount:'Rs. 500/-',
    },
    {
      sno:'4',
      time:'4:00 PM',
      clientName:'Random',
      date:'2020-02-20 10:10:12',
      place:'Random',
      payment:'Payment Received',
      amount:'Rs. 500/-',
    },
    {
      sno:'5',
      time:'7:54 PM',
      clientName:'Random',
      date:'2020-02-20 10:10:12',
      place:'Random',
      payment:'Payment Received',
      amount:'Rs. 500/-',
    },
    {
      sno:'6',
      time:'6:30 PM',
      clientName:'Random',
      date:'2020-02-20 10:10:12',
      place:'Random',
      payment:'Payment Received',
      amount:'Rs. 500/-',
    }];

    this.dataSource = new MatTableDataSource(this.appointment);
  }

  bankName(){
    return this.bankNameListService.getBankNameList();
  }

  ngOnInit(){
    this.dataSource.sort =this.sort;
    this.dataSource.paginator =this.paginator;

    this.bankName$ = this.bankName();

   // BankNameListServiceService
   this.bankNameList = this.bankNameListService.getBankNameList();

  }

  


  applyFilter(event: any){
    const filterValue =(event.target as HTMLInputElement).value;

    this.dataSource.filter =filterValue.trim().toLowerCase();
  }


  submit() {
    alert('Updated Values Submitted succesfully!!!.');
    console.log();
    window.location.reload();
  }


  onEdit(control: AbstractControl) {
    control.status === 'DISABLED' ? control.enable() : control.disable();
  }

  enableSave() {
    this.enableMode = !this.enableMode;
  }

  public errorHandling = (control: string, error: string) => {
    return this.BankFormGroup.controls[control].hasError(error);
  }
}


