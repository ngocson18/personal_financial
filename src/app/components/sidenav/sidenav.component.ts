import { Component } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  constructor(
    private shareService: ShareService,
  ) {}
}
