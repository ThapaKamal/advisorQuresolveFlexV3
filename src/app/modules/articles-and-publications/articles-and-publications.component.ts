import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


interface Appointment {
  sno: string;
  time: string;
  clientName: string;
  place: string;
  date: string;
  payment: string;
  amount: string;
}


@Component({
  selector: 'app-articles-and-publications',
  templateUrl: './articles-and-publications.component.html',
  styleUrls: ['./articles-and-publications.component.scss']
})
export class ArticlesAndPublicationsComponent implements OnInit {

  dataSource!: MatTableDataSource<Appointment>;
  appointment!: Appointment[];
  columns: string[] = ['sno','clientName','place','time','date','payment','amount']

   @ViewChild(MatSort, { static: true }) sort!: MatSort;
   @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


  constructor( ) { 

  this.appointment = [{
      sno:'1',
      time:'1:30 PM',
      clientName:'Mr.Ankit Kumar',
      date:'2020-02-20 10:10:12',
      place:'New-Delhi',
      payment:'Payment Received',
      amount:'Rs. 500/-',
    },
    {
      sno:'2',
      time:'5:30 PM',
      clientName:'Random',
      date:'2020-02-20 10:10:12',
      place:'Random',
      payment:'Payment Received',
      amount:'Rs. 500/-',
    },
    {
      sno:'3',
      time:'8:00 PM',
      clientName:'Random',
      date:'2020-02-20 10:10:12',
      place:'Random',
      payment:'Payment Received',
      amount:'Rs. 500/-',
    },
    {
      sno:'4',
      time:'4:00 PM',
      clientName:'Random',
      date:'2020-02-20 10:10:12',
      place:'Random',
      payment:'Payment Received',
      amount:'Rs. 500/-',
    },
    {
      sno:'5',
      time:'7:54 PM',
      clientName:'Random',
      date:'2020-02-20 10:10:12',
      place:'Random',
      payment:'Payment Received',
      amount:'Rs. 500/-',
    },
    {
      sno:'6',
      time:'6:30 PM',
      clientName:'Random',
      date:'2020-02-20 10:10:12',
      place:'Random',
      payment:'Payment Received',
      amount:'Rs. 500/-',
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