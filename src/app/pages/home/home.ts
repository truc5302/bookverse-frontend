import { Component, inject, OnInit } from '@angular/core';
import { Header } from '../../layouts/header/header';
import { BookStore } from '../../core/stores/book-store';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home',
  imports: [ MatProgressSpinnerModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private bookStore = inject(BookStore)
  route = inject(Router)

  books = this.bookStore.books
  loading = this.bookStore.loadBooks
  error = this.bookStore.error

  ngOnInit(): void {
    this.bookStore.loadBooks();
  }


  GotoDetail(id: string) {

    this.route.navigate([
      '/book',
      id
    ]);
  }



}
