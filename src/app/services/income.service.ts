import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  // protected apiServerPaths = environment.apiServer.paths.home;
  protected apiServerPaths: string = "https://jsonplaceholder.typicode.com/users";
  constructor(
    private apiService: ApiService,
  ) { }

  getUsers = () => {
    return this.apiService.get(this.apiServerPaths, {}, map(response => {
      return response;
    }));
  }
}
