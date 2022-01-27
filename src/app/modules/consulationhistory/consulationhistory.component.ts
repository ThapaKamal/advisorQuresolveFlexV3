import { Component, OnInit, ViewChild } from '@angular/core'; 
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface History {
  sno: string;
  id: string;
  name: string;
  place: string;
  date: string;
  caseType: string;
}

@Component({
  selector: 'app-consulationhistory',
  templateUrl: './consulationhistory.component.html',
  styleUrls: ['./consulationhistory.component.scss']
})
export class ConsulationhistoryComponent implements OnInit {

  dataSource!: MatTableDataSource<History>;
  history!: History[];
  columns: string[] = ['sno','name','place','caseType','date','id']

   @ViewChild(MatSort, { static: true }) sort!: MatSort;
   @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor() {
    this.history = [{
      sno:'1',
      id:'1',
      name:'Mr.Ankit Kumar',
      date:'2020-02-20 10:10:12',
      place:' New-Delhi',
      caseType:'Divorce , High Court',
      
    },
    {
      sno:'2',
      id:'2',
      name:'Random',
      date:'2020-02-20 10:10:12',
      place:'Random',
      caseType:'random',
    },
    {
      sno:'3',
      id:'3',
      name:'Random',
      date:'2020-02-20 10:10:12',
      place:'Random',
      caseType:'random',
    },
    {
      sno:'4',
      id:'4',
      name:'Random',
      date:'2020-02-20 10:10:12',
      place:'Random',
      caseType:'random',
    },
    {
      sno:'5',
      id:'5',
      name:'Random',
      date:'2020-02-20 10:10:12',
      place:'Random',
      caseType:'random',
    },
    {
      sno:'6',
      id:'6',
      name:'Random',
      date:'2020-02-20 10:10:12',
      place:'Random',
      caseType:'random',
    }];

    this.dataSource = new MatTableDataSource(this.history);
   }
  ngOnInit() {
    this.dataSource.sort =this.sort;
    this.dataSource.paginator =this.paginator;
  }
  applyFilter(event: any){
    const filterValue =(event.target as HTMLInputElement).value;

    this.dataSource.filter =filterValue.trim().toLowerCase();
  }

}
