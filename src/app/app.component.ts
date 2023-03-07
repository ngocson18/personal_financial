import { Component } from '@angular/core';
import { ShareService } from './services/share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coin-list';
  isOpen = false;

  constructor(
    private shareService: ShareService
  ) {
    this.shareService.currentStatus.subscribe(isOpen => this.isOpen = isOpen);
  }
}
