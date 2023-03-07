import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectionStrategy} from '@angular/core';
import { UserService } from 'src/app/services/user.service';

import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs/internal/observable/of';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit  {
  Data!: TableElement[];
  col: string[] = ['id', 'name', 'email', 'website'];
  dataSource = new MatTableDataSource<TableElement>(this.Data);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  
  constructor(
    private userService: UserService,
  ) {
    this.userService.getUsers().subscribe((res) => {
      this.dataSource = new MatTableDataSource<TableElement>(res);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })
  }
  @ViewChild(MatSort)
  sort!: MatSort;
  
  ngOnInit(): void {
    this.getListToken();
  }

  getListToken(): any {
    // this.userService.getUser
    // .pipe(
    //   map((res: any) => {
    //     this.coinList = res;
    //     console.log('🚀 ~ this.coinList:', this.coinList);
    //     this.dataSource = new MatTableDataSource(this.coinList);
    //   }),
    //   catchError(error => of(`Bad Promise: ${error}`))
    // )
    // .subscribe()
  }
}
export interface TableElement {
  id: string;
  name: string;
  email: string;
  website: string;
}
