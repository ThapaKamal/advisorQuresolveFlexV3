import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


interface Appointment {
  sno: string;
  id: string; // accept
  id1: string; // reject
  id2: string; // reschedule meeting
  clientName: string;
  place: string;
  date: string;
  caseType: string;
}

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  
  dataSource!: MatTableDataSource<Appointment>;
  appointment!: Appointment[];
  columns: string[] = ['sno','clientName','place','caseType','date','id','id1','id2']

   @ViewChild(MatSort, { static: true }) sort!: MatSort;
   @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


  constructor() { 

  this.appointment = [{
      sno:'1',
      id:'1',
      id1:'1',
      id2:'1',
      clientName:'Mr.Ankit Kumar',
      date:'2020-02-20 10:10:12',
      place:' New-Delhi',
      caseType:'Divorce,High Court',
      
    },
    {
      sno:'2',
      id:'2',
      id1:'2',
      id2:'2',
      clientName:'Random',
      date:'2020-02-20 10:10:12',
      place:'Random',
      caseType:'random',
    },
    {
      sno:'3',
      id:'3',
      id1:'3',
      id2:'3',
      clientName:'Random',
      date:'2020-02-20 10:10:12',
      place:'Random',
      caseType:'random',
    },
    {
      sno:'4',
      id:'4',
      id1:'4',
      id2:'4',
      clientName:'Random',
      date:'2020-02-20 10:10:12',
      place:'Random',
      caseType:'random',
    },
    {
      sno:'5',
      id:'5',
      id1:'5',
      id2:'5',
      clientName:'Random',
      date:'2020-02-20 10:10:12',
      place:'Random',
      caseType:'random',
    },
    {
      sno:'6',
      id:'6',
      id1:'6',
      id2:'6',
      clientName:'Random',
      date:'2020-02-20 10:10:12',
      place:'Random',
      caseType:'random',
    }];

    this.dataSource = new MatTableDataSource(this.appointment);
  }

  ngOnInit(){
    this.dataSource.sort =this.sort;
    this.dataSource.paginator =this.paginator;
  }
  applyFilter(event: any){
    const filterValue =(event.target as HTMLInputElement).value;

    this.dataSource.filter =filterValue.trim().toLowerCase();
  }
}
