import { Injectable } from '@angular/core';
import { post } from './post.component';
import { POSTS } from './home/mock-posts';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsURL = 'https://prod-04.northcentralus.logic.azure.com/workflows/6d8e3bbcbb284983a5c9c902b04a6f51/triggers/manual/paths/invoke/rest/v1/post?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=OLEiCM1UXhsLtWsAlksoQxDnqY1qk5LCUBHKLMgX2W0';
  private UploadURL = 'https://prod-05.northcentralus.logic.azure.com/workflows/a19b913a3ea04b3581b3365d8b25ad74/triggers/manual/paths/invoke/rest/v1/upload?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ECmHj6_o2V4A-3i4M6vO1jse5dv7S_9A1JN3IvsjhZU'
  httpOptions= { headers: new HttpHeaders({ 'Content-Type': 'application/json'})}
  constructor(private http: HttpClient) { }

  getPosts(): Observable<post[]> {
    return this.http.get<post[]>(this.postsURL)
  }

  addPost(post : post): Observable<post>{
    return this.http.post<post>(this.UploadURL, post, this.httpOptions)
  }
}


