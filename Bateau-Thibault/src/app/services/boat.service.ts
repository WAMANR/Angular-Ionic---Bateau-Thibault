import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Recipices} from '../models/recipices';

@Injectable({
  providedIn: 'root'
})
export class BoatService {
  constructor(private http: HttpClient) { }

  getRecipice(): Observable<any>{
    return this.http.get<Recipices[]>('../assets/boat.json');
  }
}
