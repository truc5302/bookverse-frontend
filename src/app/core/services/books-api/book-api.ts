import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ApiResult } from '../../models/api-result.model';
import { Book, BookDetail } from '../../models/book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookApi {
  private apiUrl = `${environment.apiUrl}/books`;
  private http = inject(HttpClient);

  getBooks(page: number = 1, pageSize: number = 10): Observable<ApiResult<Book[]>> {
    return this.http.get<ApiResult<Book[]>>(`${this.apiUrl}`);
  }

  getBookById(id: string): Observable<ApiResult<BookDetail>> {
    return this.http.get<ApiResult<BookDetail>>(`${this.apiUrl}/${id}`);
  }

}
