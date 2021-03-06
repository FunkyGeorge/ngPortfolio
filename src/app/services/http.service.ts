import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
  private _ip = 'http://54.67.77.48';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  private handleError(error: any): Promise<any> {
    try {
      return Promise.reject(error.json().message);
    } catch (_) {
      return Promise.reject(error);
    }
  }

  private handleResponse(response: any): Promise<any> {
    try {
      return Promise.resolve(response.json());
    } catch (error) {
      return Promise.resolve(response);
    }
  }

  constructor(
    private http: Http
  ) { }

  get ip(): string {
    return this._ip;
  }

  //////////////////////////////////////////////////////
  //               HTTP METHODS
  //////////////////////////////////////////////////////
  delete(url: string): Promise<any> {
    const http = this.http;
    return http.delete(`${this._ip}${url}`)
      .toPromise()
      .then(response => this.handleResponse(response))
      .catch(error => this.handleError(error));
  }

  get(url: string): Promise<any> {
    const http = this.http;
    return http.get(`${this._ip}${url}`)
      .toPromise()
      .then(response => this.handleResponse(response))
      .catch(error => this.handleError(error));
  }

  post(url: string, data: any): Promise<any> {
    const http = this.http;
    return http.post(`${this._ip}${url}`, JSON.stringify(data), { headers: this.headers })
      .toPromise()
      .then(response => this.handleResponse(response))
      .catch(error => this.handleError(error));
  }

  put(url: string, data: any): Promise<any> {
    const http = this.http;
    return http.put(`${this._ip}${url}`, JSON.stringify(data), { headers: this.headers })
      .toPromise()
      .then(response => this.handleResponse(response))
      .catch(error => this.handleError(error));
  }

}