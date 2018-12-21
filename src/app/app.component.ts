import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { YelpSearchService } from './yelp-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'FeedMeNOW!';
  search : FormGroup
  food : Object
  
 
    
  constructor(
    private fb : FormBuilder,
    private yelp : YelpSearchService,
   
  ) { }

  ngOnInit(){this.search = this.fb.group({
    price: new FormControl(),
    zip: new FormControl()
    })
  }


  
  async foodMe(){
    await this.yelp.getFoods(
      event,
      this.search.value.price,
      this.search.value.zip
    ).subscribe(res => 
      {this.food =  res.businesses[Math.floor(Math.random() * 15)]
    })
  }
}