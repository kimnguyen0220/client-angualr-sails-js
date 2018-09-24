import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './common/base.service';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AssistantService extends BaseService {

	BASE_PATH = '/assistants'

  constructor( protected http: HttpClient) {
  	super (http);
   }

   getList() {
   	const url: string = BaseService.createAPIURL(this.BASE_PATH);
   	console.log(url);
   	return this.get(url);
   }

   create(params) {
     const url: string = BaseService.createAPIURL(this.BASE_PATH);
     return this.post(url, params);
   }

   getById(id) {
	  const url: string = BaseService.createAPIURL(`${this.BASE_PATH}/${id}`);
	  return this.get(url);
   }

   update(id, content) {
	  const url: string = BaseService.createAPIURL(`${this.BASE_PATH}/${id}`);
	  return this.put(url, content);
   }

   remove(id) {
	  const url: string = BaseService.createAPIURL(`${this.BASE_PATH}/${id}`);
	  return this.delete(url, id);
   }
}
