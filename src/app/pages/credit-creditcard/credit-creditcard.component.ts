import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-credit-creditcard',
  templateUrl: './credit-creditcard.component.html',
  styleUrls: ['./credit-creditcard.component.scss']
})
export class CreditCreditcardComponent {

  constructor(
    public dialogService: MatDialog
  ) {

  }
  buy(): void {

  }
  addNewCard(template: any) : void {
    this.dialogService.open(template, {width: '700px'});
  }

  tranfer(): void {

  }

  detail(): void {
    
  }

  openMenu(): void {
    
  }
}
