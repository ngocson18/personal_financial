import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent {

  constructor(
    public dialogService: MatDialog
  ) {

  }
  detail(template: any, id: number): void {
    this.dialogService.open(template, {width: '700px'});
  }
}
