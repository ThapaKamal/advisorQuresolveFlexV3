import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BankNameService } from '../APIService/bank-name.service';

@Component({
  selector: 'app-bank-name-dialog-box',
  templateUrl: './bank-name-dialog-box.component.html',
  styleUrls: ['./bank-name-dialog-box.component.scss']
})
export class BankNameDialogBoxComponent implements OnInit {

  bankNameForm!: FormGroup;
  actionBtn: string="Save";

  constructor(private formBuilder:FormBuilder,
    private api:BankNameService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<BankNameDialogBoxComponent>
    ) { }

  ngOnInit(){
    this.bankNameForm =this.formBuilder.group({
      // id:[''],
      value:['',Validators.required]
    });

    if(this.editData){
      this.actionBtn="Update"
      this.bankNameForm.controls['value'].setValue(this.editData.value);
    }
  }

  addValue(){
    if(!this.editData){
      if(this.bankNameForm.valid){
        this.api.postValue(this.bankNameForm.value)
        .subscribe({
          next:(res)=>{
            alert("Value added Successfully")
            this.bankNameForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            alert("Error while adding the value")
          }
        })
      }
    }
    else{
      this.updateData();
    }
  }

  updateData(){
    this.api.putValue(this.bankNameForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
          alert("Value Updated Successfully");
          this.bankNameForm.reset();
          this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error while Updating the record!!");
      }
    })
  }
}

