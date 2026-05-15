import { inject, Injectable, signal } from '@angular/core';
import { BookApi } from '../services/books-api/book-api';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookStore {
  private bookApi = inject(BookApi);

  books = signal<Book[]>([]);

  loading = signal(false);

  error = signal<string | null>(null);

  // -------------------- Actions --------------------
  async loadBooks(page: number = 1, pageSize: number = 10): Promise<void> {
    this.loading.set(true);
    this.error.set(null);

    try {
      const result = await this.bookApi.getBooks().toPromise();

      if (result?.succeeded) {
        if (result.data) {
          this.books.set(result.data);
        }
      } else {
        this.error.set(result?.message || 'Failed to load books');
      }
    } catch (err) {
      console.error('Error loading books:', err);
      this.error.set('Failed to load books. Please try again.');
    } finally {
      this.loading.set(false);
    }
  }

}
