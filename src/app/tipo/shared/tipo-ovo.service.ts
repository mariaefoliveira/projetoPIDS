import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TipoOvoService {

  constructor(private http: HttpClient) { }

  public getTipoOvo(): Observable<any> {
    return this.http.get(`${environment.apiURL}/`)
  }

}
