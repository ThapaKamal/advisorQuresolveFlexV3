import { Component, OnInit, ViewChild } from '@angular/core'; 
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn",
 
}


interface Reviews {
  sno: string;
  name: string;
  review: string;
  stars: any;  
}

@Component({
  selector: 'app-customer-reviews',
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.scss']
})
export class CustomerReviewsComponent implements OnInit {
 

 

  dataSource!: MatTableDataSource<Reviews>;
  reviews!: Reviews[];
  columns: string[] = ['sno','name','review','stars',]

  rating = 5
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;


   @ViewChild(MatSort, { static: true }) sort!: MatSort;
   @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor() {
    this.reviews = [{
      sno:'1',
      name:'Mr.Ankit Kumar',
      review:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      stars: 3,
  
    },
    {
      sno:'2',
      name:'Random',
      review:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      stars: 5
    },
    {
      sno:'3',
      name:'Random',
      review:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      stars: 1
    },
    {
      sno:'4',
      name:'Random',
      review:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      stars: 5
    },
    {
      sno:'5',
      name:'Random',
      review:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      stars: 4
    },
    {
      sno:'6',
      name:'Random',
      review:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      stars: 2
    }];

    this.dataSource = new MatTableDataSource(this.reviews);
   }
  ngOnInit() {
    this.dataSource.sort =this.sort;
    this.dataSource.paginator =this.paginator;

  
  }


  applyFilter(event: any){
    const filterValue =(event.target as HTMLInputElement).value;

    this.dataSource.filter =filterValue.trim().toLowerCase();
  }

  onRatingChanged(rating: number){
    console.log(rating);
    this.rating = rating;
  }

}
