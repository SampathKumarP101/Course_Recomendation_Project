
import { Component } from '@angular/core';
import {DataService} from 'src/app/Services/data-service.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = "";

  constructor(private dataService: DataService) {}

  searchVideos() {
    this.dataService.searchVideos(this.searchQuery).subscribe((response: any) => {
      console.log(response);
      // do something with the search results
    });
  }

}
