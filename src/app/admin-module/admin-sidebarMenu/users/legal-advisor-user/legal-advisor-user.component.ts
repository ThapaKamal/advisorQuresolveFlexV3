import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'; 
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface Appointment {
  sno: string;
  id: string; // accept
  clientName: string;
  place: string;
  date: string;
  caseType: string;
}


@Component({
  selector: 'app-legal-advisor-user',
  templateUrl: './legal-advisor-user.component.html',
  styleUrls: ['./legal-advisor-user.component.scss']
})
export class LegalAdvisorUserComponent implements OnInit {

  fileName= 'ExcelSheet.xlsx';
  dataSource!: MatTableDataSource<Appointment>;
  appointment!: Appointment[];
  columns: string[] = ['sno','clientName','place','caseType','date','id']

   @ViewChild(MatSort, { static: true }) sort!: MatSort;
   @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
   @ViewChild('TABLE') table!: ElementRef ;

  constructor() {
    this.appointment = [{
      sno:'1',
      id:'1',
      clientName:'Mr.Ankit Kumar',
      date:'2020-02-20 10:10:12',
      place:' New-Delhi',
      caseType:'Divorce,High Court',
    },
    {
      sno:'2',
      id:'2',
      clientName:'Random',
      date:'2020-02-20 10:10:12',
      place:'Random',
      caseType:'random',
    },
    {
      sno:'3',
      id:'3',

      clientName:'Random',
      date:'2020-02-20 10:10:12',
      place:'Random',
      caseType:'random',
    },
    {
      sno:'4',
      id:'4',
      clientName:'Random',
      date:'2020-02-20 10:10:12',
      place:'Random',
      caseType:'random',
    },
    {
      sno:'5',
      id:'5',
      clientName:'Random',
      date:'2020-02-20 10:10:12',
      place:'Random',
      caseType:'random',
    },
    {
      sno:'6',
      id:'6',
      clientName:'Random',
      date:'2020-02-20 10:10:12',
      place:'Random',
      caseType:'random',
    }];

    this.dataSource = new MatTableDataSource(this.appointment);
  }
  ngOnInit() {
    this.dataSource.sort =this.sort;
    this.dataSource.paginator =this.paginator;
  }
  applyFilter(event: any){
    const filterValue =(event.target as HTMLInputElement).value;

    this.dataSource.filter =filterValue.trim().toLowerCase();
  }

//   exportAsExcel(){
//   const workSheet = XLSX.utils.json_to_sheet(this.dataSource.data, {header:['dataprop1', 'dataprop2']});
//   const workBook: XLSX.WorkBook = XLSX.utils.book_new();
//   XLSX.utils.book_append_sheet(workBook, workSheet, 'SheetName');
//   XLSX.writeFile(workBook, 'filename.xlsx');
// }
}
