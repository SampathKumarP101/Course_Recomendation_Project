import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://www.googleapis.com/youtube/v3/search';
  private apiKey = 'YOUR_API_KEY_HERE';

  constructor(private http: HttpClient) {}

  searchVideos(searchQuery: string) {
    const params = {
      q: searchQuery,
      key: this.apiKey,
      part: 'snippet',
      type: 'video'
    };
    return this.http.get(this.apiUrl, { params });
  }
}
