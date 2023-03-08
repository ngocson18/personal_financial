import { Component } from '@angular/core';
import { ShareService } from './services/share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Overview';
  isOpen = false;

  constructor(
    private shareService: ShareService
  ) {
    this.shareService.currentStatus.subscribe(isOpen => this.isOpen = isOpen);
    this.shareService.currentTitle.subscribe(el => this.title = el);
  }

  openMenu(): void {
    this.isOpen = !this.isOpen;
    this.shareService.openMenu(this.isOpen);
  }
}
