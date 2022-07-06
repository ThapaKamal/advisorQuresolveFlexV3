import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


// interface Appointment {
//   sno: string;
//   title: string; // accept
//   body: string; // reject
//   created: string; // reschedule meeting
//   modified: string;
//   published: string;
//   url: string;
//   user_id: string;
//   view: string;
// }


@Component({
  selector: 'app-articles-and-publications',
  templateUrl: './articles-and-publications.component.html',
  styleUrls: ['./articles-and-publications.component.scss']
})
export class ArticlesAndPublicationsComponent implements OnInit {

  // dataSource!: MatTableDataSource<Appointment>;
  // appointment!: Appointment[];
  // columns: string[] = ['sno','title','body','created','modified','published','url','user_id','view']
  // title,body,created,modified,published

  //  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  //  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


  constructor( ) { 
    // this.appointment = [{
    //   sno:'1',
    //   title:'1',
    //   view:'1',
    //   body:'1',
    //   created:'1',
    //   modified:'Mr.Ankit Kumar',
    //   url:'2020-02-20 10:10:12',
    //   published:' New-Delhi',
    //   user_id:'Divorce,High Court',
      
    // },
    // {
    //   sno:'2',
    //   title:'2',
    //   body:'2',
    //   view:'2',
    //   created:'2',
    //   modified:'Random',
    //   url:'2020-02-20 10:10:12',
    //   published:'Random',
    //   user_id:'random',
    // },
    // {
    //   sno:'3',
    //   title:'3',
    //   body:'3',
    //   view:'3',
    //   created:'3',
    //   modified:'Random',
    //   url:'2020-02-20 10:10:12',
    //   published:'Random',
    //   user_id:'random',
    // },
    // {
    //   sno:'4',
    //   title:'4',
    //   body:'4',
    //   view:'4',
    //   created:'4',
    //   modified:'Random',
    //   url:'2020-02-20 10:10:12',
    //   published:'Random',
    //   user_id:'random',
    // },
    // {
    //   sno:'5',
    //   title:'5',
    //   body:'5',
    //   view:'5',
    //   created:'5',
    //   modified:'Random',
    //   url:'2020-02-20 10:10:12',
    //   published:'Random',
    //   user_id:'random',
    // },
    // {
    //   sno:'6',
    //   title:'6',
    //   body:'6',
    //   view:'6',
    //   created:'6',
    //   modified:'Random',
    //   url:'2020-02-20 10:10:12',
    //   published:'Random',
    //   user_id:'random',
    // }];

    // this.dataSource = new MatTableDataSource(this.appointment);
  }

  ngOnInit(){
    // this.dataSource.sort =this.sort;
    // this.dataSource.paginator =this.paginator;

  }


  // applyFilter(event: any){
  //   const filterValue =(event.target as HTMLInputElement).value;

  //   this.dataSource.filter =filterValue.trim().toLowerCase();
  // }
}