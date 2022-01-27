import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExitDialogComponent } from './exit-dialog/exit-dialog.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarVar: EventEmitter<any>= new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  toggleSideBar(){
    this.toggleSideBarVar.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  openDialog() {
    const dialogRef = this.dialog.open(ExitDialogComponent);
  }
      
  

  
  
}
