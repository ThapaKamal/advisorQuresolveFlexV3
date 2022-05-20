import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { YearofexpService } from '../APIService/yearofexp.service';

@Component({
  selector: 'app-yearofexp-dialogbox',
  templateUrl: './yearofexp-dialogbox.component.html',
  styleUrls: ['./yearofexp-dialogbox.component.scss']
})
export class YearofexpDialogboxComponent implements OnInit {
  yearOfExpForm!: FormGroup;
  actionBtn: string="Save";

  constructor(private formBuilder:FormBuilder,
    private api:YearofexpService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<YearofexpDialogboxComponent>
    ) { }

  ngOnInit(){
    this.yearOfExpForm =this.formBuilder.group({
      // id:[''],
      value:['',Validators.required]
    });

    if(this.editData){
      this.actionBtn="Update"
      this.yearOfExpForm.controls['value'].setValue(this.editData.value);
    }
  }

  addValue(){
    if(!this.editData){
      if(this.yearOfExpForm.valid){
        this.api.postValue(this.yearOfExpForm.value)
        .subscribe({
          next:(res)=>{
            alert("Value added Successfully")
            this.yearOfExpForm.reset();
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
    this.api.putValue(this.yearOfExpForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
          alert("Value Updated Successfully");
          this.yearOfExpForm.reset();
          this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error while Updating the record!!");
      }
    })
  }
}

