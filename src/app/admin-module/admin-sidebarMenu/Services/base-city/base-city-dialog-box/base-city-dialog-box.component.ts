import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseCityService } from '../APIService/base-city.service';

@Component({
  selector: 'app-base-city-dialog-box',
  templateUrl: './base-city-dialog-box.component.html',
  styleUrls: ['./base-city-dialog-box.component.scss']
})
export class BaseCityDialogBoxComponent implements OnInit {

 baseCityForm!: FormGroup;
  actionBtn: string="Save";

  constructor(private formBuilder:FormBuilder,
    private api:BaseCityService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<BaseCityDialogBoxComponent>
    ) { }

  ngOnInit(){
    this.baseCityForm =this.formBuilder.group({
      // id:[''],
      value:['',Validators.required]
    });

    if(this.editData){
      this.actionBtn="Update"
      this.baseCityForm.controls['value'].setValue(this.editData.value);
    }
  }

  addValue(){
    if(!this.editData){
      if(this.baseCityForm.valid){
        this.api.postValue(this.baseCityForm.value)
        .subscribe({
          next:(res)=>{
            alert("Value added Successfully")
            this.baseCityForm.reset();
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
    this.api.putValue(this.baseCityForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
          alert("Value Updated Successfully");
          this.baseCityForm.reset();
          this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error while Updating the record!!");
      }
    })
  }
}

