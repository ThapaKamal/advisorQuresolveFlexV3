import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LanguageService } from './APIService/language.service';
import { LanguageDialogBoxComponent } from './language-dialog-box/language-dialog-box.component';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  displayedColumns: string[] = [ 'sn','value','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  languageForm!: FormGroup;


  constructor(private dialog:MatDialog,
    private api :LanguageService,
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
    this.dialog.open(LanguageDialogBoxComponent,{
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
       this.languageForm.reset();
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
    // this.dialog.open(ConfirmDeleteDialogBoxComponent);
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(){
    this.dialog.open(LanguageDialogBoxComponent,{
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
