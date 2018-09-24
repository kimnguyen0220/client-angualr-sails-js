import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_HOST } from './constant.service'

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor( protected http: HttpClient ) { }

  static createAPIURL (path: string) {
  	return API_HOST + path;
  }

  public get(url: string) {
  	return this.http.get(url);
  }

  public post(url: string, params: any) {
  	return this.http.post(url, params);
  }

  public put(url: string, params: any) {
    return this.http.put(url, params);
  }

  public delete(url: string, params: any) {
    return this.http.delete(url, params);
    
  }
}
