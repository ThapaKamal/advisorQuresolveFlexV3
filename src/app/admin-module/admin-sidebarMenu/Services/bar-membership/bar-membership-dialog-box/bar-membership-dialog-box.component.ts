import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BarMembershipService } from '../APIService/bar-membership.service';

@Component({
  selector: 'app-bar-membership-dialog-box',
  templateUrl: './bar-membership-dialog-box.component.html',
  styleUrls: ['./bar-membership-dialog-box.component.scss']
})
export class BarMembershipDialogBoxComponent implements OnInit {

  barMembershipForm!: FormGroup;
  actionBtn: string="Save";

  constructor(private formBuilder:FormBuilder,
    private api:BarMembershipService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<BarMembershipDialogBoxComponent>
    ) { }

  ngOnInit(){
    this.barMembershipForm =this.formBuilder.group({
      // id:[''],
      value:['',Validators.required]
    });

    if(this.editData){
      this.actionBtn="Update"
      this.barMembershipForm.controls['value'].setValue(this.editData.value);
    }
  }

  addValue(){
    if(!this.editData){
      if(this.barMembershipForm.valid){
        this.api.postValue(this.barMembershipForm.value)
        .subscribe({
          next:(res)=>{
            alert("Value added Successfully")
            this.barMembershipForm.reset();
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
    this.api.putValue(this.barMembershipForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
          alert("Value Updated Successfully");
          this.barMembershipForm.reset();
          this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error while Updating the record!!");
      }
    })
  }
}
