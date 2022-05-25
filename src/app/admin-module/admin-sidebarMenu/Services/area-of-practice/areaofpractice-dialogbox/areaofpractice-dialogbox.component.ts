import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AreaofpracticeService } from '../APIService/areaofpractice.service';

@Component({
  selector: 'app-areaofpractice-dialogbox',
  templateUrl: './areaofpractice-dialogbox.component.html',
  styleUrls: ['./areaofpractice-dialogbox.component.scss']
})
export class AreaofpracticeDialogboxComponent implements OnInit {
  areaOfPraticeForm!: FormGroup;
  actionBtn: string="Save";

  constructor(private formBuilder:FormBuilder,
    private api:AreaofpracticeService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<AreaofpracticeDialogboxComponent>
    ) { }

  ngOnInit(){
    this.areaOfPraticeForm =this.formBuilder.group({
      // id:[''],
      value:['',Validators.required]
    });

    if(this.editData){
      this.actionBtn="Update"
      this.areaOfPraticeForm.controls['value'].setValue(this.editData.value);
    }
  }

  addValue(){
    if(!this.editData){
      if(this.areaOfPraticeForm.valid){
        this.api.postValue(this.areaOfPraticeForm.value)
        .subscribe({
          next:(res)=>{
            alert("Value added Successfully")
            this.areaOfPraticeForm.reset();
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
    this.api.putValue(this.areaOfPraticeForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
          alert("Value Updated Successfully");
          this.areaOfPraticeForm.reset();
          this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error while Updating the record!!");
      }
    })
  }
}

