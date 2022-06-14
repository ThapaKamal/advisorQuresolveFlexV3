import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDeleteDialogBoxComponent } from '../Common/confirm-delete-dialog-box/confirm-delete-dialog-box.component';
import { YearofexpService } from './APIService/yearofexp.service';
import { YearofexpDialogboxComponent } from './yearofexp-dialogbox/yearofexp-dialogbox.component';

@Component({
  selector: 'app-year-of-experience',
  templateUrl: './year-of-experience.component.html',
  styleUrls: ['./year-of-experience.component.scss']
})
export class YearOfExperienceComponent implements OnInit {
  displayedColumns: string[] = [ 'sn','value','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  yearOfExpForm!: FormGroup;


  constructor(private dialog:MatDialog,
    private api :YearofexpService,
 ) 
  { }

  getAllValues(){
    this.api.getValue()
    .subscribe({
      next:(res)=>{
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort
      },
      error:(error)=>{
        alert("Error while fetching the Records!!")
      }
    })
  }
  editProduct(row: any){
    this.dialog.open(YearofexpDialogboxComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val ==='update'){
        this.getAllValues();
      }
    })
  }

  deleteValue(id:number){
    this.api.deleteValue(id)
    .subscribe({
      next:(res)=>{
      // this.confirmDeleteDialog();
       this.yearOfExpForm.reset();
          // this.dialogRef.close('update');
       
        
        // this.dialog.open(ConfirmDeleteDialogBoxComponent,{
        //   width:'30%',
        // })
       
        
      },
      error:()=>{
        alert("Error while Deleting the product!!")
      }
    })
  }
  confirmDeleteDialog() {
    this.dialog.open(ConfirmDeleteDialogBoxComponent);
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(){
    this.dialog.open(YearofexpDialogboxComponent,{
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val ==='save'){
        this.getAllValues();
      }
    })

  }
  ngOnInit() {
    this.getAllValues();
  }

}
