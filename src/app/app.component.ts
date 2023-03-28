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

if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker(new URL('./app.worker', import.meta.url));
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}