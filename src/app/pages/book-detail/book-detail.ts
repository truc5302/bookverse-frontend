import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookApi } from '../../core/services/books-api/book-api';
import { Book } from '../../core/models/book.model';
import { BookStore } from '../../core/stores/book-store';

@Component({
  selector: 'app-book-detail',
  imports: [],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.scss',
})
export class BookDetail {
  private activatedRoute =
  inject(ActivatedRoute);
  id = this.activatedRoute.snapshot.paramMap.get('id');

  private route =
    inject(ActivatedRoute);

  private router =
    inject(Router);

  private service =
    inject(BookApi);
  
  private bookStore = inject(BookStore);

  bookDetails = this.bookStore.bookDetails;
  
  loading = this.bookStore.loadBookDetails;
  
  error = this.bookStore.errorBookDetails;
  
  ngOnInit(): void {

    const id =
      this.route.snapshot
        .paramMap
        .get('id');

    if (!id) return;

    this.getBookById(id);
  }

  getBookById(id: string) {
    this.bookStore
      .loadBookById(id);
  }

  goBack() {

    this.router.navigate(['/']);
  }
}
