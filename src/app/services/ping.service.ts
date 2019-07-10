import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';

export interface Pong {
  name: string;
  using: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class PingService {
  private pingUrl = 'http://127.0.0.1:5000/ping';

  constructor(
    private http: HttpClient
  ) {
  }

  getPong(): Observable<Pong> {
    return this.http.get<Pong>(this.pingUrl);
  }
}
