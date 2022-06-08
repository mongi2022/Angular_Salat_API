import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../model/item';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
host=environment.host;
  constructor(private _http:HttpClient) { }

  //get all products service
  getAllProducts():Observable<Product[]>{

      return this._http.get<Product[]>(`${this.host}/salats`);
    }
    //get items

  }



