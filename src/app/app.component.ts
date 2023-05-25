// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'test';
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppComponent {
  private apiUrl = 'https://rest.resumeparsing.com/v10/parser/resume';

  constructor(private http: HttpClient) {}

  extractResumeData(base64Resume: string): Observable<any> {
    const postData = {
      DocumentAsBase64String: base64Resume,
      DocumentLastModified: new Date().toISOString()
    };

    return this.http.post(this.apiUrl, postData);
  }
}

// TYPESCRIPT