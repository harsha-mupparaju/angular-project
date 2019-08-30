import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

private my_url:string = "https://api.themoviedb.org/3/movie/popular?api_key=cd8baccaff62824401ee24b5d2113295&language=en-US";
  constructor(private http: HttpClient) { }

getMovies():Observable<any>{
  return this.http.get(this.my_url);
}
}