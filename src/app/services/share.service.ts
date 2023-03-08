import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  status = new BehaviorSubject<boolean>(false);
  title = new BehaviorSubject<string>('');
  currentStatus = this.status.asObservable();
  currentTitle = this.title.asObservable();
  constructor() { }

  openMenu(isOpen: boolean): void {
    this.status.next(isOpen);
  }

  getTitle(title: string): void {
    this.title.next(title);
  }
}
