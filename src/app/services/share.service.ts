import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  status = new BehaviorSubject<boolean>(false);
  currentStatus = this.status.asObservable();
  constructor() { }

  openMenu(isOpen: boolean): void {
    console.log('🚀 ~ isOpen:', isOpen);
    this.status.next(isOpen);
  }
}
