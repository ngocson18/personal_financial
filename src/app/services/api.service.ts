import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { ApiRes } from '../models/api-res.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  request: any = null;

  protected apiServer = environment.apiServer;

  constructor(private httpClient: HttpClient) {
  }

  public headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  get( path: string, options: {}, callback: any ): Observable<any> {
    return this.httpClient.get<ApiRes>(this._buildUrl(path), options)
       .pipe(callback || '');
  }

  post( path: string, options: {}, headers: {}, callback: any ): Observable<any> {

    return this.httpClient.post<ApiRes>(this._buildUrl(path), options, headers)
      .pipe(callback || '');
  }

  put( path: string, options: {}, headers: {}, callback: any ): Observable<any> {

    return this.httpClient.put<ApiRes>(this._buildUrl(path), options, headers)
      .pipe(callback || '');
  }

  delete( path: string, options: {}, callback: any ): Observable<any> {

    return this.httpClient.delete<ApiRes>(this._buildUrl(path), options)
      .pipe(callback || '');
  }

  private _buildUrl( path: string ): string {
    if (path.includes('https://') || path.includes('http://')) {
      return path;
    }
    let baseUrl = this.apiServer.ssl === true ? 'https://' : 'http://';
    baseUrl += this.apiServer.host;
    if (this.apiServer.port !== '') {
      baseUrl += ':' + this.apiServer.port;
    }
    return baseUrl + '' + path;
  }
}
