import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { id } from 'date-fns/locale';
import { AreaofpracticeService } from '../../area-of-practice/APIService/areaofpractice.service';


@Component({
  selector: 'app-confirm-delete-dialog-box',
  templateUrl: './confirm-delete-dialog-box.component.html',
  styleUrls: ['./confirm-delete-dialog-box.component.scss']
})


export class ConfirmDeleteDialogBoxComponent implements OnInit {


  title!: string;
  message!: string;
  constructor(  private api :AreaofpracticeService,
    public dialogRef: MatDialogRef<ConfirmDeleteDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    
    ) { }

    // deleteValue(id){
    //    this.api.deleteValue(id)
    // .subscribe({
    //   next:(res)=>{
    //   this.yearOfExpForm.reset();
    // },
    //   error:()=>{
    //     alert("Error while Deleting the product!!")
    //   }
    // })

    // }
    
  ngOnInit(): void {
  }


}



