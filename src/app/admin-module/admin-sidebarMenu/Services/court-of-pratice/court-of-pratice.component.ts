import { Component, OnInit,ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from './APIService/api.service';
import { DialogboxComponent } from './dialogbox/dialogbox/dialogbox.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { is } from 'date-fns/locale';

@Component({
  selector: 'app-court-of-pratice',
  templateUrl: './court-of-pratice.component.html',
  styleUrls: ['./court-of-pratice.component.scss']
})
export class CourtOfPraticeComponent implements OnInit {
  displayedColumns: string[] = [ 'sn','value','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog:MatDialog,
    private api :ApiService) 
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
    this.dialog.open(DialogboxComponent,{
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
        alert("Value Deleted Successfully")
      },
      error:()=>{
        alert("Error while Deleting the product!!")
      }
    })
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(){
    this.dialog.open(DialogboxComponent,{
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
