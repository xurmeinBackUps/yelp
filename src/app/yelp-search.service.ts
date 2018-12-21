import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const yelpBase = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses';

// const ClientID = 'k40AKKCDYwTF2eLye1QKZA';
const APIKey = 'f3gtKN6DeuF6Kq69kp4HDEsIdfi4JLiUq8aNMXQqhaSMyppy4rBLHRwlGs1mQkldE7JTcMEMEjLA1NiqWROWNo1JkeKNDFBianYmJPfw1ZqKvmpZl376FYJJGLcbXHYx';

const Options = {
  headers : new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':`Bearer ${APIKey}`,
    // 'X-Requested-With': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class YelpSearchService {

  constructor(
    private http : HttpClient
  ) { }

  
  getFoods(event, price,  location): Observable<any> {
    event.preventDefault();
    return this.http.get(`${yelpBase}/search?location=${location}&price=${price}&open_now=true`, Options)
    .pipe()
  }


}
