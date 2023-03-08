import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/contains/menu';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  public isOpen = false;
  public menu = Menu;
  constructor(
    private shareService: ShareService,
    private router: Router
  ) {
    this.shareService.currentStatus.subscribe(el => this.isOpen = el);
  }

  openMenu(): void {
    this.isOpen = !this.isOpen;
    this.shareService.openMenu(this.isOpen);
  }

  goTo(page: string, title: string): void {
    this.router.navigate([`${page}`]);
    this.shareService.openMenu(false);
    this.shareService.getTitle(title);
  }
}
