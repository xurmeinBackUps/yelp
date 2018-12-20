import { Component } from '@angular/core';
import { YelpSearchService } from './yelp-search.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'FeedMeNOW!';
  search : FormGroup
  results : Results
 
 
    
  constructor(
    private fb : FormBuilder,
    private yelp : YelpSearchService
  ) { }

  ngOnInit(){this.search = this.fb.group({
    zip: new FormControl(),
    price: new FormControl()
    })
  }
  
  async foodMe() {
    await this.yelp.getFoods(
      event,
      this.search.value.price,
      this.search.value.zip
    ).subscribe(food => 
      {this.results = food.businesses[Math.floor(Math.random() * 15)]
    })
  }
}

export class Results{
  results : any
}


