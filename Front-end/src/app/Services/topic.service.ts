import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Topic} from '../Models/topic.model';

@Injectable({providedIn: 'root'})
export class TopicService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}
  public getTopics(): Observable<Topic[]> {
    console.log("Eccomi nella get con url "+`${this.apiServerUrl}/topics`);
    //console.log(this.http.get<User[]>(`${this.apiServerUrl}/users`));
    return this.http.get<Topic[]>(`${this.apiServerUrl}/topics`);
  }

}
