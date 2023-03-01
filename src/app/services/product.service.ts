import { environment } from './../../environments/environment.development';
import { Product } from './../core/models/product';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, of, catchError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  productList! : any[];

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
        console.error(error); // log to console instead    
        return of(result as T);
    };
  }

  ngOnInit(){
    this.getAll();
  }

  getAll():Observable<Product[]>{       
    return this.http.get<Product[]>(environment.api.product).pipe(
      catchError(this.handleError<Product[]>('getAll',[]))
    )
  }

  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(`${environment.api.product}/${id}`)
  }

}
