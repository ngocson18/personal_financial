import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private shareService: ShareService
  ) {
    this.shareService.openMenu(false);
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  onSubmit() {
    this.router.navigate(['overview']);
  }

}
