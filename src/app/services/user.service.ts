import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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

export interface User {
  id: string;
  name: string;
  email: string;
  website: string;
}