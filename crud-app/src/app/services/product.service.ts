import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {environment} from '../../environments/environment'
import {Products} from '../products'
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private httpClient: HttpClient) {}
  
  // read all data
  getAllProducts(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(environment.apiUrl)
  }
  // read data by id 

  // delete data

  // update data
}
