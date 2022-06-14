import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LanguageService } from '../APIService/language.service';

@Component({
  selector: 'app-language-dialog-box',
  templateUrl: './language-dialog-box.component.html',
  styleUrls: ['./language-dialog-box.component.scss']
})
export class LanguageDialogBoxComponent implements OnInit {

  languageForm!: FormGroup;
  actionBtn: string="Save";

  constructor(private formBuilder:FormBuilder,
    private api:LanguageService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<LanguageDialogBoxComponent>
    ) { }

  ngOnInit(){
    this.languageForm =this.formBuilder.group({
      // id:[''],
      value:['',Validators.required]
    });

    if(this.editData){
      this.actionBtn="Update"
      this.languageForm.controls['value'].setValue(this.editData.value);
    }
  }

  addValue(){
    if(!this.editData){
      if(this.languageForm.valid){
        this.api.postValue(this.languageForm.value)
        .subscribe({
          next:(res)=>{
            alert("Value added Successfully")
            this.languageForm.reset();
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
    this.api.putValue(this.languageForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
          alert("Value Updated Successfully");
          this.languageForm.reset();
          this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error while Updating the record!!");
      }
    })
  }
}

